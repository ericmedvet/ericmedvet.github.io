{
  "title": "Playing Regex Golf with Genetic Programming",
  "pub_year": 2014,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Vancouver",
  "pub_location_country": "Canada",
  "pub_authors": "Bartoli, Alberto; De Lorenzo, Andrea; Medvet, Eric; Tarlao, Fabiano",
  "pub_fulltext_url": "https://drive.google.com/file/d/1s2Ag2EfakrnVg7JdAIVePk3kR9q63G3K/view",
  "pub_slides_url": "https://drive.google.com/file/d/1h8QOD23vwz2HiFI3xFLY7CFYA2EgVs4Q/view",
  "pub_important": false
}

## Abstract
Regex golf has recently emerged as a specific kind of code golf, i.e., unstructured and informal programming competitions aimed at writing the shortest code solving a particular problem. A problem in regex golf consists in writing the shortest regular expression which matches all the strings in a given list and does not match any of the strings in another given list. The regular expression is expected to follow the syntax of a specified programming language, e.g., Javascript or PHP.In this paper, we propose a regex golf player internally based on Genetic Programming. We generate a population of candidate regular expressions represented as trees and evolve such population based on a multi-objective fitness which minimizes the errors and the length of the regular expression.We assess experimentally our player on a popular regex golf challenge consisting of 16 problems and compare our results against those of a recently proposed algorithm---the only one we are aware of. Our player obtains scores which improve over the baseline and are highly competitive also with respect to human players. The time for generating a solution is usually in the order of tens minutes, which is arguably comparable to the time required by human players.
