//
// restaurantsData.js
// Static dataset for restaurant suggestions in Chicago.
//

const restaurantsData = [
  // --- Existing entries above ---

  // Existing sample entries...
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
  // ... (rest of original array remains unchanged) ...
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
  },
  // ===== Additional Diverse Realistic Chicago Restaurants =====
  {
    name: "Parachute",
    address: "3500 N Elston Ave, Chicago, IL 60618",
    cuisine: "Korean",
    price: "$$$",
    rating: 4.7,
    distance: 6.3,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/ECH3aXXhK3F9kIyKsL9bsw/o.jpg",
    review_count: 1240,
    url: "https://www.yelp.com/biz/parachute-chicago",
    categories: [{ alias: "korean", title: "Korean" }, { alias: "asianfusion", title: "Asian Fusion" }],
    location: {
      display_address: ["3500 N Elston Ave", "Chicago, IL 60618"],
    },
    comments: [
      { user: "Erin J.", text: "Inventive and modern twists on Korean classics. Love the bing bread!" },
      { user: "Min Ho P.", text: "The flavors are outstanding — truly Michelin-quality." }
    ]
  },
  {
    name: "avec River North",
    address: "640 N La Salle Dr, Chicago, IL 60654",
    cuisine: "Mediterranean",
    price: "$$",
    rating: 4.4,
    distance: 1.3,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/IH0qucNEiXrZ0cjGNbrQUQ/o.jpg",
    review_count: 2214,
    url: "https://www.yelp.com/biz/avec-chicago-5",
    categories: [{ alias: "mediterranean", title: "Mediterranean" }, { alias: "wine_bar", title: "Wine Bars" }],
    location: {
      display_address: ["640 N La Salle Dr", "Chicago, IL 60654"]
    },
    comments: [
      { user: "Sam F.", text: "Chorizo-stuffed dates are a flavor bomb! Great spot for a group outing." },
      { user: "Danielle W.", text: "Cozy and stylish; the shared plates make every visit unique." }
    ]
  },
  {
    name: "Birrieria Zaragoza",
    address: "4852 S Pulaski Rd, Chicago, IL 60632",
    cuisine: "Mexican",
    price: "$",
    rating: 4.7,
    distance: 8.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/6EYOh6HkFMd6P_0PS-Iy2g/o.jpg",
    review_count: 1188,
    url: "https://www.yelp.com/biz/birrieria-zaragoza-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }, { alias: "breakfast_brunch", title: "Breakfast & Brunch" }],
    location: {
      display_address: ["4852 S Pulaski Rd", "Chicago, IL 60632"]
    },
    comments: [
      { user: "Jorge R.", text: "The birria here is as close to Jalisco as you’ll get in Chicago." },
      { user: "Carla M.", text: "Tender goat and friendly staff, what more do you need?" }
    ]
  },
  {
    name: "Demera Ethiopian Restaurant",
    address: "4801 N Broadway, Chicago, IL 60640",
    cuisine: "Ethiopian",
    price: "$$",
    rating: 4.5,
    distance: 7.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/xZvdKlCu7uh2ZtGjWqkDrg/o.jpg",
    review_count: 1651,
    url: "https://www.yelp.com/biz/demera-ethiopian-restaurant-chicago",
    categories: [{ alias: "ethiopian", title: "Ethiopian" }, { alias: "african", title: "African" }],
    location: {
      display_address: ["4801 N Broadway", "Chicago, IL 60640"]
    },
    comments: [
      { user: "Lucas G.", text: "The vegetarian sampler is huge and delicious. Injera is soft and perfect." },
      { user: "Sarah L.", text: "Warm vibes, spicy watt, and lots of options for vegans." }
    ]
  },
  {
    name: "Handlebar",
    address: "2311 W North Ave, Chicago, IL 60647",
    cuisine: "Vegetarian",
    price: "$$",
    rating: 4.6,
    distance: 3.4,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/P0IUyR3p9wWbyAbYG1fCrw/o.jpg",
    review_count: 1915,
    url: "https://www.yelp.com/biz/handlebar-chicago",
    categories: [{ alias: "vegetarian", title: "Vegetarian" }, { alias: "vegan", title: "Vegan" }, { alias: "bar", title: "Bars" }],
    location: {
      display_address: ["2311 W North Ave", "Chicago, IL 60647"]
    },
    comments: [
      { user: "Zoe S.", text: "Crispy cauliflower and vegan nachos are out of this world." },
      { user: "Eli B.", text: "Great drinks, super chill staff, and a brilliant garden patio." }
    ]
  },
  {
    name: "Kaiser Tiger",
    address: "1415 W Randolph St, Chicago, IL 60607",
    cuisine: "German",
    price: "$$",
    rating: 4.2,
    distance: 2.5,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/Ly7ofFv6ga1A-6gxYZo0qg/o.jpg",
    review_count: 1223,
    url: "https://www.yelp.com/biz/kaiser-tiger-chicago",
    categories: [{ alias: "german", title: "German" }, { alias: "beerbar", title: "Beer Bar" }, { alias: "sausages", title: "Sausages" }],
    location: {
      display_address: ["1415 W Randolph St", "Chicago, IL 60607"]
    },
    comments: [
      { user: "Karl V.", text: "Huge pretzels, bratwurst platter, and plenty of beer options." },
      { user: "Melissa C.", text: "Bocce ball on the patio and bacon-wrapped dates are a must!" }
    ]
  },
  {
    name: "Art of Dosa",
    address: "131 N Clinton St, Chicago, IL 60661",
    cuisine: "Indian",
    price: "$",
    rating: 4.3,
    distance: 1.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/1yk7t9AOPg23fFDhkBq5vw/o.jpg",
    review_count: 540,
    url: "https://www.yelp.com/biz/art-of-dosa-chicago",
    categories: [{ alias: "indpak", title: "Indian" }, { alias: "vegetarian", title: "Vegetarian" }],
    location: {
      display_address: ["131 N Clinton St", "Chicago, IL 60661"]
    },
    comments: [
      { user: "Saanvi L.", text: "Their masala dosa is perfectly crisp and fresh!" },
      { user: "Mike K.", text: "Fast lunch spot — delicious coconut chutney and sambar." }
    ]
  },
  {
    name: "Tanta",
    address: "118 W Grand Ave, Chicago, IL 60654",
    cuisine: "Peruvian",
    price: "$$$",
    rating: 4.6,
    distance: 1.0,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/VSFiMZl_HShwPaThvKbv7g/o.jpg",
    review_count: 1843,
    url: "https://www.yelp.com/biz/tanta-chicago",
    categories: [{ alias: "peruvian", title: "Peruvian" }, { alias: "seafood", title: "Seafood" }],
    location: {
      display_address: ["118 W Grand Ave", "Chicago, IL 60654"]
    },
    comments: [
      { user: "Alejandro V.", text: "Ceviche and cocktails are on point. Rooftop is amazing in summer." },
      { user: "Jenny H.", text: "Love the lomo saltado and paella. True taste of Peru!" }
    ]
  },
  {
    name: "Table, Donkey and Stick",
    address: "2728 W Armitage Ave, Chicago, IL 60647",
    cuisine: "European",
    price: "$$$",
    rating: 4.5,
    distance: 4.4,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/6-sUq0t2TpP1UZzEzP6Ztw/o.jpg",
    review_count: 899,
    url: "https://www.yelp.com/biz/table-donkey-and-stick-chicago",
    categories: [{ alias: "german", title: "German" }, { alias: "french", title: "French" }, { alias: "wine_bar", title: "Wine Bars" }],
    location: {
      display_address: ["2728 W Armitage Ave", "Chicago, IL 60647"]
    },
    comments: [
      { user: "Travis G.", text: "Rustic Alpine dishes and a great charcuterie spread." },
      { user: "Olga P.", text: "Romantic spot with unique European flavors." }
    ]
  },
  {
    name: "Smoque BBQ",
    address: "3800 N Pulaski Rd, Chicago, IL 60641",
    cuisine: "Barbeque",
    price: "$$",
    rating: 4.7,
    distance: 7.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/aZJLo4dYr7rd2vZ010GEZw/o.jpg",
    review_count: 5643,
    url: "https://www.yelp.com/biz/smoque-bbq-chicago",
    categories: [{ alias: "bbq", title: "Barbeque" }],
    location: {
      display_address: ["3800 N Pulaski Rd", "Chicago, IL 60641"]
    },
    comments: [
      { user: "Wayne B.", text: "Tender brisket and juicy ribs. One of Chicago’s finest!" },
      { user: "Gabriela S.", text: "Cornbread is delicious and mac & cheese is addicting." }
    ]
  },
  {
    name: "The Dearborn",
    address: "145 N Dearborn St, Chicago, IL 60602",
    cuisine: "American",
    price: "$$",
    rating: 4.5,
    distance: 0.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/EBwfB5Q8Ab29qQzCrm0CQw/o.jpg",
    review_count: 2155,
    url: "https://www.yelp.com/biz/the-dearborn-chicago-3",
    categories: [
      { alias: "gastropubs", title: "Gastropubs" },
      { alias: "american", title: "American (Traditional)" }
    ],
    location: {
      display_address: ["145 N Dearborn St", "Chicago, IL 60602"]
    },
    comments: [
      { user: "Becky R.", text: "Good for business meetings or happy hour! Try the fish and chips." },
      { user: "Steven M.", text: "Modern comfort food in a lively setting." }
    ]
  }
];

export default restaurantsData;
