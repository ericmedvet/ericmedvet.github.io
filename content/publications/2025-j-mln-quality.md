{
  "title": "Quality-Diversity in Problems with Composite Solutions: a Case Study on Body-Brain Robot Optimization",
  "pub_year": 2025,
  "pub_accept_year": 2025,
  "pub_type": "Journal",
  "pub_venue_name": "Genetic Programming and Evolvable Machines",
  "pub_venue_acronym": "GENP",
  "pub_authors": "Medvet, Eric; Lippolis, Samuele; Nadizar, Giorgia",
  "pub_notes": "To appear",
  "pub_venue_rank": "Q3",
  "pub_venue_rank_subject": "Computer Science Applications",
  "pub_venue_rank_source": "scimagojr",
  "pub_important": true
}

## Abstract
When considering those optimization problems where the solution is a combination of two parts, as, e.g., the concurrent optimization of the body and the brain of a robotic agent, one might want to solve them "in a quality-diversity (QD) way", i.e., obtaining not just one very good solution, but a set of good *and* diverse solutions. We call them *QD composite problems*, and we propose a general formulation for them, as well as a set of indexes useful for comprehensively assessing solutions by measuring both quality and diversity. We experimentally compare a few QD evolutionary algorithms (EAs) on a case study of body-brain optimization of simulated robots, including several variants of MAP-elites (ME), a popular and effective EA for QD. We also propose a novel ME variant, called coevolutionary MAP-elites (CoME), that internally employs two populations, one for each part of the solution, and enforces diversity on them through user-provided descriptors, as the underlying ME does. CoME, instead of blindly combining all the respective parts to obtain full solutions, adopts a specific mapping strategy that is based on the location of each solution part in the respective descriptors space. The results of our comparative analysis show that ME works well in QD composite problems, but only if two archives, instead of just one, are employed, one for each part of the solution. Moreover, we show that the use of multi-archive variants of ME, e.g., CoME, can provide insights on the interplay between the two parts of the solution for the problem at hand, shedding light on key dynamics in co-evolution.
