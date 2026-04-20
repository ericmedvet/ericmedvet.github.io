{
  "title": "SHIELD: Evolutionary Synthesis of Privacy-Preserving Pipelines for Live Stream Data Sharing",
  "pub_year": 2026,
  "pub_accept_year": 2026,
  "pub_type": "Conference",
  "pub_venue_name": "ACM International Conference on Distributed and Event-based Systems",
  "pub_venue_number": "20th",
  "pub_venue_acronym": "DEBS",
  "pub_location_city": "Lisbon",
  "pub_location_country": "Portugal",
  "pub_authors": "Perelli, Silvia; Medvet, Eric; Gulisano, Vincenzo",
  "pub_notes": "To appear",
  "pub_important": false
}

## Abstract
Modern data-driven organizations rely on pipelines that transform data from infrastructure, applications, and users, where correctness and performance are critical for reliability and business value. These pipelines are often developed and optimized by teams separate from the data owners defining semantics, so meaningful testing and benchmarking require sharing representative data. This creates a tension: real data is needed to validate semantics, detect subtle errors, and tune performance, yet it is often sensitive and restricted by legal and commercial constraints.
To enable privacy-preserving data sharing while preserving utility, we present SHIELD, a framework that automatically constructs stream processing (SP) pipelines to transform sensitive data on the fly into shareable data while preserving the characteristics required for downstream processing and optimization. Internally, SHIELD leverages evolutionary computation to synthesize executable SP queries under predefined privacy constraints and utility requirements. Using real-world use cases, we show that SHIELD can synthesize privacy-preserving pipelines that retain analytical value while scaling to realistic workloads.
