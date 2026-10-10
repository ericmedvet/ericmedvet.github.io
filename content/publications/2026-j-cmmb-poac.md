{
  "title": "PoAC: Problem-oriented AutoML in Clustering",
  "pub_year": 2026,
  "pub_accept_year": 2026,
  "pub_type": "Journal",
  "pub_venue_name": "Machine Learning",
  "pub_authors": "Camilo da Silva, Metheus; Marques Tavares, Gabriel; Medvet, Eric; Barbon Jr, Sylvio",
  "pub_notes": "To appear",
  "pub_venue_rank": "Q1",
  "pub_venue_rank_subject": "Artificial Intelligence",
  "pub_venue_rank_source": "scimagojr",
  "pub_important": false
}

## Abstract
This work presents the Problem-oriented AutoML in Clustering (PoAC) framework, a flexible approach to automating clustering tasks that addresses key limitations of existing AutoML solutions. Traditional methods typically rely on fixed sets of meta-features and predefined internal Cluster Validity Indices (CVIs), limiting their adaptability across different problem contexts. PoAC introduces a modular design in which the core methodology, comprising meta-feature extraction, surrogate model training, and optimization, is fixed, while the specific configuration of components is user-defined. This design allows users to dynamically instantiate PoAC for different clustering goals by selecting which meta-features to extract, which CVIs to optimize, and how to structure the learning task. The framework is algorithm-agnostic and can adapt to diverse clustering problems without retraining from scratch. In the visualization-oriented study, PoAC obtained the highest mean ARI and SIL and the lowest mean DBS among the evaluated AutoML frameworks. In the anomaly-detection study, it obtained higher F1 scores than IForest on most of the eight datasets and broadly comparable ROC AUC values. These findings are limited to the reported datasets, baselines, search spaces, and computational budgets.
