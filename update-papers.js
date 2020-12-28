"use strict";

const fs = require("fs");
const path = require("path");
const request = require("request");
const sw = require("stopword"); //requires `npm i stopword`

const fieldMap = {
  title: "title",
  year: "pub_year",
  type: "pub_type",
  venuename: "pub_venue_name",
  venuenumber: "pub_venue_number",
  venueacronym: "pub_venue_acronym",
  conferencecity: "pub_location_city",
  conferencecountry: "pub_location_country",
  authors: "pub_authors",
  doi: "pub_doi",
  shortnotes: "pub_notes",
  publisherurl: "pub_publisher_url",
  fulltexturl: "pub_fulltext_url",
  slidesurl: "pub_slides_url",
  videourl: "pub_video_url"
};
const authorsFieldName = "authors";
const abstractFieldName = "abstract";
const otherTextFieldName = "longnotes";
const flagsFieldName = "flags";

const jsonUrl = process.argv[2];
const targetDir = process.argv[3];
const authorName = process.argv[4];
const importantFlagRegex = process.argv[5];

var buildAndSaveFiles = function(data) {
  console.log("Iterating on entries");
  for (var i in data.feed.entry) {
    var authors = data.feed.entry[i]["gsx$" + authorsFieldName]["$t"];
    if (authors.indexOf(authorName) < 0) {
      console.log("Skipping entry with authors: " + authors);
      continue;
    }
    var metaData = {};
    for (var key in fieldMap) {
      if (data.feed.entry[i]["gsx$" + key] != undefined) {
        if (data.feed.entry[i]["gsx$" + key]["$t"] != "")
          metaData[fieldMap[key]] = data.feed.entry[i]["gsx$" + key]["$t"];
      }
    }
    var abstract = data.feed.entry[i]["gsx$" + abstractFieldName]["$t"];
    var otherText = data.feed.entry[i]["gsx$" + otherTextFieldName]["$t"];
    var flags = data.feed.entry[i]["gsx$" + flagsFieldName]["$t"];
    metaData.pub_important = flags.match(importantFlagRegex)!=null;
    var string = JSON.stringify(metaData, null, 2);
    string += "\n\n";
    string += "## Abstract\n";
    string += abstract + "\n";
    if (otherText) {
      string += otherText;
    }
    var pubFileName =
      metaData.pub_year.trim() +
      "-" +
      metaData.pub_type.toLowerCase().replace(/ /g, "").trim().substring(0, 1) +
      "-";
    var authorsTokens = authors.toLowerCase().split(";");
    for (var j in authorsTokens) {
      pubFileName += authorsTokens[j].trim().substring(0, 1);
    }
    pubFileName += "-";
    var titleTokens = metaData.title.toLowerCase().split(/[^a-z]+/);
    var cleanTitleTokens = sw.removeStopwords(titleTokens);
    cleanTitleTokens = cleanTitleTokens.filter(function (s) {
      return s.length > 1;
    });
    if (cleanTitleTokens.length > 0) {
      pubFileName += cleanTitleTokens[0];
    } else {
      pubFileName += titleTokens[0];
    }
    pubFileName += ".md";
    var pubFilePath = targetDir + path.sep + pubFileName;
    console.log(
      "Writing publication file " +
        pubFilePath +
        " for entry titled " +
        metaData.title
    );
    fs.writeFile(pubFilePath, string, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
}

request.get(jsonUrl, function(error, response, body) {
  console.log("Downloading json from " + jsonUrl);
  if (!error && response.statusCode == 200 ) {
    console.log("Done: " + body.length + " bytes");
    buildAndSaveFiles(JSON.parse(body));
  }
});
