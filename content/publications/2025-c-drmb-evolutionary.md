{
  "title": "Evolutionary Synthesis of Probabilistic Programs",
  "pub_year": 2025,
  "pub_accept_year": 2025,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Malaga",
  "pub_location_country": "Spain",
  "pub_authors": "Doz, Romina; Randone, Francesca; Medvet, Eric; Bortolussi, Luca",
  "pub_doi": "10.1145/3712256.3726388",
  "pub_publisher_url": "https://dl.acm.org/doi/10.1145/3712256.3726388",
  "pub_fulltext_url": "https://drive.google.com/file/d/14Ojk17xWd_I5cDaQAlwiJfe0WJEzlZRD/view",
  "pub_important": false
}

## Abstract
Modeling the relationships between variables through probability distributions lies at the core of probabilistic models, enabling reasoning under uncertainty. Probabilistic programming offers an effective way to represent these models by blending the simplicity of standard programming constructs with the power of automatic inference algorithms. The languages for expressing probabilistic programs are augmented with primitives representing various probability distributions to effectively capture the stochastic behavior inherent in the data. However, writing a probabilistic program is hard, because it typically requires prior knowledge about the data generation mechanism. In this work, we propose a framework for automatically synthesizing probabilistic programs directly from data, thereby learning the underlying relationships between variables and the data-generating process. We adopt an evolutionary approach, specifically grammatical evolution (GE), to extensively explore the space of probabilistic programs, aiming to discover the most likely program that describes the observed data. We experimentally evaluate our method across several benchmarks, incorporating varying levels of prior knowledge through a sketching strategy embedded into the grammar fed to GE, to demonstrate the potential of this evolutionary framework. This evaluation highlights the flexibility and effectiveness of GE in synthesizing probabilistic programs under different informational constraints.
