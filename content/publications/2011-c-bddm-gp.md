{
  "title": "GP-based Electricity Price Forecasting",
  "pub_year": 2011,
  "pub_accept_year": 2011,
  "pub_type": "Conference",
  "pub_venue_name": "European Conference on Genetic Programming",
  "pub_venue_number": "14th",
  "pub_venue_acronym": "EuroGP",
  "pub_location_city": "Torino",
  "pub_location_country": "Italy",
  "pub_authors": "Bartoli, Alberto; Davanzo, Giorgio; De Lorenzo, Andrea; Medvet, Eric",
  "pub_fulltext_url": "https://drive.google.com/file/d/15acQg27D58kAlouB7ECZMFoUjICPxFyG/view",
  "pub_slides_url": "https://drive.google.com/file/d/1igsFIg8NMnsrhkp9cZ03g0zt2GPM9W1W/view",
  "pub_important": false
}

## Abstract
The electric power market is increasingly relying on competitive mechanisms taking the form of day-ahead auctions, in which buyers and sellers submit their bids in terms of prices and quantities for each hour of the next day. Methods for electricity price forecasting suitable for these contexts are crucial to the success of any bidding strategy. Such methods have thus become very important in practice, due to the economic relevance of electric power auctions.In this work we propose a novel forecasting method based on Genetic Programming. Key feature of our proposal is the handling of outliers, i.e., regions of the input space rarely seen during the learning. Since a predictor generated with Genetic Programming can hardly provide acceptable performance in these regions, we use a classifier that attempts to determine whether the system is shifting toward a difficult-to-learn region. In those cases, we replace the prediction made by Genetic Programming by a constant value determined during learning and tailored to the specific subregion expected.We evaluate the performance of our proposal against a challenging baseline representative of the state-of-the-art. The baseline analyzes a real-world dataset by means of a number of different methods, each calibrated separately for each hour of the day and recalibrated every day on a progressively growing learning set. Our proposal exhibits smaller prediction error, even though we construct one single model, valid for each hour of the day and used unmodified across the entire testing set. We believe that our results are highly promising and may open a broad range of novel solutions.
