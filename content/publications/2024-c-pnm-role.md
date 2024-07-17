{
  "title": "The Role of the Substrate in CA-based Evolutionary Algorithms",
  "pub_year": 2024,
  "pub_accept_year": 2024,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Melbourne",
  "pub_location_country": "Australia",
  "pub_authors": "Pietropolli, Gloria; Nichele, Stefano; Medvet, Eric",
  "pub_doi": "10.1145/3638529.3654112",
  "pub_publisher_url": "https://dl.acm.org/doi/10.1145/3638529.3654112",
  "pub_fulltext_url": "https://drive.google.com/file/d/1XXRIPHlDitEQMD4a34uesRxt19R2KrXT/view",
  "pub_slides_url": "https://drive.google.com/file/d/1iZQjpBymxsyczCbqjG_owRFTmv8-m5WL/view",
  "pub_video_url": "https://youtu.be/4hz17IJX-VM",
  "pub_important": false
}

## Abstract
Cellular automata (CA) are a convenient way to describe the distributed evolution of a dynamical system over discrete time and space. They can be used to express evolutionary algorithms (EAs), where the time is the flow of iterations and the space is where the population is hosted. When the CA evolves over a finite grid of cells, the substrate, each cell hosts an individual and the CA rule applies variation operators using the local and neighbor individuals. In this paper, we explore the possibility of enforcing a structure on the substrate. Instead of a flat toroidal grid, we use substrates where some empty cells never host individuals. These cells may act as barriers, slowing down the propagation of genetic traits and hence potentially improving the population diversity, eventually mitigating the risk of premature convergence. We experimentally evaluate the impact of these substrates using a simple CA-based EA on multi-modal and multi-objective problems. We find evidence of a positive impact in some circumstances; on multi-modal problems, convergence is slightly faster and the EA more often reaches all the targets.
