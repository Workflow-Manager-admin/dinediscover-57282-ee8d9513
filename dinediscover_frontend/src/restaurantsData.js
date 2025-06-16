//
// restaurantsData.js
// Static dataset for restaurant suggestions in Chicago.
//

const restaurantsData = [
  {
    name: "Lou Malnati's Pizzeria",
    address: "805 S State St, Chicago, IL 60605",
    cuisine: "Italian",
    price: "$$",
    rating: 4.5,
    distance: 3, // miles from downtown for mockup
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/8dYkMvAJZOoFjXGrRdmVuQ/o.jpg",
    review_count: 3542,
    url: "https://www.yelp.com/biz/lou-malnatis-pizzeria-chicago-6",
    categories: [{ alias: "pizza", title: "Pizza" }, { alias: "italian", title: "Italian" }],
    location: {
      display_address: ["805 S State St", "Chicago, IL 60605"]
    }
  },
  {
    name: "Girl & the Goat",
    address: "809 W Randolph St, Chicago, IL 60607",
    cuisine: "American",
    price: "$$$",
    rating: 4.6,
    distance: 2.1,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/DtNO9JbZYbA0o00cLlu0Kg/o.jpg",
    review_count: 6500,
    url: "https://www.yelp.com/biz/girl-and-the-goat-chicago",
    categories: [{ alias: "newamerican", title: "American (New)" }],
    location: {
      display_address: ["809 W Randolph St", "Chicago, IL 60607"]
    }
  },
  {
    name: "Portillo's Hot Dogs",
    address: "100 W Ontario St, Chicago, IL 60654",
    cuisine: "American",
    price: "$",
    rating: 4.3,
    distance: 0.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/4A8Ue2SW5Ayv6Wq8tCTGZQ/o.jpg",
    review_count: 8804,
    url: "https://www.yelp.com/biz/portillos-hot-dogs-chicago-4",
    categories: [{ alias: "hotdog", title: "Hot Dogs" }, { alias: "tradamerican", title: "American (Traditional)" }],
    location: {
      display_address: ["100 W Ontario St", "Chicago, IL 60654"]
    }
  },
  {
    name: "Alinea",
    address: "1723 N Halsted St, Chicago, IL 60614",
    cuisine: "American",
    price: "$$$$",
    rating: 4.7,
    distance: 3.7,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/YEy8U4WBb3CLiOa5kTw87g/o.jpg",
    review_count: 2503,
    url: "https://www.yelp.com/biz/alinea-chicago",
    categories: [{ alias: "newamerican", title: "American (New)" }, { alias: "fine-dining", title: "Fine Dining" }],
    location: {
      display_address: ["1723 N Halsted St", "Chicago, IL 60614"]
    }
  },
  {
    name: "Shanghai Terrace",
    address: "108 E Superior St, Chicago, IL 60611",
    cuisine: "Chinese",
    price: "$$$",
    rating: 4.5,
    distance: 1.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/P4QCI5mcdnVf0K8yrqDQWQ/o.jpg",
    review_count: 917,
    url: "https://www.yelp.com/biz/shanghai-terrace-chicago",
    categories: [{ alias: "chinese", title: "Chinese" }, { alias: "dimsum", title: "Dim Sum" }],
    location: {
      display_address: ["108 E Superior St", "Chicago, IL 60611"]
    }
  },
  {
    name: "Le Colonial",
    address: "57 E Oak St, Chicago, IL 60611",
    cuisine: "Thai",
    price: "$$$",
    rating: 4.4,
    distance: 1.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/ouM9wU6neUARjVrfNd856w/o.jpg",
    review_count: 2231,
    url: "https://www.yelp.com/biz/le-colonial-chicago-2",
    categories: [{ alias: "thai", title: "Thai" }, { alias: "french", title: "French" }],
    location: {
      display_address: ["57 E Oak St", "Chicago, IL 60611"]
    }
  },
  {
    name: "Frontera Grill",
    address: "445 N Clark St, Chicago, IL 60654",
    cuisine: "Mexican",
    price: "$$",
    rating: 4.5,
    distance: 0.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/F6JLYgguk5qvGKLMf6HTOQ/o.jpg",
    review_count: 3211,
    url: "https://www.yelp.com/biz/frontera-grill-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }],
    location: {
      display_address: ["445 N Clark St", "Chicago, IL 60654"]
    }
  },
  {
    name: "The Chicago Diner",
    address: "2333 N Milwaukee Ave, Chicago, IL 60647",
    cuisine: "American",
    price: "$$",
    rating: 4.6,
    distance: 5.4,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/rkvSmkvIY1jG_sxI3kKhqA/o.jpg",
    review_count: 2023,
    url: "https://www.yelp.com/biz/the-chicago-diner-chicago-3",
    categories: [{ alias: "vegetarian", title: "Vegetarian" }, { alias: "vegan", title: "Vegan" }],
    location: {
      display_address: ["2333 N Milwaukee Ave", "Chicago, IL 60647"]
    }
  },
  {
    name: "Cumin",
    address: "1414 N Milwaukee Ave, Chicago, IL 60622",
    cuisine: "Indian",
    price: "$$",
    rating: 4.4,
    distance: 2.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/rLu2x6D4tyCZKhHaJK-iZw/o.jpg",
    review_count: 1254,
    url: "https://www.yelp.com/biz/cumin-chicago",
    categories: [{ alias: "indpak", title: "Indian" }, { alias: "nepalese", title: "Nepalese" }],
    location: {
      display_address: ["1414 N Milwaukee Ave", "Chicago, IL 60622"]
    }
  },
  {
    name: "Mi Tocaya Antojería",
    address: "2800 W Logan Blvd, Chicago, IL 60647",
    cuisine: "Mexican",
    price: "$$",
    rating: 4.6,
    distance: 4.1,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/YTQ5T2v8FfWKmzn10P6fRQ/o.jpg",
    review_count: 771,
    url: "https://www.yelp.com/biz/mi-tocaya-antojeria-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }],
    location: {
      display_address: ["2800 W Logan Blvd", "Chicago, IL 60647"]
    }
  }
];

export default restaurantsData;
