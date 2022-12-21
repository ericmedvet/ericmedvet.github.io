"use strict";

const fs = require("fs");
const path = require("path");
const request = require("request");
const sw = require("stopword"); //requires `npm i stopword`

const fieldMap = {
  Title: "title",
  Year: "pub_year",
  AcceptanceYear: "pub_accept_year",
  Type: "pub_type",
  VenueName: "pub_venue_name",
  VenueNumber: "pub_venue_number",
  VenueAcronym: "pub_venue_acronym",
  ConferenceCity: "pub_location_city",
  ConferenceCountry: "pub_location_country",
  Authors: "pub_authors",
  Doi: "pub_doi",
  ShortNotes: "pub_notes",
  PublisherUrl: "pub_publisher_url",
  FullTextUrl: "pub_fulltext_url",
  SlidesUrl: "pub_slides_url",
  VideoUrl: "pub_video_url",
  VenueRank: "pub_venue_rank",
  VenueRankSubjectCategory: "pub_venue_rank_subject",
  VenueRankSource: "pub_venue_rank_source"
};
const authorsFieldName = "Authors";
const abstractFieldName = "Abstract";
const otherTextFieldName = "LongNotes";
const flagsFieldName = "Flags";
const driveUrlDownloadPrefix = "https://drive.google.com/uc?export=download&id="
const driveUrlViewTemplate = "https://drive.google.com/file/d/DOC_ID/view";

const jsonUrl = process.argv[2];
const targetDir = process.argv[3];
const authorName = process.argv[4];
const importantFlagRegex = process.argv[5];

var parseResponse = function(data) {
  var cols = data.table.cols.map(({label}) => label.replace(/[^A-Za-z0-9]+/g, ' ').toLowerCase().split(" ").map((t)=>t.substring(0,1).toUpperCase()+t.substring(1)).join(""));
  return data.table.rows.map(function(r) {
    var entry = {};
    for (var i in r.c) {
      entry[cols[i]] = r.c[i]?r.c[i].v:undefined;
    }
    return entry;
  });
}

var buildAndSaveFiles = function(entries) {
  console.log("Iterating on entries");
  for (var i in entries) {
    var entry = entries[i];
    var authors = entry[authorsFieldName];
    if (authors.indexOf(authorName) < 0) {
      console.log("Skipping entry with authors: " + authors);
      continue;
    }
    var metaData = {};
    for (var key in fieldMap) {
      if ((entry[key] != undefined)&&(entry[key] != "")) {
        metaData[fieldMap[key]] = entry[key];
        if (key.endsWith("Url")) {
          var url = entry[key];
          if (url.substring(0, driveUrlDownloadPrefix.length)==driveUrlDownloadPrefix) {
            var docId = url.substring(driveUrlDownloadPrefix.length);
            metaData[fieldMap[key]] = driveUrlViewTemplate.replace(/DOC_ID/g, docId);
          }
        }
      }
    }
    var abstract = entry[abstractFieldName];
    var otherText = entry[otherTextFieldName];
    var flags = entry[flagsFieldName];
    metaData.pub_important = (flags!=undefined)&&(flags.match(importantFlagRegex)!=null);
    var string = JSON.stringify(metaData, null, 2);
    string += "\n\n";
    string += "## Abstract\n";
    string += abstract + "\n";
    if (otherText) {
      string += "\n" + otherText;
    }
    var pubFileName =
      metaData.pub_accept_year +
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
    var response = body.match(/(?<=.*\().*(?=\);)/s)[0];
    var entries = parseResponse(JSON.parse(response));
    console.log("Found " + entries.length + " entries");
    buildAndSaveFiles(entries);
  }
});
