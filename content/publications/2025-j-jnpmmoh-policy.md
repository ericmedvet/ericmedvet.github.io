{
  "title": "Policy Search through Genetic Programming and LLM-assisted Curriculum Learning",
  "pub_year": 2025,
  "pub_accept_year": 2025,
  "pub_type": "Journal",
  "pub_venue_name": "ACM Transactions on Evolutionary Learning and Optimization",
  "pub_venue_acronym": "TELO",
  "pub_authors": "Jorgensen, Steven; Nadizar, Giorgia; Pietropolli, Gloria; Manzoni, Luca; Medvet, Eric; O'Reilly, Una-May; Hemberg, Erik",
  "pub_doi": "10.1145/3772718",
  "pub_notes": "To appear",
  "pub_fulltext_url": "https://drive.google.com/file/d/14OvV2vrOwAEWRatuwSi1DwGeRj2Nkrce/view",
  "pub_venue_rank": "Q1",
  "pub_venue_rank_subject": "Computer Science (Miscellaneous)",
  "pub_venue_rank_source": "scimagojr",
  "pub_important": true
}

## Abstract
Curriculum learning (CL) consists in using a diverse set of user-provided test cases, with varying levels of difficulty and organized in a suitable progression, for learning a policy. The quality of test cases is important to allow optimization techniques as genetic programming (GP) to solve policy search problems. In this work, we evaluate large language models (LLMs) as providers of test cases for GP-based policy search. We consider two policy search tasks, a single-player and a multi-player game, and four LLMs differing in complexity and specialization, which we prompt in order to generate suitable test cases for the two games. We experimentally assess the intrinsic quality of LLM-generated test cases and their utility when inserted in a curriculum consumed by a GP optimization. We evaluate the robustness of the approach with respect to the way cases are scheduled in curricula and with respect to the policy representation, for which we use both graphs and linear programs evolved by GP. We observe that the effectiveness of LLM-assisted CL depends on both the choice of LLM and the design of the prompting and scheduling strategies. These findings highlight important considerations for leveraging LLMs in automated curriculum design for GP-based optimization.
