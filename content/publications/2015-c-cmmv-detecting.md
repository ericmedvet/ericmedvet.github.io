{
  "title": "Detecting Android Malware using Sequences of System Calls",
  "pub_year": 2015,
  "pub_accept_year": 2015,
  "pub_type": "Conference",
  "pub_venue_name": "International Workshop on Software Development Lifecycle for Mobile",
  "pub_venue_number": "3rd",
  "pub_venue_acronym": "DeMobile",
  "pub_location_city": "Bergamo",
  "pub_location_country": "Italy",
  "pub_authors": "Canfora, Gerardo; Medvet, Eric; Mercaldo, Francesco; Visaggio, Corrado Aaron",
  "pub_doi": "10.1145/2804345.2804349",
  "pub_publisher_url": "https://dl.acm.org/citation.cfm?id=2804349",
  "pub_fulltext_url": "https://drive.google.com/file/d/1jIP25s0LQKFSL8L8JxZqNAaK0z4zadl_/view",
  "pub_important": false
}

## Abstract
The increasing diffusion of smart devices, along with the dynamism of the mobile applications ecosystem, are boosting the production of malware for the Android platform. So far, many different methods have been developed for detecting Android malware, based on either static or dynamic analysis. The main limitations of existing methods include: low accuracy, proneness to evasion techniques, and weak validation, often limited to emulators or modified kernels.We propose an Android malware detection method, based on sequences of system calls, that overcomes these limitations. The assumption is that malicious behaviors (e.g., sending high premium rate SMS, cyphering data for ransom, botnet capabilities, and so on) are implemented by specific system calls sequences: yet, no apriori knowledge is available about which sequences are associated with which malicious behaviors, in particular in the mobile applications ecosystem where new malware and non-malware applications continuously arise. Hence, we use Machine Learning to automatically learn these associations (a sort of "fingerprint" of the malware); then we exploit them to actually detect malware. Experimentation on 20000 execution traces of 2000 applications (1000 of them being malware belonging to different malware families), performed on a real device, shows promising results: we obtain a detection accuracy of 97%. Moreover, we show that the proposed method can cope with the dynamism of the mobile apps ecosystem, since it can detect unknown malware.
