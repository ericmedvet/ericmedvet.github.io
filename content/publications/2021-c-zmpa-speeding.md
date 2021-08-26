{
  "title": "Speeding-up pruning for Artificial Neural Networks: Introducing Accelerated Iterative Magnitude Pruning",
  "pub_year": 2021,
  "pub_type": "Conference",
  "pub_venue_name": "International Conference on Pattern Recognition",
  "pub_venue_number": "25th",
  "pub_venue_acronym": "ICPR",
  "pub_location_city": "Milano",
  "pub_location_country": "Italy",
  "pub_authors": "Zullich, Marco; Medvet, Eric; Pellegrino, Felice Andrea; Ansuini, Alessio",
  "pub_doi": "10.1109/ICPR48806.2021.9412705",
  "pub_publisher_url": "https://ieeexplore.ieee.org/abstract/document/9412705",
  "pub_fulltext_url": "https://drive.google.com/uc?export=download&id=1s3I3g5dedtf_FttnVtINZPrBHFyDqYiB",
  "pub_important": false
}

## Abstract
In recent years, Artificial Neural Networks (ANNs) pruning has become the focal point of many researches, due to the extreme overparametrization of such models. This has urged the scientific world to investigate methods for the simplification of the structure of weights in ANNs, mainly in an effort to reduce time for both training and inference. Frankle and Carbin, and later Renda, Frankle, and Carbin introduced and refined an iterative pruning method which is able to effectively prune the network of a great portion of its parameters with little to no loss in performance. On the downside, this method requires a large amount of time for its application, since, for each iteration, the network has to be trained for (almost) the same amount of epochs of the unpruned network. In this work, we show that, for a limited setting, if targeting high overall sparsity rates, this time can be effectively reduced for each iteration, save for the last one, by more than 50%, while yielding a final product (i.e., final pruned network) whose performance is comparable to the ANN obtained using the existing method.
