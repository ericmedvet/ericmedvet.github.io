{
  "title": "One-Shot Learning of Ensembles of Temporal Logic Formulas for Anomaly Detection in Cyber-Physical Systems",
  "pub_year": 2022,
  "pub_accept_year": 2022,
  "pub_type": "Conference",
  "pub_venue_name": "European Conference on Genetic Programming",
  "pub_venue_number": "25th",
  "pub_venue_acronym": "EuroGP",
  "pub_location_city": "Madrid",
  "pub_location_country": "Spain",
  "pub_authors": "Indri, Patrick; Bartoli, Alberto; Medvet, Eric; Nenzi, Laura",
  "pub_doi": "10.1007/978-3-031-02056-8_3",
  "pub_publisher_url": "https://link.springer.com/chapter/10.1007/978-3-031-02056-8_3",
  "pub_fulltext_url": "https://drive.google.com/file/d/1UQKdtcoOu8qLwSf1jc2VsLQswN3S-aHh/view",
  "pub_slides_url": "https://drive.google.com/file/d/1hi25nbV8VbaomT38L1XMKMePIEebSeBe/view",
  "pub_important": false
}

## Abstract
Cyber-Physical Systems (CPS) are prevalent in critical infrastructures and a prime target for cyber-attacks. Multivariate time series data generated by sensors and actuators of a CPS can be monitored for detecting cyber-attacks that introduce anomalies in those data. We use Signal Temporal Logic (STL) formulas to tightly describe the normal behavior of a CPS, identifying data instances that do not satisfy the formulas as anomalies. We learn an ensemble of STL formulas based on observed data, without any specific knowledge of the CPS being monitored. We propose an algorithm based on Grammar-Guided Genetic Programming (G3P) that learns the ensemble automatically in a single evolutionary run. We test the effectiveness of our data-driven proposal on two real-world datasets, finding that the proposed one-shot algorithm provides good detection performance.

## Code
[github repo](https://github.com/pindri/OneShot-ensemble-learning-anomaly-detection-MTS)