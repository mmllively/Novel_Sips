const { Drink } = require('../models');

const drinkData = [


{
        drink_name: "Lemonade",
        drink_description: "A sweet, delicious citrus-y drink that will give you a refreshing read.",
        drink_subject: "children"
},
    
{
        drink_name: "Black Coffee",
        drink_description: "Exactly as it states. Hot and bitter.",
        drink_subject: "business"
},
    
{
        drink_name: "Mocha",
        drink_description: "Tastes of chocolate, coffee, and comfort.",
        drink_subject: "Young Adult"
}, 
{
        drink_name: "Vanilla Bean Frappe",
        drink_description: "This is a vanilla ice cream milkshake, but it cost $3 more and tastes better because you bought it in a bookshop.",
        drink_subject: "Young Adult"
}, 
{
        drink_name: "Earl Grey Tea",
        drink_description: "With tastes of bergamont, this black tea makes it hard to fall asleep while reading the greats.",
        drink_subject: "Literature"
}, 
{
        drink_name: "Pumpkin Spice Latte",
        drink_description: "There cannot be anything more spectacularily spooky than a pumpkin spice latte.",
        drink_subject: "mystery"
}, 
{
        drink_name: "Peppermint Mocha",
        drink_description: "Peppermint was meant to be with chocolate. It was also meant to make you as cofortable and happy as possible.",
        drink_subject: "fantasy"
}, 
{
        drink_name: "Iced Oat Milk Latte",
        drink_description: "This is a drink that means you know exactly what you want. Cool, calm, and oaty.",
        drink_subject: "health"
}, 
{
        drink_name: "Cappuccino",
        drink_description: "A classic, foamy sophisticated treat. Those who dislike foam will never truly understand.",
        drink_subject: "history"
}, 
{
        drink_name: "Strawberry Lemonade",
        drink_description: "A fruity twist on the classic. The fact that it's pink actually makes it taste better.",
        drink_subject: "romance"
}, 
{
        drink_name: "Red Wine",
        drink_description: "Your hand is sweating, grasping the pages of your book. Your other hand is clasped securely on your red wine. You need to know what happens next.",
        drink_subject: "mystery"
}, 
{
        drink_name: "Cocounut Boba Tea",
        drink_description: "The boba obsession is hard to get past, especially with creamy sweet coconut to wash it down with.",
        drink_subject: "fantasy"
}, 
{
        drink_name: "Jasmine Green Tea",
        drink_description: "This floral green tea is refreshing, healthy, and delicious. Just the right amount of caffeine and the right amound of falvor.",
        drink_subject: "health"
}, 
{
        drink_name: "IPA",
        drink_description: "Some peope say this drink is hipster, but we say that this drink is hoppin'.",
        drink_subject: "business"
}, 
{
        drink_name: "Double Espresso",
        drink_description: "Super strong and bitter. Just like you!",
        drink_subject: "mathematics"
}, 
{
        drink_name: "Drip Coffee with Lots of Cream",
        drink_description: "When black coffee is just too much, but you still really enjoy the taste of coffee. (It's also too hot.)",
        drink_subject:
}, 
{
        drink_name: "Coffee with Cream and Sugar",
        drink_description: "How could anyone drink coffee without a bit of sweetness in there?",
        drink_subject:
},
 {
        drink_name: "Cafe au lait",
        drink_description: "A drip coffee with some delicious foam on the top. When lattes are too strong, but you couldn't resist that fluffy milk.",
        drink_subject:
}, 
{
        drink_name: "Redeye",
        drink_description: "Drip coffee with espresso. Did you say were you tired, because I don't think you are anymore!",
        drink_subject:
}, 
{
        drink_name: "Pina Colada",
        drink_description: "Do you like getting caught in the rain? Us either, but we still love this tropical frozen drink, regardless of the alochol.",
        drink_subject:
}, 
{
        drink_name: "Cream Soda",
        drink_description: "Despite the name, cream soda does not have any dairy in it. It is, however, aboslutely delicious full of vanilla sugar and carbonation.",
        drink_subject:
}, 
{
        drink_name: "White Mocha",
        drink_description: "Some peope like dark chocolate, some like milk chocolate, but white chocolate is often forgotten and it really shouldn't be... at least with coffee!",
        drink_subject:
}, 
{
        drink_name: "Honey and Vanilla Latte",
        drink_description: "Sweet vanilla and a bee's special honey, this creamy latte warms even the cruelest of hearts.",
        drink_subject:
}, 
{
        drink_name: "Coconut Mocha Latte",
        drink_description: "Summer is ready (or at least you wish it was). This flavor will take you to another world for at least the length of the drink.",
        drink_subject:
}, 
{
        drink_name: "Breve Latte",
        drink_description: "Breve is Italian for 'short' In this case, it stands for a whole lotta cream in espresso. This drink is for dairy lovers.",
        drink_subject:
}, 
{
        drink_name: "Raspberry and White Mocha",
        drink_description: "The sweet and fruity just screams love, love, love.",
        drink_subject:
}, 
{
        drink_name: "Honey Lavendar Latte",
        drink_description: "Imagine walking throuh a field of flowers. Now imagine drinking that field of flowers. We're kidding, it's not that floral, but it sure is delicious.",
        drink_subject:
}, 
{
        drink_name: "Cafe Con Leche",
        drink_description: "A sweet espresso coffee with milk. Enjoyable in cold or hot weather.",
        drink_subject:
},
{
    drink_name: "Cortadito",
    drink_description: "A small, super sweet, super strong drink. Not for the faint of heart.",
    drink_subject:
},
{
    drink_name: "Cold Brew",
    drink_description: "Dark, smooth, and really caffeinated, this drink is perfect for exploring new things and flavor combinations.",
    drink_subject:
},
{
    drink_name: "Cold Brew Concentrate",
    drink_description: "Are you insane? Are you not going to cut your coffee with water? No? Okay, well I hope you weren't planning on sleepin tonight. Or ever.",
    drink_subject: "mathematics"
},
{
    drink_name: "Vanilla Cold Brew",
    drink_description: "Cold brew is great, but adding some vanilla cream just makes it ten times better.",
    drink_subject:
},
{
    drink_name: "Cold Brew with Espresso",
    drink_description: "Would you like coffee with your coffee? You do and you should because it tastes amazing. Good luck sleeping.",
    drink_subject:
},
{
    drink_name: "Chai Tea Latte",
    drink_description: "Chai teas are so comforting and warm. Are you ready to relax with a cozy mystery and sip all day? You are, aren't you?",
    drink_subject: "mystery"
},
{
    drink_name: "Matcha",
    drink_description: "Matcha is a powdered green tea that can be pretty bitter, but you like bitter thins, don't you?",
    drink_subject: "business"
},
{
    drink_name: "Vanilla Matcha",
    drink_description: "Matcha is a powdered green tea that can be pretty bitter, but add in some vanilla and you will probably have this drink every day.",
    drink_subject:
},
{
    drink_name: "Quad Shot Large Latte",
    drink_description: "What's better than one shot of espresso? Four.",
    drink_subject: "business"
},
{
    drink_name: "Kombucha",
    drink_description: "A kombucha is a fermented tea with carbonation. Add in any flavor combination you want and it's there.",
    drink_subject: "health"
},
{
    drink_name: "Iced Mint Tea",
    drink_description: "Mint tea is refreshing and adds a bit of a zing when iced.",
    drink_subject:
},
{
    drink_name: "Soy Latte",
    drink_description: "Sometimes a latte is enough, but sometimes the stomach cannot handle it. The future is truly soy.",
    drink_subject: "science fiction"
},
{
    drink_name: "Champagne",
    drink_description: "Champagne is a sparkling wine that calls for quite the celebration! Just like your favorite book.",
    drink_subject:
},
{
    drink_name: "Hot Chocolate",
    drink_description: "Milky and chocolatey and warm and cozy. Where are the marshmallows?",
    drink_subject: "children"
},
{
    drink_name: "Caramel Latte",
    drink_description: "Caramel lattes are actually the reason you get up in the mornin, aren't they?",
    drink_subject:
},
{
    drink_name: "Caramel Mocha",
    drink_description: "Imagine the most delicious coffee. It has chocolate in it, right? Now add caramel. You can't contain yourself, can you?",
    drink_subject:
},
{
    drink_name: "Single Origin Pour Over",
    drink_description: "Sophisticated. That's what you are and that's what you read. You grind your own beans and slowly brew your coffee.",
    drink_subject: "literature"
},
{
    drink_name: "English Breakfast Tea",
    drink_description: "The Enlish really love their tea, but everyone makes it slightly different. How do you make it?",
    drink_subject: 
},
{
    drink_name: "Honey Oat Milk Latte",
    drink_description: "Oat milk and honey are a match made in heaven. If you haven't had the popular beverage yet, grab a book and head to your favorite cafe.",
    drink_subject:
},
{
    drink_name: "Chamomile Tea",
    drink_description: "Chamomile tea is tea from a flowerthat does the opposite of coffee. If you need to get some rest, but cannot seem to be able to, try this one out.",
    drink_subject: "mathematics"
},
{
    drink_name: "Rose Latte",
    drink_description: "A sweet coffee for a sweet person. Who are you sharing your latte with?",
    drink_subject: "romance"
},
{
    drink_name: "Mimosa",
    drink_description: "It may be breakfast, but that does not stop the party. Orange juice and champagne, let's go!!",
    drink_subject:
},
{
    drink_name: "Cider",
    drink_description: "Cider is a drink that uses fermented apples, creating a very delicious and unique taste. What could be better than a hard cider and a book?",
    drink_subject:
},
{
    drink_name: "Maple Cinnamon Latte",
    drink_description: "If you are ready for the ultimate comfort drink, look no further than coffee, cinnamon, and maple. A 5-star comfort concotion.",
    drink_subject:
},
{
    drink_name: "Americano",
    drink_description: "If you like the taste of espresso, but don't want milk or a small drink, look no further than the classic Americano. Classy and refined.",
    drink_subject: "business"
},
{
    drink_name: "Affagado",
    drink_description: "Affagado means 'drowned' in Italian, and this 'drink' is labeled as such because the hot espresso drowns the delicious ice cream underneath.",
    drink_subject:
},
{
    drink_name: "Whole Milk Latte",
    drink_description: "You know what you want and how you want it. Such a simple drink with a lot of flavor. What more could anyone want?",
    drink_subject:
},
{
    drink_name: "Sparkling Water",
    drink_description: "Still water is for boring and average people. Obviously you aren't either of those.",
    drink_subject:
},
{
    drink_name: "Sparkling Americano",
    drink_description: "Coffee soda? Yes. ",
    drink_subject:
},
{
    drink_name: "Apple Juice",
    drink_description: "Can you name one person that would turn down a good apple juice? We didn't think so.",
    drink_subject:
},
{
    drink_name: "Orange Juice",
    drink_description: "Freshly squeezed lemonade is fine, but oranges are clearly the superior citrus. What's breakfast without some OJ?",
    drink_subject:
},
{
    drink_name: "Old Fashioned",
    drink_description: "Around here, we like to do things the classy way. Add some whiskey, bitters, and a bit of simple syrup, and you are well on your way to a great night with some old fashioned reading.",
    drink_subject:
},
{
    drink_name: "Water",
    drink_description: "Dihydrogen monoxide.",
    drink_subject:
},
{
    drink_name: "Mazagran",
    drink_description: "While there are plenty of ways to enjoy a good mazagran, a lot of cafes use just cold brew and lemonade. What a combo!",
    drink_subject:
},
{
    drink_name: "Rockstar Energy",
    drink_description: "You need to wake up so you can read all day, rockstar.",
    drink_subject:
},
{
    drink_name: "Monster Energy",
    drink_description: "Reading is a beast, ain't it?",
    drink_subject:
},
{
    drink_name: "Bang",
    drink_description: "WOW! BANG!",
    drink_subject:
},
{
    drink_name: "Red Bull",
    drink_description: "Why read about flying while you can actually fly WHILE reading about flying?",
    drink_subject: "fantasy"
},
{
    drink_name: "Capri Sun",
    drink_description:
    drink_subject:
},
{
    drink_name: "Iced Coffee",
    drink_description:
    drink_subject:
},
{
    drink_name: "Moscow Mule",
    drink_description:
    drink_subject:
},
{
    drink_name: "Cola",
    drink_description:
    drink_subject:
},
{
    drink_name: "Milk",
    drink_description:
    drink_subject:
},
{
    drink_name: "Iced Tea",
    drink_description:
    drink_subject:
},
{
    drink_name: "Spiked Iced Tea",
    drink_description:
    drink_subject:
},
{
    drink_name: "White Claw",
    drink_description:
    drink_subject:
},
{
    drink_name: "Lemon Water",
    drink_description:
    drink_subject:
},
{
    drink_name: "Gingerale",
    drink_description:
    drink_subject:
},
{
    drink_name: "Arnold Palmer",
    drink_description:
    drink_subject:
},
{
    drink_name: "Malt Milkshake",
    drink_description:
    drink_subject:
},
{
    drink_name: "Bloody Mary",
    drink_description:
    drink_subject:
},
{
    drink_name: "Gin and Tonic",
    drink_description:
    drink_subject:
},
{
    drink_name: "Margarita",
    drink_description:
    drink_subject:
},
{
    drink_name: "Vodka Cran",
    drink_description:
    drink_subject:
},
{
    drink_name: "Martini"
    drink_description:
    drink_subject:
},
{
    drink_name: "Dirty Martini",
    drink_description:
    drink_subject:
},
{
    drink_name: "Grapefruit La Croix",
    drink_description:
    drink_subject:
},
{
    drink_name: "Pistachio Latte",
    drink_description:
    drink_subject:
},
{
    drink_name: "Root Beer Float",
    drink_description:
    drink_subject:
},
{
    drink_name:  "Mango Dragonfruit Tea",
    drink_description:
    drink_subject:
},
{
    drink_name: "Chocolate Milk",
    drink_description:
    drink_subject:
},
{
    drink_name: "Aperol Spritz",
    drink_description:
    drink_subject:
},
{
    drink_name: "Grape Juice",
    drink_description:
    drink_subject:
},
{
    drink_name: "Shirley Temple",
    drink_description:
    drink_subject:
},
{
    drink_name:  "Roy Rogers",
    drink_description:
    drink_subject:
},
{
    drink_name: "Stout",
    drink_description:
    drink_subject:
},
{
    drink_name: "Jones Soda",
    drink_description:
    drink_subject:
},
{
    drink_name: "Whiskey Sour",
    drink_description:
    drink_subject:
},
{
    drink_name: "Flat White",
    drink_description:
    drink_subject:
},
{
    drink_name: "Macchiato",
    drink_description:
    drink_subject:
},
{
    drink_name: "Irish Coffee",
    drink_description:
    drink_subject:
},
{
    drink_name: "Paloma",
    drink_description:
    drink_subject:
},
{
    drink_name: "Bahama Mama",
    drink_description:
    drink_subject:
},
{
    drink_name: "Kool-Aid",
    drink_description:
    drink_subject:
},
{
    drink_name: "Eggnog",
    drink_description:
    drink_subject:
},
{
    drink_name: "GrassHopper",
    drink_description:
    drink_subject:
},
{
    drink_name: "Sazerac",
    drink_description:
    drink_subject:
}




]