{
  "title": "Automatic Search-and-Replace from Examples with Coevolutionary Genetic Programming",
  "pub_year": "2019",
  "pub_type": "Journal",
  "pub_venue_name": "IEEE Transactions on Cybernetics",
  "pub_venue_acronym": "TCyb",
  "pub_authors": "Bartoli, Alberto; De Lorenzo, Andrea; Medvet, Eric; Tarlao, Fabiano",
  "pub_doi": "10.1109/TCYB.2019.2918337",
  "pub_publisher_url": "https://ieeexplore.ieee.org/document/8734703",
  "pub_fulltext_url": "https://drive.google.com/uc?export=download&id=15wHMrMm9uYNac4BqhxPCbFEUBlDLxkyZ",
  "pub_important": true
}

## Abstract
We describe the design and implementation of a system for executing search-and-replace text processing tasks automatically, based only on examples of the desired behavior. The examples consist of pairs describing the original string and the desired modified string. Their construction, thus, does not require any specific technical skill. The system constructs a solution to the specified task that can be used unchanged on popular existing software for text processing. The solution consists of a search pattern coupled with a replacement expression: the former is a regular expression which describes both the strings to be replaced and their portions to be reused in the latter, which describes how to build the modified strings. Our proposed system is internally based on Genetic Programming and implements a form of cooperative coevolution in which two separate populations are evolved independently, one for search patterns and the other for replacement expressions. We assess our proposal on six tasks of realistic complexity obtaining very good results, both in terms of absolute quality of the solutions and with respect to the challenging baselines considered.
