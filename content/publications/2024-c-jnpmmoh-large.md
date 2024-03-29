{
  "title": "Large Language Model-based Test Case Generation for GP Agents",
  "pub_year": 2024,
  "pub_accept_year": 2024,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Melbourne",
  "pub_location_country": "Australia",
  "pub_authors": "Jorgensen, Steven; Nadizar, Giorgia; Pietropolli, Gloria; Manzoni, Luca; Medvet, Eric; O'Really, Una-May; Hemberg, Erik",
  "pub_notes": "To appear",
  "pub_important": false
}

## Abstract
Genetic programming (GP) is a popular problem-solving and optimization technique. However, generating effective test cases for training and evaluating GP programs requires strong domain knowledge. Furthermore, GP programs often prematurely converge on local optima when given excessively difficult problems early in their training. Curriculum learning (CL) has been effective in addressing similar issues across different reinforcement learning (RL) domains, but it requires the manual generation of progressively difficult test cases as well as their careful scheduling. In this work, we leverage the domain knowledge and the strong generative abilities of large language models (LLMs) to generate effective test cases of increasing difficulties and schedule them according to various curricula. We show that by integrating a curriculum scheduler with LLM-generated test cases we can effectively train a GP agent player with environments-based curricula for a single-player game and opponent-based curricula for a multi-player game. Finally, we discuss the benefits and challenges of implementing this method for other problem domains.
