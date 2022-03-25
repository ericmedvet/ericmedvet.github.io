{
  "title": "Evolving Modular Soft Robots without Explicit Inter-Module Communication using Local Self-Attention",
  "pub_year": 2022,
  "pub_accept_year": 2022,
  "pub_type": "Conference",
  "pub_venue_name": "ACM Genetic and Evolutionary Computation Conference",
  "pub_venue_acronym": "GECCO",
  "pub_location_city": "Boston",
  "pub_location_country": "USA",
  "pub_authors": "Pigozzi, Federico; Tang, Yujin; Medvet, Eric; Ha, David",
  "pub_notes": "To appear",
  "pub_important": false
}

## Abstract
Modularity in robotics holds great potential. In principle, modular robots can be disassembled and reassembled in different robots, and possibly perform new tasks. Nevertheless, actually exploiting modularity is yet an unsolved problem: controllers usually rely on inter-module communication, a practical requirement that makes modules not perfectly interchangeable and thus limits their flexibility. Here, we focus on Voxel-based Soft Robots (VSRs), aggregations of mechanically identical elastic blocks. We use the same neural controller inside each voxel, but without *any* inter-voxel communication, hence enabling ideal conditions for modularity: modules are all equal and interchangeable. We optimize the parameters of the neural controller—shared among the voxels—by evolutionary computation. Crucially, we use a local *self-attention* mechanism inside the controller to overcome the absence of inter-module communication channels, thus enabling our robots to truly be driven by the collective intelligence of their modules. We show experimentally that the evolved robots are effective in the task of locomotion: thanks to self-attention, instances of the same controller embodied in the same robot can focus on different inputs. We also find that the evolved controllers generalize to unseen morphologies, after a short fine-tuning, suggesting that an inductive bias related to the task arises from true modularity.
## Videos
[Collection of videos of robots doing locomotion](https://geccoanon.github.io/)