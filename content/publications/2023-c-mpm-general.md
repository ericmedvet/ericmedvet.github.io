{
  "title": "A General Purpose Representation and Adaptive EA for Evolving Graphs",
  "pub_year": 2023,
  "pub_accept_year": 2023,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Lisbon",
  "pub_location_country": "Portugal",
  "pub_authors": "Medvet, Eric; Pozzi, Simone; Manzoni, Luca",
  "pub_doi": "10.1145/3583131.3590431",
  "pub_publisher_url": "https://dl.acm.org/doi/10.1145/3583131.3590429",
  "pub_fulltext_url": "https://drive.google.com/file/d/16RvursYMS7aGlZHXFhxewEu-p3oLD8VQ/view",
  "pub_slides_url": "https://drive.google.com/file/d/11CFoR8_8NA8GNTXLDbece5qSNe_drwvG/view",
  "pub_video_url": "https://youtu.be/jS2k7Z0dRlU",
  "pub_important": false
}

## Abstract
Graphs are a way to describe complex entities and their relations that apply to many practically relevant domains. However, domains often differ not only in the properties of nodes and edges, but also in the constraints imposed to the overall structure. This makes hard to define a general representation and genetic operators for graphs that permit the evolutionary optimization over many domains. In this paper, we tackle this challenge. We first propose a representation template that can be customized by users for specific domains: the constraints and the genetic operators are given in Prolog, a declarative programming language for operating with logic. Then, we define an adaptive evolutionary algorithm that can work with a large number of genetic operators by modifying their usage probability during the evolution: in this way, we relieve the user from the burden of selecting in advance only operators that are "good enough". We experimentally evaluate our proposal on two radically different domains to demonstrate its applicability and effectiveness: symbolic regression with trees and text extraction with finite-state automata. The results are promising: our approach does not trade effectiveness for versatility and is not worse than other domain-tailored approaches.
