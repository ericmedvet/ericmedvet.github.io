{
  "title": "Learning a Formula of Interpretability to Learn Interpretable Formulas",
  "pub_year": "2020",
  "pub_type": "Conference",
  "pub_venue_name": "International Conference on Parallel Problem Solving from Nature",
  "pub_venue_number": "16th",
  "pub_venue_acronym": "PPSN",
  "pub_location_city": "Leiden",
  "pub_location_country": "Netherlands",
  "pub_authors": "Virgolin, Marco; De Lorenzo, Andrea; Medvet, Eric; Randone, Francesca",
  "pub_doi": "10.1007/978-3-030-58115-2_6",
  "pub_publisher_url": "https://link.springer.com/chapter/10.1007%2F978-3-030-58115-2_6",
  "pub_fulltext_url": "https://drive.google.com/uc?export=download&id=1qvG7bu9adWkb830l77BrEfvMCGlM1MCZ",
  "pub_important": false
}

## Abstract
Many risk-sensitive applications require Machine Learning (ML) models to be interpretable. Attempts to obtain interpretable models typically rely on tuning, by trial-and-error, hyper-parameters of model complexity that are only loosely related to interpretability. We show that it is instead possible to take a meta-learning approach: an ML model of non-trivial Proxies of Human Interpretability (PHIs) can be learned from human feedback, then this model can be incorporated within an ML training process to directly optimize for interpretability. We show this for evolutionary symbolic regression. We first design and distribute a survey finalized at finding a link between features of mathematical formulas and two established PHIs, simulatability and decomposability. Next, we use the resulting dataset to learn an ML model of interpretability. Lastly, we query this model to estimate the interpretability of evolving solutions within bi-objective genetic programming. We perform experiments on five synthetic and eight real-world symbolic regression problems, comparing to the traditional use of solution size minimization. The results show that the use of our model leads to formulas that are, for a same level of accuracy-interpretability trade-off, either significantly more or equally accurate. Moreover, the formulas are also arguably more interpretable. Given the very positive results, we believe that our approach represents an important stepping stone for the design of next-generation interpretable (evolutionary) ML algorithms.
