{
  "title": "Model Learning with Personalized Interpretability Estimation (ML-PIE)",
  "pub_year": 2021,
  "pub_accept_year": 2021,
  "pub_type": "Conference",
  "pub_venue_name": "Workshop on Evolutionary Computation and Decision Making",
  "pub_venue_acronym": "EC+DM@GECCO",
  "pub_authors": "Virgolin, Marco; De Lorenzo, Andrea; Randone, Francesca; Medvet, Eric; Mattias Wahde",
  "pub_doi": "10.1145/3449726.3463166",
  "pub_publisher_url": "https://dl.acm.org/doi/10.1145/3449726.3463166",
  "pub_fulltext_url": "https://drive.google.com/file/d/1fpsVAJo09mizg9_TIsjd384TYMXXTNG4/view",
  "pub_important": false
}

## Abstract
High-stakes applications require AI-generated models to be interpretable. Current algorithms for the synthesis of potentially interpretable models rely on objectives or regularization terms that represent interpretability only coarsely (e.g., model size) and are not designed for a specific user. Yet, interpretability is intrinsically subjective. In this paper, we propose an approach for the synthesis of models that are tailored to the user by enabling the user to steer the model synthesis process according to her or his preferences. We use a bi-objective evolutionary algorithm to synthesize models with trade-offs between accuracy and a user-specific notion of interpretability. The latter is estimated by a neural network that is trained concurrently to the evolution using the feedback of the user, which is collected using uncertainty-based active learning. To maximize usability, the user is only asked to tell, given two models at the time, which one is less complex. With experiments on two real-world datasets involving 61 participants, we find that our approach is capable of learning estimations of interpretability that can be very different for different users. Moreover, the users tend to prefer models found using the proposed approach over models found using non-personalized interpretability indices.
