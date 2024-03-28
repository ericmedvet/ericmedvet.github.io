{
  "title": "A Fully-distributed Shape-aware Neural Controller for Modular Robots",
  "pub_year": 2023,
  "pub_accept_year": 2023,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Lisbon",
  "pub_location_country": "Portugal",
  "pub_authors": "Nadizar, Giorgia; Medvet, Eric; Walker, Kathryn; Risi, Sebastian",
  "pub_doi": "10.1145/3583131.3590419",
  "pub_publisher_url": "https://dl.acm.org/doi/10.1145/3583131.3590419",
  "pub_fulltext_url": "https://drive.google.com/file/d/1qpA7IpTJS881gjvu0kYHmkr5XraCZB28/view",
  "pub_slides_url": "https://drive.google.com/file/d/1Cps3JFwQx-p9emQr9rAbjJkBv-xq_2BX/view",
  "pub_important": false
}

## Abstract
Modular robots are promising for their versatility and large design freedom. Modularity can also enable automatic assembly and reconfiguration, be it autonomous or via external machinery. However, these procedures are error-prone and often result in misassemblings. This, in turn, can cause catastrophic effects on the robot functionality, as the controller deployed in each module is optimized for a different robot shape than the actual one. In this work, we address such shortcoming by proposing a shape-aware modular controller, operating with (1) a *self-discovery* phase, in which each module controller identifies the shape it is assembled in, followed by (2) a *parameter selection* phase, where the controller selects its parameters according to the inferred shape. We deploy a self-classifying neural cellular automaton for phase (1), and we leverage evolutionary optimization for implementing a library of controller parameters for phase (2). We test the validity of the proposed method considering voxel-based soft robots, a class of modular soft robots, and the task of locomotion. Our findings confirm the effectiveness of such a controller paradigm, and also show that it can be used to partially overcome unforeseen damages or assembly mistakes.

## Videos
[Videos of the running robots](https://drive.google.com/drive/u/1/folders/12t2Wt07PzQCRFTkeEwCi4rK_71F9S650)