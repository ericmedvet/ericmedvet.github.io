{
  "title": "Explainable Time Series Tree: An explainable top-down time series segmentation framework",
  "pub_year": 2023,
  "pub_accept_year": 2023,
  "pub_type": "Journal",
  "pub_venue_name": "IEEE Access",
  "pub_authors": "de Castro Silva, Vitor; Bogaz Zarpelão, Bruno; Medvet, Eric; Barbon Junior, Sylvio",
  "pub_notes": "To appear",
  "pub_venue_rank": "Q1",
  "pub_venue_rank_subject": "Computer Science (miscellaneous)",
  "pub_venue_rank_source": "scimagojr",
  "pub_important": false
}

## Abstract
A wide range of Machine Learning algorithms can model time series to address classification, forecasting, and clustering problems. However, time series may exhibit characteristics that complicate these tasks, such as repeating patterns and seasonal variations. Time series segmentation could be a solution to these problems, but current approaches need to be improved. Most of them employ linear regression to solve problems such as detecting changes in a series' behavior, bypassing tools specifically designed for these challenges, such as change detectors. Moreover, explainability is seldom taken into account during time series segmentation. To automatically identify different time series patterns using appropriate techniques while leveraging explainability, we proposed the eXplainable Time Series Tree (XTSTree). XTSTree divides a time series into a binary tree, hierarchically splitting it according to a criterion based on change detectors, ideally finding a cutting point that creates the two most different sub-series. The segmentation process continues until it reaches a stop condition, which relies on a stationarity test that assesses whether the series has a sufficiently homogeneous behavior. Based on well-behaved segments, the XTSTree paves the way for a more comprehensive pattern explanation and also supports the application of explainable approaches. Our experimental study applied the XTSTree on several real-life time series to isolate the series' different behaviors. To evaluate the effectiveness of our method, we used Symbolic Regression to find the best representation of the time series and its splits using algebraic expressions, comparing the differences before and after the XTSTree. We show an improvement in terms of expression complexity, improving the model accuracy compared to the original time series.
