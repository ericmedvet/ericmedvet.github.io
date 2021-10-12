{
  "title": "Compressing Regular Expression Sets for Deep Packet Inspection",
  "pub_year": 2014,
  "pub_type": "Conference",
  "pub_venue_name": "International Conference on Parallel Problem Solving from Nature",
  "pub_venue_number": "13th",
  "pub_venue_acronym": "PPSN",
  "pub_location_city": "Ljubljana",
  "pub_location_country": "Slovenia",
  "pub_authors": "Bartoli, Alberto; Cumar, Simone; De Lorenzo, Andrea; Medvet, Eric",
  "pub_fulltext_url": "https://drive.google.com/file/d/1phbiYd392-U3LApAGV9Q96Nm1Jc9oM8S/view",
  "pub_important": false
}

## Abstract
The ability to generate security-related alerts while analyzing network traffic in real time has become a key mechanism in many networking devices. This functionality relies on the application of large sets of regular expressions describing attack signatures to each individual packet. Implementing an engine of this form capable of operating at line speed is considerably difficult and the corresponding performance problems have been attacked from several points of view. In this work we propose a novel approach complementing earlier proposals: we suggest transforming the starting set of regular expressions to another set of expressions which is much smaller yet classifies network traffic in the same categories as the starting set. Key component of the transformation is an evolutionary search based on Genetic Programming: a large population of expressions represented as abstract syntax trees evolves by means of mutation and crossover, evolution being driven by fitness indexes tailored to the desired classification needs and which minimize the length of each expression. We assessed our proposals on real datasets composed of up to 474 expressions and the outcome has been very good, resulting in compressions in the order of 74%. Our results are highly encouraging and demonstrate the power of evolutionary techniques in an important application domain.
