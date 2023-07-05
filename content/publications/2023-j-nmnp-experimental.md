{
  "title": "An Experimental Comparison of Evolved Neural Network Models for Controlling Simulated Modular Soft Robots",
  "pub_year": 2023,
  "pub_accept_year": 2023,
  "pub_type": "Journal",
  "pub_venue_name": "Applied Soft Computing",
  "pub_venue_acronym": "ASOC",
  "pub_authors": "Nadizar, Giorgia; Medvet, Eric; Nichele, Stefano; Pontes-Filho, Sidney",
  "pub_notes": "To appear",
  "pub_fulltext_url": "https://drive.google.com/file/d/1mmH_y8jNppigIMGXO7x2A_5V3-VZmc7a/view",
  "pub_venue_rank": "Q1",
  "pub_venue_rank_subject": "Software",
  "pub_venue_rank_source": "scimagojr",
  "pub_important": true
}

## Abstract
Voxel-based soft robots (VSRs) are a type of modular robots composed by interconnected soft and deformable blocks, i.e., voxels. Thanks to the softness of their bodies, VSRs may exhibit rich dynamic behaviors. One open question is what type of neural controller is most suitable for a given morphology and sensory apparatus in a given environment. One observation is that artificial neural networks with state may be able to cope with the dynamical nature of VSR bodies and their morphological computation. In this work, we consider four types of controllers, i.e., multilayer perceptrons (MLPs, stateless), recurrent neural networks (RNNs), spiking neural networks (SNNs) without homeostasis, and SNNs with homeostasis. We consider three robot morphologies tested for locomotion, where each morphology is investigated in simulation with three different types and number of sensors. Neural network controllers are optimized with neuroevolution, and the experimental results are compared in terms of effectiveness, efficiency, and generalization ability. In addition, we analyze the resulting behavior of the robots systematically. Our results show that RNNs are typically more effective while MLPs are often the weakest controllers, particularly for robots with few sensors. However, SNNs are more capable in terms of generalization and the mechanism of homeostasis is often beneficial. Finally, we show that RNNs and SNNs with homeostasis produce a more wide variety of behaviors.

## Code and videos
[Code for the experiments and videos of found behaviors](https://giorgia-nadizar.github.io/NeuralModelsVSR/)