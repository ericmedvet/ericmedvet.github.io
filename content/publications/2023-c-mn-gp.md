{
  "title": "GP for Continuous Control: Teacher or Learner? The Case of Simulated Modular Soft Robots",
  "pub_year": 2023,
  "pub_accept_year": 2023,
  "pub_type": "Conference",
  "pub_venue_name": "Genetic Programming Theory & Practice",
  "pub_venue_number": "XX",
  "pub_venue_acronym": "GPTP",
  "pub_location_city": "East Lansing",
  "pub_location_country": "USA",
  "pub_authors": "Medvet, Eric; Nadizar, Giorgia",
  "pub_doi": "10.1007/978-981-99-8413-8_11",
  "pub_notes": "To appear",
  "pub_fulltext_url": "https://drive.google.com/file/d/1sxsxIg2DoE05JqSdzqS6alubSQ_XST0p/view",
  "pub_slides_url": "https://medvet.inginf.units.it/slides/2023-gptp-gp-continuous-control-imitation/#1",
  "pub_important": false
}

## Abstract
We consider the problem of optimizing a controller for agents whose observation and action spaces are continuous, i.e., where the controller is a multivariate real function f: R^n → R^m. We use genetic programming (GP) for solving this optimization problem. Namely, we employ a multi-tree-based GP variant, where a candidate solution is an array of m trees, each encoding a univariate function of the agent observation. We compare this form of optimization against the more common one where the controller is a multi-layer perceptron, with a predefined topology, whose weights are optimized through (neuro)evolution (NE). Moreover, we consider an evolutionary algorithm, GraphEA, that directly evolves graphs, each having n input nodes and m output nodes. We apply these three approaches to the case of simulated modular soft robots, where a robot is an aggregation of identical soft modules, each employing a controller that processes the local observation and produces the local action. We find that, in our scenario, multi-tree-based GP is competitive with NE and tends to produce different behaviors. We then experimentally investigate the possibility of optimizing a controller using another, pre-optimized one, as teacher, i.e., we realize a form of offline imitation learning. We consider all the teacher-learner pairs resulting from the three evolutionary algorithms and find that NE is a better learner than GP and GraphEA. However, controllers obtained through offline imitation learning are far less effective than those obtained through direct evolution. We hypothesize that this gap in effectiveness may be explained by the possibility, given by direct evolution, of exploring during the simulations a larger portion of the observation-action space.

## Code, data, and videos
[Github repository](https://github.com/ericmedvet/2023-GPForContinuousControlAndLearning)