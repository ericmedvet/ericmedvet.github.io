{
  "title": "Trace-Elites: better Quality-Diversity with Multi-Point Descriptors",
  "pub_year": 2025,
  "pub_accept_year": 2025,
  "pub_type": "Conference",
  "pub_venue_name": "International Conference on the Applications of Evolutionary Computation",
  "pub_venue_number": "28th",
  "pub_venue_acronym": "EvoAPPS",
  "pub_location_city": "Trieste",
  "pub_location_country": "Italy",
  "pub_authors": "Ludwig, Harald Michael; Espeseth, Ane; Medvet, Eric",
  "pub_notes": "To appear",
  "pub_fulltext_url": "https://drive.google.com/file/d/1smZdtTEX0sFRU4Fip0E2i39ae-wwset6/view",
  "pub_important": false
}

## Abstract
MAP-Elites (ME) has been shown to be a successful way for solving quality-diversity (QD) optimization problems, i.e., those where the goal is to obtain many diverse solutions of high quality, rather than just one single solution. ME achieves diversity by organizing the population in an archive, where solutions are indexed by a descriptor, i.e., a function mapping each solution to a point in a p-dimensional space. There are however cases where mapping a solution to a single point is not enough for describing it: for instance, when the descriptor should capture the behavior of a robotic agent during a simulation and this behavior has many relevant facets. In this paper, we propose a simple modification of the standard ME which addresses this limitation by employing a descriptor which, in general, maps every solution to one or more points in R^p. We call this novel extension Trace-Elites (TE), as the image of a solution in the descriptor space extends across several points, hence corresponding to a sort of trace left by the solution. We experimentally assess the effectiveness of TE on a set of QD problems consisting in the optimization of a controller of a simulated robot which is required to navigate an arena. We show that TE outperforms ME in effectiveness (in terms of both quality and diversity) and efficiency. We also show that, at least in the specific problem considered here, the visualization of the archive evolved by TE gives more insights about the problem than ME ones, potentially permitting a more informed choice of the solutions by the designer.
