{
  "title": "Evolution of Distributed Neural Controllers for Voxel-based Soft Robots",
  "pub_year": 2020,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Cancun",
  "pub_location_country": "Mexico",
  "pub_authors": "Medvet, Eric; Bartoli, Alberto; De Lorenzo, Andrea; Fidel, Giulio",
  "pub_doi": "10.1145/3377930.3390173",
  "pub_publisher_url": "https://dl.acm.org/doi/abs/10.1145/3377930.3390173",
  "pub_fulltext_url": "https://drive.google.com/uc?export=download&id=1pLn1GEVUoII7acgyf7gZ6vHFhBfCTXgj",
  "pub_slides_url": "https://drive.google.com/uc?export=download&id=1JJyJ4wDBB7XNoepnvmMm2c9WVQG7uPaq",
  "pub_video_url": "https://www.youtube.com/watch?v=jj5xOlF4mK4",
  "pub_important": true
}

## Abstract
Voxel-based soft robots (VSRs) are aggregations of elastic, cubic blocks that have sparkled the interest of Robotics and Artificial Life researchers. VSRs can move by varying the volume of individual blocks, according to control signals dictated by a controller, possibly based on inputs coming from sensors embedded in the blocks. Neural networks (NNs) have been used as centralized processing units for those sensing controllers, with weights optimized using evolutionary computation. This structuring breaks the intrinsic modularity of VSRs: decomposing a VSR into modules to be assembled in a different way is very hard.
In this work we propose an alternative approach that enables full modularity and is based on a distributed neural controller. Each block contains a small NN that outputs signals to adjacent blocks and controls the local volume, based on signals from adjacent blocks and on local sensor readings. We show experimentally for the locomotion task that our controller is as effective as the centralized one. Our experiments also suggest that the proposed framework indeed allows exploiting modularity: VSRs composed of pre-trained parts (body and controller) can be evolved more efficiently than starting from scratch.
