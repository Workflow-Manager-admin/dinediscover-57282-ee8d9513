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
    },
    comments: [
      { user: "Megan T.", text: "Best deep dish ever! The crust is crunchy and buttery." },
      { user: "Jason L.", text: "The cheese pull is unreal, and the staff made us feel at home." }
    ]
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
    },
    comments: [
      { user: "Samantha D.", text: "Inventive plates and vibrant atmosphere. Goat empanadas are a must." },
      { user: "Kevin R.", text: "Every dish feels like a flavor journey. Definitely lives up to the hype!" }
    ]
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
    },
    comments: [
      { user: "Alex H.", text: "Iconic Chicago dogs — the real deal! Don’t miss the chocolate cake shake." },
      { user: "Priya P.", text: "Quick service, great value, and the Italian beef is mouthwatering." }
    ]
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
    },
    comments: [
      { user: "Kira W.", text: "An unforgettable, once-in-a-lifetime culinary experience." },
      { user: "Tom S.", text: "Service and creativity are beyond compare!" }
    ]
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
    },
    comments: [
      { user: "Wen C.", text: "Gorgeous ambiance and authentic dim sum. You’ll feel transported to Shanghai." },
      { user: "Mila F.", text: "Delicious Peking duck and lovely rooftop views." }
    ]
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
    },
    comments: [
      { user: "Nina G.", text: "Romantic setting and the best curry in the city." },
      { user: "Erik M.", text: "Fusion menu done right, especially the spring rolls!" }
    ]
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
    },
    comments: [
      { user: "Luis V.", text: "Colorful décor, zesty margaritas, and the best mole outside Oaxaca." },
      { user: "Emma Z.", text: "Vibrant flavors, especially the ceviche. Highly recommend." }
    ]
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
    },
    comments: [
      { user: "Rachel B.", text: "Legendary vegan milkshakes and creative comfort food." },
      { user: "Oscar D.", text: "As a meat-eater, even I love this place!" }
    ]
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
    },
    comments: [
      { user: "Shweta P.", text: "Amazing flavors and authentic spices. Try the momos!" },
      { user: "Ben Y.", text: "Fantastic lunch specials and huge portions." }
    ]
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
    },
    comments: [
      { user: "Valeria C.", text: "Creative Mexican food and warm, cozy vibe." },
      { user: "Jake H.", text: "The best guacamole in Chicago!" }
    ]
  }
];

export default restaurantsData;
