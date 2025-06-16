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
  },
  // ====== NEW DIVERSE CHICAGO RESTAURANTS FOR SUGGESTION VARIETY ======
  {
    name: "The Purple Pig",
    address: "444 N Michigan Ave, Chicago, IL 60611",
    cuisine: "Mediterranean",
    price: "$$$",
    rating: 4.4,
    distance: 0.7,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/rdDS2oqhwRzyy72-Dmqn3g/o.jpg",
    review_count: 8321,
    url: "https://www.yelp.com/biz/the-purple-pig-chicago",
    categories: [{ alias: "mediterranean", title: "Mediterranean" }, { alias: "tapas", title: "Tapas/Small Plates" }],
    location: {
      display_address: ["444 N Michigan Ave", "Chicago, IL 60611"]
    },
    comments: [
      { user: "Alex M.", text: "The bone marrow is a must, and I can't get enough of the sharable plates." },
      { user: "Sydnee P.", text: "Perfect for adventurous eaters and wine lovers alike." }
    ]
  },
  {
    name: "Giordano's",
    address: "223 W Jackson Blvd, Chicago, IL 60606",
    cuisine: "Italian",
    price: "$$",
    rating: 4.2,
    distance: 1.5,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/JuQ-2nULDiaTWCptlbgwmA/o.jpg",
    review_count: 6209,
    url: "https://www.yelp.com/biz/giordanos-chicago-6",
    categories: [{ alias: "pizza", title: "Pizza" }, { alias: "italian", title: "Italian" }],
    location: {
      display_address: ["223 W Jackson Blvd", "Chicago, IL 60606"]
    },
    comments: [
      { user: "Drew T.", text: "Iconic deep dish—bring your appetite!" },
      { user: "Claire R.", text: "Wait can be long, but the stuffed pizza is worth it." }
    ]
  },
  {
    name: "Portillo's Hot Dogs",
    address: "100 W Ontario St, Chicago, IL 60654",
    cuisine: "American",
    price: "$",
    rating: 4.4,
    distance: 1.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/MxBuq3DwyDL9mlJp6IOf9w/o.jpg",
    review_count: 8812,
    url: "https://www.yelp.com/biz/portillos-hot-dogs-chicago-4",
    categories: [{ alias: "hotdog", title: "Hot Dogs" }, { alias: "fastfood", title: "Fast Food" }],
    location: {
      display_address: ["100 W Ontario St", "Chicago, IL 60654"]
    },
    comments: [
      { user: "Kenny D.", text: "The Chicago dog and Italian beef are legendary." },
      { user: "Linda Z.", text: "Quick, affordable, and so satisfying. Chopped salad is great too!" }
    ]
  },
  {
    name: "RPM Steak",
    address: "66 W Kinzie St, Chicago, IL 60654",
    cuisine: "Steakhouse",
    price: "$$$$",
    rating: 4.6,
    distance: 1.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/hqcwSHqa5S2_gpGo5te0qw/o.jpg",
    review_count: 3142,
    url: "https://www.yelp.com/biz/rpm-steak-chicago",
    categories: [{ alias: "steak", title: "Steakhouses" }, { alias: "newamerican", title: "American (New)" }],
    location: {
      display_address: ["66 W Kinzie St", "Chicago, IL 60654"]
    },
    comments: [
      { user: "George L.", text: "The dry-aged ribeye is pure heaven. Service is spot on every time." },
      { user: "Kathy P.", text: "Upscale vibe, perfect for a special occasion or date night." }
    ]
  },
  {
    name: "Virtue",
    address: "1462 E 53rd St, Chicago, IL 60615",
    cuisine: "Southern",
    price: "$$$",
    rating: 4.8,
    distance: 7.1,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/nb85UzME5VnJVqS3drGxPg/o.jpg",
    review_count: 1520,
    url: "https://www.yelp.com/biz/virtue-restaurant-chicago",
    categories: [{ alias: "southern", title: "Southern" }, { alias: "comfortfood", title: "Comfort Food" }],
    location: {
      display_address: ["1462 E 53rd St", "Chicago, IL 60615"]
    },
    comments: [
      { user: "Destinee M.", text: "Grit cakes and fried green tomatoes are unforgettable." },
      { user: "Harold F.", text: "Chef Erick Williams is a soul food genius." }
    ]
  },
  {
    name: "Le Colonial",
    address: "57 E Oak St, Chicago, IL 60611",
    cuisine: "Vietnamese",
    price: "$$$",
    rating: 4.5,
    distance: 2.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/0fn5vc0_iZpzmP2bVN9raw/o.jpg",
    review_count: 2946,
    url: "https://www.yelp.com/biz/le-colonial-chicago",
    categories: [{ alias: "vietnamese", title: "Vietnamese" }, { alias: "french", title: "French" }],
    location: {
      display_address: ["57 E Oak St", "Chicago, IL 60611"]
    },
    comments: [
      { user: "Linh V.", text: "Elegant setting and incredible shaking beef." },
      { user: "Fran H.", text: "Romantic atmosphere—best Vietnamese/French fusion in Chicago." }
    ]
  },
  {
    name: "Sun Wah BBQ",
    address: "5039 N Broadway St, Chicago, IL 60640",
    cuisine: "Chinese",
    price: "$$",
    rating: 4.7,
    distance: 7.7,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/Zb6RuMO2EiqgThQ38pFidg/o.jpg",
    review_count: 3511,
    url: "https://www.yelp.com/biz/sun-wah-bbq-chicago",
    categories: [{ alias: "bbq", title: "Barbeque" }, { alias: "chinese", title: "Chinese" }],
    location: {
      display_address: ["5039 N Broadway St", "Chicago, IL 60640"]
    },
    comments: [
      { user: "Paul Y.", text: "The Beijing duck feast experience is legendary and fun with friends." },
      { user: "Frankie Z.", text: "Bring a group and get the duck—the tableside carve is a show!" }
    ]
  },
  {
    name: "Sushi-San",
    address: "63 W Grand Ave, Chicago, IL 60654",
    cuisine: "Japanese",
    price: "$$$",
    rating: 4.7,
    distance: 1.3,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/wX7wUn0TtCSbi8CRGLd_cA/o.jpg",
    review_count: 2534,
    url: "https://www.yelp.com/biz/sushi-san-chicago",
    categories: [{ alias: "japanese", title: "Japanese" }, { alias: "sushi", title: "Sushi Bars" }],
    location: {
      display_address: ["63 W Grand Ave", "Chicago, IL 60654"]
    },
    comments: [
      { user: "Aiko T.", text: "Omakase was a highlight—freshest fish! Cool hip-hop energy inside." },
      { user: "Johnny X.", text: "Hand rolls are legit. The vibe is electric every night." }
    ]
  },
  {
    name: "Galit",
    address: "2429 N Lincoln Ave, Chicago, IL 60614",
    cuisine: "Middle Eastern",
    price: "$$$$",
    rating: 4.9,
    distance: 3.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/BULubyDW3qd4WdWrD2m2wQ/o.jpg",
    review_count: 1102,
    url: "https://www.yelp.com/biz/galit-chicago",
    categories: [{ alias: "mideastern", title: "Middle Eastern" }, { alias: "modern_european", title: "Modern European" }],
    location: {
      display_address: ["2429 N Lincoln Ave", "Chicago, IL 60614"]
    },
    comments: [
      { user: "Talya A.", text: "Hummus is creamy, pita piping hot, and the spices are perfect." },
      { user: "David S.", text: "Some of the best modern Middle Eastern cuisine in the Midwest." }
    ]
  },
  {
    name: "Honey Butter Fried Chicken",
    address: "3361 N Elston Ave, Chicago, IL 60618",
    cuisine: "American",
    price: "$$",
    rating: 4.6,
    distance: 5.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/TECL6XXb1OA0ubnLsCI0TQ/o.jpg",
    review_count: 2697,
    url: "https://www.yelp.com/biz/honey-butter-fried-chicken-chicago",
    categories: [{ alias: "southern", title: "Southern" }, { alias: "chicken", title: "Chicken Wings" }, { alias: "comfortfood", title: "Comfort Food" }],
    location: {
      display_address: ["3361 N Elston Ave", "Chicago, IL 60618"]
    },
    comments: [
      { user: "Jules K.", text: "Crispy juicy fried chicken you dip in honey butter—need I say more?" },
      { user: "Oscar E.", text: "Cozy, quirky, and family-friendly. Mac and cheese is awesome too." }
    ]
  },
  {
    name: "The Whale",
    address: "2427 N Milwaukee Ave, Chicago, IL 60647",
    cuisine: "American",
    price: "$$$",
    rating: 4.3,
    distance: 4.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/KGZ7Vid_8nUZSmP7z8t4Ug/o.jpg",
    review_count: 911,
    url: "https://www.yelp.com/biz/the-whale-chicago",
    categories: [{ alias: "newamerican", title: "American (New)" }, { alias: "cocktailbars", title: "Cocktail Bars" }],
    location: {
      display_address: ["2427 N Milwaukee Ave", "Chicago, IL 60647"]
    },
    comments: [
      { user: "Emily S.", text: "Brunch here is a treat, and cocktails are inventive." },
      { user: "Corey N.", text: "Love the art deco vibe, and the steak & eggs always hits the spot." }
    ]
  },
  {
    name: "11 City Diner",
    address: "1112 S Wabash Ave, Chicago, IL 60605",
    cuisine: "Diner",
    price: "$$",
    rating: 4.5,
    distance: 2.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/d1f03nHkN-w3p7E7OJ0pXA/o.jpg",
    review_count: 1782,
    url: "https://www.yelp.com/biz/11-city-diner-chicago",
    categories: [{ alias: "diner", title: "Diners" }, { alias: "breakfast_brunch", title: "Breakfast & Brunch" }],
    location: {
      display_address: ["1112 S Wabash Ave", "Chicago, IL 60605"]
    },
    comments: [
      { user: "Marco L.", text: "Old-fashioned soda fountain, huge portions, and friendly staff." },
      { user: "Danielle E.", text: "Matzo ball soup is excellent and shakes are the best in town." }
    ]
  },
  {
    name: "Chilam Balam",
    address: "3023 N Broadway, Chicago, IL 60657",
    cuisine: "Mexican",
    price: "$$",
    rating: 4.7,
    distance: 5.5,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/v0mC3yHHPlsRUL4c9eA8Hg/o.jpg",
    review_count: 1432,
    url: "https://www.yelp.com/biz/chilam-balam-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }, { alias: "tapas", title: "Tapas/Small Plates" }],
    location: {
      display_address: ["3023 N Broadway", "Chicago, IL 60657"]
    },
    comments: [
      { user: "Patricia R.", text: "BYOB rustic gem with creative Mexican small plates—get the guacamole!" },
      { user: "Josh F.", text: "Loved the tacos and the seasonal ceviche. Always fresh and bold." }
    ]
  },
  {
    name: "Kasama",
    address: "1001 N Winchester Ave, Chicago, IL 60622",
    cuisine: "Filipino",
    price: "$$$$",
    rating: 4.9,
    distance: 2.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/AHpgR6bTvKQ7nUizC7bA2w/o.jpg",
    review_count: 889,
    url: "https://www.yelp.com/biz/kasama-chicago-2",
    categories: [{ alias: "filipino", title: "Filipino" }, { alias: "bakeries", title: "Bakeries" }],
    location: {
      display_address: ["1001 N Winchester Ave", "Chicago, IL 60622"]
    },
    comments: [
      { user: "Jen B.", text: "Modern Filipino tasting menu. Ube croissant for breakfast is AMAZING." },
      { user: "Alvin G.", text: "Best baked goods and inventive Filipino fare—truly worth the hype." }
    ]
  },
  {
    name: "MingHin Cuisine",
    address: "2168 S Archer Ave, Chicago, IL 60616",
    cuisine: "Chinese",
    price: "$$",
    rating: 4.5,
    distance: 3.0,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/YVb5j7D4OfMXAdx8B8uQIw/o.jpg",
    review_count: 3060,
    url: "https://www.yelp.com/biz/minghin-cuisine-chicago-3",
    categories: [{ alias: "dim_sums", title: "Dim Sum" }, { alias: "chinese", title: "Chinese" }],
    location: {
      display_address: ["2168 S Archer Ave", "Chicago, IL 60616"]
    },
    comments: [
      { user: "Wen L.", text: "Best dim sum in Chinatown. Try the egg yolk buns and har gow." },
      { user: "Martha S.", text: "Efficient service and great for family-style dinners." }
    ]
  },
  // Add more entries as needed for even more diversity and sample depth...
  // ======== BEGIN ADDITIONAL RESTAURANTS FOR SAMPLE DEPTH ========

  {
    name: "Gene & Georgetti",
    address: "500 N Franklin St, Chicago, IL 60654",
    cuisine: "Steakhouse",
    price: "$$$$",
    rating: 4.3,
    distance: 1.4,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/w4jtwdGuh8jqBx0WOEocjw/o.jpg",
    review_count: 1632,
    url: "https://www.yelp.com/biz/gene-and-georgetti-chicago",
    categories: [{ alias: "steak", title: "Steakhouses" }, { alias: "italian", title: "Italian" }],
    location: { display_address: ["500 N Franklin St", "Chicago, IL 60654"] },
    comments: [
      { user: "Nina G.", text: "Classic Chicago steakhouse with history and huge chops!" },
      { user: "Peter D.", text: "The garlic bread and ribeye are both unforgettable." }
    ]
  },
  {
    name: "Fat Rice",
    address: "2957 W Diversey Ave, Chicago, IL 60647",
    cuisine: "Macanese",
    price: "$$$",
    rating: 4.5,
    distance: 5.8,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/iJmrA30_YW_SAtiLGOq9Zg/o.jpg",
    review_count: 1029,
    url: "https://www.yelp.com/biz/fat-rice-chicago",
    categories: [{ alias: "macanese", title: "Macanese" }, { alias: "asianfusion", title: "Asian Fusion" }],
    location: { display_address: ["2957 W Diversey Ave", "Chicago, IL 60647"] },
    comments: [
      { user: "Kim W.", text: "Try the Arroz Gordo for a one-of-a-kind meal!" },
      { user: "Brian C.", text: "Creative, craveable, and fun - flavors you won’t find elsewhere." }
    ]
  },
  {
    name: "Girl & the Goat",
    address: "809 W Randolph St, Chicago, IL 60607",
    cuisine: "American",
    price: "$$$$",
    rating: 4.6,
    distance: 1.7,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/B9B5Eq9XcslmEYWCDEPj0g/o.jpg",
    review_count: 8730,
    url: "https://www.yelp.com/biz/girl-and-the-goat-chicago",
    categories: [{ alias: "newamerican", title: "American (New)" }, { alias: "gastropubs", title: "Gastropubs" }],
    location: { display_address: ["809 W Randolph St", "Chicago, IL 60607"] },
    comments: [
      { user: "Sasha R.", text: "Impossible to go wrong! Small plates are adventurous, and the vibe is always lively." },
      { user: "Kevin J.", text: "Goat empanadas are next-level. Make a reservation!" }
    ]
  },
  {
    name: "El Che Steakhouse & Bar",
    address: "845 W Washington Blvd, Chicago, IL 60607",
    cuisine: "Argentinian",
    price: "$$$",
    rating: 4.4,
    distance: 1.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/0YpiWSX9IMAJTSZLvNp4Nw/o.jpg",
    review_count: 1000,
    url: "https://www.yelp.com/biz/el-che-bar-chicago",
    categories: [{ alias: "argentine", title: "Argentine" }, { alias: "steak", title: "Steakhouses" }],
    location: { display_address: ["845 W Washington Blvd", "Chicago, IL 60607"] },
    comments: [
      { user: "Lucia M.", text: "Smoked meats and chimichurri - a South American delight!" },
      { user: "Markus S.", text: "Sit by the open-fire grill for the best seat in the house." }
    ]
  },
  {
    name: "El Milagro Tortilleria",
    address: "1927 S Blue Island Ave, Chicago, IL 60608",
    cuisine: "Mexican",
    price: "$",
    rating: 4.8,
    distance: 3.3,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/E0VU9O4MbEhCrRHJxuLmMw/o.jpg",
    review_count: 589,
    url: "https://www.yelp.com/biz/el-milagro-tortilleria-chicago-2",
    categories: [{ alias: "mexican", title: "Mexican" }, { alias: "tortillas", title: "Tortillas" }],
    location: { display_address: ["1927 S Blue Island Ave", "Chicago, IL 60608"] },
    comments: [
      { user: "Lila Q.", text: "Freshest tortillas and incredible tacos for dirt cheap." },
      { user: "Rolando R.", text: "Hole-in-the-wall experience. I come here weekly!" }
    ]
  },
  {
    name: "Cumin",
    address: "1414 N Milwaukee Ave, Chicago, IL 60622",
    cuisine: "Indian/Nepalese",
    price: "$$",
    rating: 4.5,
    distance: 2.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/N2efMGQxwPyNYRgdAzvF2g/o.jpg",
    review_count: 1555,
    url: "https://www.yelp.com/biz/cumin-chicago",
    categories: [{ alias: "indpak", title: "Indian" }, { alias: "himalayan", title: "Himalayan/Nepalese" }],
    location: { display_address: ["1414 N Milwaukee Ave", "Chicago, IL 60622"] },
    comments: [
      { user: "Ramesh K.", text: "Great curries, momo dumplings, and spicy vindaloo!" },
      { user: "Taylor M.", text: "Consistent quality every time. Mango lassi is so refreshing." }
    ]
  },
  {
    name: "Duck Duck Goat",
    address: "857 W Fulton Market, Chicago, IL 60607",
    cuisine: "Chinese",
    price: "$$$",
    rating: 4.3,
    distance: 1.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/8FgE7LneGn5UvE2n0M46Qg/o.jpg",
    review_count: 2951,
    url: "https://www.yelp.com/biz/duck-duck-goat-chicago",
    categories: [{ alias: "chinese", title: "Chinese" }, { alias: "dimsum", title: "Dim Sum" }],
    location: { display_address: ["857 W Fulton Market", "Chicago, IL 60607"] },
    comments: [
      { user: "William Z.", text: "Love the vibe and soup dumplings. Unique take on Chinatown classics." },
      { user: "Patrice B.", text: "Try the char siu bao and hand-drawn noodles!" }
    ]
  },
  {
    name: "Xoco",
    address: "449 N Clark St, Chicago, IL 60654",
    cuisine: "Mexican",
    price: "$$",
    rating: 4.4,
    distance: 1.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/D7qfBWcqH9DoRK37GEPmrA/o.jpg",
    review_count: 3883,
    url: "https://www.yelp.com/biz/xoco-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }, { alias: "sandwiches", title: "Sandwiches" }],
    location: { display_address: ["449 N Clark St", "Chicago, IL 60654"] },
    comments: [
      { user: "Teresa Q.", text: "Outstanding tortas and churros. The hot chocolate is unforgettable." },
      { user: "Liam S.", text: "Quick, high-quality eats in River North." }
    ]
  },
  {
    name: "The Berghoff Restaurant",
    address: "17 W Adams St, Chicago, IL 60603",
    cuisine: "German",
    price: "$$",
    rating: 4.2,
    distance: 0.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/IHevi4d4Q_JzM5-iQY03ZQ/o.jpg",
    review_count: 2467,
    url: "https://www.yelp.com/biz/the-berghoff-restaurant-chicago-4",
    categories: [{ alias: "german", title: "German" }, { alias: "bar", title: "Bars" }],
    location: { display_address: ["17 W Adams St", "Chicago, IL 60603"] },
    comments: [
      { user: "Helmut F.", text: "Classic schnitzel and homemade beer since the 1800s!" },
      { user: "Mike G.", text: "Perfect spot for a bit of Chicago history and a hearty meal." }
    ]
  },
  {
    name: "Quartino Ristorante",
    address: "626 N State St, Chicago, IL 60654",
    cuisine: "Italian",
    price: "$$",
    rating: 4.4,
    distance: 1.0,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/X-F-EU48IeEubQf4aB3ZRw/o.jpg",
    review_count: 6783,
    url: "https://www.yelp.com/biz/quartino-ristorante-chicago",
    categories: [{ alias: "italian", title: "Italian" }, { alias: "wine_bar", title: "Wine Bars" }],
    location: { display_address: ["626 N State St", "Chicago, IL 60654"] },
    comments: [
      { user: "Carla M.", text: "Housemade pastas and salumi board are spot-on." },
      { user: "John C.", text: "Family-style dining and lively atmosphere." }
    ]
  },
  {
    name: "Frontera Grill",
    address: "445 N Clark St, Chicago, IL 60654",
    cuisine: "Mexican",
    price: "$$$",
    rating: 4.5,
    distance: 1.1,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/Nm0S6FJ-3UGb0kaqCdoW7w/o.jpg",
    review_count: 4458,
    url: "https://www.yelp.com/biz/frontera-grill-chicago",
    categories: [{ alias: "mexican", title: "Mexican" }, { alias: "latin", title: "Latin American" }],
    location: { display_address: ["445 N Clark St", "Chicago, IL 60654"] },
    comments: [
      { user: "Brenda V.", text: "Inventive Mexican dishes by Chef Rick Bayless. Must try!" },
      { user: "Rob Z.", text: "Guacamole and margaritas are perfection." }
    ]
  },
  {
    name: "The Delta",
    address: "1745 W North Ave, Chicago, IL 60622",
    cuisine: "Southern/Cajun",
    price: "$$",
    rating: 4.4,
    distance: 2.6,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/gw0Gp4Q_sSRRQsEEuMArfg/o.jpg",
    review_count: 782,
    url: "https://www.yelp.com/biz/the-delta-chicago-2",
    categories: [{ alias: "southern", title: "Southern" }, { alias: "cajun", title: "Cajun/Creole" }],
    location: { display_address: ["1745 W North Ave", "Chicago, IL 60622"] },
    comments: [
      { user: "Tonya L.", text: "Authentic tamales and spicy cocktails make this a favorite spot." },
      { user: "Perry N.", text: "Live jazz, crispy catfish – a Delta treat." }
    ]
  },
  {
    name: "Hamburger Mary's",
    address: "5400 N Clark St, Chicago, IL 60640",
    cuisine: "American/Burger",
    price: "$$",
    rating: 4.3,
    distance: 8.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/ZzWE68f1OibHEamBtyB27w/o.jpg",
    review_count: 2579,
    url: "https://www.yelp.com/biz/hamburger-marys-chicago",
    categories: [{ alias: "burgers", title: "Burgers" }, { alias: "bars", title: "Bars" }],
    location: { display_address: ["5400 N Clark St", "Chicago, IL 60640"] },
    comments: [
      { user: "Dana O.", text: "Festive drag shows, great burgers, love the energy." },
      { user: "Chris G.", text: "Fun spot for groups. The bloody mary is wild!" }
    ]
  },
  {
    name: "Uncle Mike's Place",
    address: "1700 W Grand Ave, Chicago, IL 60622",
    cuisine: "Filipino/American",
    price: "$",
    rating: 4.6,
    distance: 2.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/C7k1SwKHIAEghksx6olrSA/o.jpg",
    review_count: 1175,
    url: "https://www.yelp.com/biz/uncle-mikes-place-chicago",
    categories: [{ alias: "filipino", title: "Filipino" }, { alias: "breakfast_brunch", title: "Breakfast & Brunch" }],
    location: { display_address: ["1700 W Grand Ave", "Chicago, IL 60622"] },
    comments: [
      { user: "Patrice C.", text: "Longanisa breakfast is my go-to. Real family feel here." },
      { user: "Marco D.", text: "Great portions for the price, especially the tocino and garlic rice." }
    ]
  },
  {
    name: "Wildberry Pancakes & Cafe",
    address: "130 E Randolph St, Chicago, IL 60601",
    cuisine: "Breakfast/Brunch",
    price: "$$",
    rating: 4.7,
    distance: 0.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/z4sPTsVY5XA4UDCo9C7yYA/o.jpg",
    review_count: 10024,
    url: "https://www.yelp.com/biz/wildberry-pancakes-and-cafe-chicago",
    categories: [{ alias: "breakfast_brunch", title: "Breakfast & Brunch" }, { alias: "cafes", title: "Cafes" }],
    location: { display_address: ["130 E Randolph St", "Chicago, IL 60601"] },
    comments: [
      { user: "Leah D.", text: "Line is long, but so worth it - best pancakes in the city!" },
      { user: "Steven W.", text: "Try the berry bliss or cinnamon roll pancakes." }
    ]
  },
  {
    name: "Lou Mitchell's",
    address: "565 W Jackson Blvd, Chicago, IL 60661",
    cuisine: "Diner/American",
    price: "$$",
    rating: 4.2,
    distance: 1.5,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/JQY_ISvF2CbcILgdKaRZww/o.jpg",
    review_count: 2563,
    url: "https://www.yelp.com/biz/lou-mitchells-chicago",
    categories: [{ alias: "diner", title: "Diners" }, { alias: "american", title: "American (Traditional)" }],
    location: { display_address: ["565 W Jackson Blvd", "Chicago, IL 60661"] },
    comments: [
      { user: "Tom R.", text: "Legendary breakfast place, love the donuts and fresh eggs." },
      { user: "Gina P.", text: "The coffee and omelets are the best way to start your day." }
    ]
  },
  {
    name: "Ricobene's",
    address: "252 W 26th St, Chicago, IL 60616",
    cuisine: "Italian",
    price: "$",
    rating: 4.4,
    distance: 2.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/H-qd8PHXYix4ZwVmVUsvHw/o.jpg",
    review_count: 1129,
    url: "https://www.yelp.com/biz/ricobenes-chicago",
    categories: [{ alias: "italian", title: "Italian" }, { alias: "sandwiches", title: "Sandwiches" }],
    location: { display_address: ["252 W 26th St", "Chicago, IL 60616"] },
    comments: [
      { user: "Sal V.", text: "Breaded steak sandwich - huge and always excellent." },
      { user: "Luis T.", text: "Hidden gem for subs. Don’t skip the fries." }
    ]
  },
  {
    name: "The Halal Guys",
    address: "49 W Randolph St, Chicago, IL 60601",
    cuisine: "Middle Eastern",
    price: "$",
    rating: 4.3,
    distance: 0.5,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/AnzYbWtDDk2MAIBZ30fjpw/o.jpg",
    review_count: 2754,
    url: "https://www.yelp.com/biz/the-halal-guys-chicago-2",
    categories: [{ alias: "mideastern", title: "Middle Eastern" }, { alias: "halal", title: "Halal" }],
    location: { display_address: ["49 W Randolph St", "Chicago, IL 60601"] },
    comments: [
      { user: "Aadil R.", text: "Famous for a reason! The white sauce is addictive." },
      { user: "Priya K.", text: "Quick and filling after a night out. Falafel is great too." }
    ]
  },
  {
    name: "Floriole Cafe & Bakery",
    address: "1220 W Webster Ave, Chicago, IL 60614",
    cuisine: "French/Bakery",
    price: "$$",
    rating: 4.7,
    distance: 3.2,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/xrSvCgxZbt_nygkt97PYhw/o.jpg",
    review_count: 1389,
    url: "https://www.yelp.com/biz/floriole-cafe-and-bakery-chicago",
    categories: [{ alias: "french", title: "French" }, { alias: "bakeries", title: "Bakeries" }],
    location: { display_address: ["1220 W Webster Ave", "Chicago, IL 60614"] },
    comments: [
      { user: "Simone G.", text: "Flaky croissants and delicate pastries. Cozy for brunch." },
      { user: "Nick H.", text: "Coffee and a tart in their sunroom is my weekend favorite." }
    ]
  },
  {
    name: "Bari Subs & Italian Foods",
    address: "1120 W Grand Ave, Chicago, IL 60642",
    cuisine: "Deli/Italian",
    price: "$",
    rating: 4.8,
    distance: 1.9,
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/SFWhbRtWPx0gKHXBgNAO9A/o.jpg",
    review_count: 1473,
    url: "https://www.yelp.com/biz/bari-subs-and-italian-foods-chicago",
    categories: [{ alias: "delis", title: "Delis" }, { alias: "italian", title: "Italian" }],
    location: { display_address: ["1120 W Grand Ave", "Chicago, IL 60642"] },
    comments: [
      { user: "Alessandro M.", text: "Best Italian subs in the city, hands down." },
      { user: "Michelle W.", text: "Crusty bread, spicy giardiniera - old school Chicago treat." }
    ]
  }
  // ======== END ADDITIONAL RESTAURANTS ========
];

export default restaurantsData;
