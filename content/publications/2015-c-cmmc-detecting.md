{
  "title": "Detecting Anomalies in Embedded Computing Systems via a Novel HMM-based Machine Learning Approach",
  "pub_year": 2015,
  "pub_type": "Conference",
  "pub_venue_name": "International Conference on Hybrid Artificial Intelligence Systems",
  "pub_venue_number": "10th",
  "pub_venue_acronym": "HAIS",
  "pub_location_city": "Bilbao",
  "pub_location_country": "Spain",
  "pub_authors": "Cuzzocrea, Alfredo; Medvet, Eric; Mumolo, Enzo; Cecolin, Riccardo",
  "pub_doi": "10.1007/978-3-319-19644-2_34",
  "pub_important": false
}

## Abstract
Computing systems are vulnerable to anomalies that might occur during execution of deployed software: e.g., faults, bugs or deadlocks. When occurring on embedded computing systems, these anomalies may severely hamper the corresponding devices; on the other hand, embedded systems are designed to perform autonomously, i.e., without any human intervention, and thus it is difficult to debug an application to manage the anomaly. Runtime anomaly detection techniques are the primary means of being aware of anomalous conditions. In this paper, we describe a novel approach to detect an anomaly during the execution of one or more applications. Our approach describes the behaviour of the applications using the sequences of memory references generated during runtime. The memory references are seen as signals: they are divided in overlapping frames, then parametrized and finally described with Hidden Markov Models (HMM) for detecting anomalies. The motivations of using such methodology for embedded systems are the following: first, the memory references could be extracted with very low overhead with software or architectural tools. Second, the device HMM analysis framework, while being very powerful in gathering high level information, has low computational complexity and thus is suitable to the rather low  memory and computational capabilities of embedded systems. We experimentally evaluated our proposal on a ARM9, Linux based, embedded system using the SPEC 2006 CPU benchmark suite and found that it shows very low error rates for some artificially injected anomalies, namely a malware, an infinite loop and random errors during execution.
