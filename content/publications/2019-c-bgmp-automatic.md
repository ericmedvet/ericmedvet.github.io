{
  "title": "Automatic Translation of Spatio-Temporal Logics to Streaming-Based Monitoring Applications for IoT-Equipped Autonomous Agents",
  "pub_year": 2019,
  "pub_type": "Conference",
  "pub_venue_name": "International Workshop on Middleware and Applications for the Internet of Things",
  "pub_venue_number": "6th",
  "pub_venue_acronym": "M4IoT@Middleware",
  "pub_location_city": "Davis",
  "pub_location_country": "USA",
  "pub_authors": "Bortolussi, Luca; Gulisano, Vincenzo; Medvet, Eric; Palyvos-Giannas, Dimitros",
  "pub_doi": "10.1145/3366610.3368097",
  "pub_publisher_url": "https://dl.acm.org/citation.cfm?doid=3366610.3368097",
  "pub_fulltext_url": "https://drive.google.com/file/d/1DX2lf7KVBWbWXDQNaU8oTLxX1HdRzX-x/view",
  "pub_important": false
}

## Abstract
Environments in which IoT-equipped autonomous agents and humans tightly interact require safety rules that monitor the agents' behaviors. In this context, expressive and human-comprehensible rules based on Spatio-Temporal Logics (STLs) are desirable because they are informative and easy to maintain. Unfortunately, STLs usually build on ad-hoc platforms implementing the logic semantics.
We tackle this limitation with a mechanism to transparently compile STL rules to monitoring applications composed of standard data streaming operators, thus opening up the use of high-throughput and low-latency Stream Processing Engines for monitoring rule compliance in realistic, data-rich IoT scenarios. Our contribution can favor a broader and faster adoption of STLs for IoT-equipped agent monitoring by separating the concerns of designing a rule from those of implementing its semantics. Together with our formal description of how to translate STLs to the streaming domain, we evaluate our prototype implementation based on Apache Flink, studying the effects of parameters such as time and space resolution on the monitoring performance.
