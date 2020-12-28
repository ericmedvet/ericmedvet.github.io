{
  "title": "Learning Text Patterns using Separate-and-Conquer Genetic Programming",
  "pub_year": "2015",
  "pub_type": "Conference",
  "pub_venue_name": "European Conference on Genetic Programming",
  "pub_venue_number": "18th",
  "pub_venue_acronym": "EuroGP",
  "pub_location_city": "Copenhagen",
  "pub_location_country": "Denmark",
  "pub_authors": "Bartoli, Alberto; De Lorenzo, Andrea; Medvet, Eric; Tarlao, Fabiano",
  "pub_fulltext_url": "https://drive.google.com/uc?export=download&id=1ifZ6QuMkoO9LqL2Isq8VAVghVPRwBPDK",
  "pub_slides_url": "https://drive.google.com/uc?export=download&id=1EVh3OiiuTOR31N2vWAk2oGHinDtw3lvu",
  "pub_important": false
}

## Abstract
The problem of extracting knowledge from large volumes of unstructured textual information has become increasingly important. We consider the problem of extracting text slices that adhere to a syntactic pattern and propose an approach capable of generating the desired pattern automatically, from a few annotated examples. Our approach is based on Genetic Programming and generates extraction patterns in the form of regular expressions that may be input to existing engines without any post-processing. Key feature of our proposal is its ability of discovering automatically whether the extraction task may be solved by a single pattern, or rather a set of multiple patterns is required. We obtain this property by means of a separate-and-conquer strategy: once a candidate pattern provides adequate performance on a subset of the examples, the pattern is inserted into the set of final solutions and the evolutionary search continues on a smaller set of examples including only those not yet solved adequately. Our proposal outperforms an earlier state-of-the-art approach on three challenging datasets.
