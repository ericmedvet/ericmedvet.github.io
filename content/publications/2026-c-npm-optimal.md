{
  "title": "Optimal Mixing in Graph-Based GP for Control: Genotypical Dependencies Are Hardly Captured",
  "pub_year": 2026,
  "pub_accept_year": 2026,
  "pub_type": "Conference",
  "pub_venue_name": "European Conference on Genetic Programming",
  "pub_venue_number": "29th",
  "pub_venue_acronym": "EuroGP",
  "pub_location_city": "Toulouse",
  "pub_location_country": "France",
  "pub_authors": "Nadizar, Giorgia; Pietropolli, Gloria; Medvet, Eric",
  "pub_notes": "To appear",
  "pub_important": false
}

## Abstract
Graph-based genetic programming (GGP) encompasses representations that evolve modular graphs or computer programs with multiple inputs and outputs, making it well suited for addressing complex real-world problems. To fully exploit this potential, variation operators need to capture and preserve structural dependencies within program graphs. The gene-pool optimal mixing evolutionary algorithm (GOMEA) is a model-based evolutionary algorithm whose strength lies in learning and exploiting such dependencies, making it a natural candidate for GGP. In this work, we investigate the integration of GOMEA with GGP. We first validate the approach on symbolic regression (SR) benchmarks, with both single and multiple outputs, where GOMEA consistently matches or outperforms a standard genetic algorithm (GA). Then, we apply GOMEA to continuous control tasks—an important application domain for GGP—and find it often struggles compared to the GA. We hypothesize that this limitation arises from the difficulty of identifying and exploiting meaningful dependencies in the inherently chaotic and high-dimensional landscapes of control problems. Thus, our findings call for further studies to improve dependency-learning mechanisms for complex, dynamic domains.
