const { Drink } = require('../models');

const drinkData = [


{
        name: "Lemonade",
        description: "A sweet, delicious citrus-y drink that will give you a refreshing read.",
        subject: "science fiction",
        filename: "lemonade.jpg"
},
    
{
        name: "Black Coffee",
        description: "Exactly as it states. Hot and bitter.",
        subject: "business",
        filename: "black-coffee.jpg"
},
    
{
       name: "Mocha",
        description: "Tastes of chocolate, coffee, and comfort.",
        subject: "Young Adult",
        filename: "mocha.jpg"
}, 
{
       name: "Vanilla Bean Frappe",
        description: "This is a vanilla ice cream milkshake, but it cost $3 more and tastes better because you bought it in a bookshop.",
        subject: "Young Adult",
        filename: "vanillabean.jpg"
}, 
{
       name: "Earl Grey Tea",
        description: "With tastes of bergamont, this black tea makes it hard to fall asleep while reading the greats.",
        subject: "literature",
        filename: "earlgrey.jpg"
}, 
{
       name: "Pumpkin Spice Latte",
        description: "There cannot be anything more spectacularily spooky than a pumpkin spice latte.",
        subject: "mystery",
        filename: "pumpkinspice.jpg"
}, 
{
       name: "Peppermint Mocha",
        description: "Peppermint was meant to be with chocolate. It was also meant to make you as cofortable and happy as possible.",
        subject: "fantasy",
        filename: "peppermint.jpg"
}, 
{
       name: "Iced Oat Milk Latte",
        description: "This is a drink that means you know exactly what you want. Cool, calm, and oaty.",
        subject: "health",
        filename: "oatmilk.jpg"
}, 
{
       name: "Cappuccino",
        description: "A classic, foamy sophisticated treat. Those who dislike foam will never truly understand.",
        subject: "history",
        filename: "cappuccino.jpg"
}, 
{
       name: "Strawberry Lemonade",
        description: "A fruity twist on the classic. The fact that it's pink actually makes it taste better.",
        subject: "romance",
        filename: "strawberry.jpg"
}, 
{
       name: "Red Wine",
        description: "Your hand is sweating, grasping the pages of your book. Your other hand is clasped securely on your red wine. You need to know what happens next.",
        subject: "mystery",
        filename: "wine.jpg"
}, 
{
       name: "Cocounut Boba Tea",
        description: "The boba obsession is hard to get past, especially with creamy sweet coconut to wash it down with.",
        subject: "fantasy",
        filename: "coconutboba.jpg"
}, 
{
       name: "Jasmine Green Tea",
        description: "This floral green tea is refreshing, healthy, and delicious. Just the right amount of caffeine and the right amound of falvor.",
        subject: "health",
        filename: "jasmine.jpg"
}, 
{
       name: "IPA",
        description: "Some peope say this drink is hipster, but we say that this drink is hoppin'.",
        subject: "business",
        filename: "ipa.jpg"
}, 
{
       name: "Double Espresso",
        description: "Super strong and bitter. Just like you!",
        subject: "mathematics",
        filename: "espresso.jpg"
}, 
{
       name: "Drip Coffee with Lots of Cream",
        description: "When black coffee is just too much, but you still really enjoy the taste of coffee. (It's also too hot.)",
        subject: 'arts',
        filename: "coffeecream.jpg"
}, 
{
       name: "Coffee with Cream and Sugar",
        description: "How could anyone drink coffee without a bit of sweetness in there?",
        subject: "else",
        filename: "sugar.jpg"
},
 {
       name: "Cafe au lait",
        description: "A drip coffee with some delicious foam on the top. When lattes are too strong, but you couldn't resist that fluffy milk.",
        subject: "biography",
        filename: "cafeaulait.jpg"
}, 
{
       name: "Redeye",
        description: "Drip coffee with espresso. Did you say were you tired, because I don't think you are anymore!",
        subject: "business",
        filename: "redeye.jpg"
}, 
{
       name: "Pina Colada",
        description: "Do you like getting caught in the rain? Us either, but we still love this tropical frozen drink, regardless of the alochol.",
        subject: "fantasy",
        filename: "pina.jpg"
}, 
{
       name: "Cream Soda",
        description: "Despite the name, cream soda does not have any dairy in it. It is, however, aboslutely delicious full of vanilla sugar and carbonation.",
        subject: "horror",
        filename: "creamsoda.jpg"
}, 
{
       name: "White Mocha",
        description: "Some peope like dark chocolate, some like milk chocolate, but white chocolate is often forgotten and it really shouldn't be... at least with coffee!",
        subject: "romance",
        filename: "whitemocha.jpg"
}, 
{
       name: "Honey and Vanilla Latte",
        description: "Sweet vanilla and a bee's special honey, this creamy latte warms even the cruelest of hearts.",
        subject: "else",
        filename: "honey.jpg"
}, 
{
       name: "Coconut Mocha Latte",
        description: "Summer is ready (or at least you wish it was). This flavor will take you to another world for at least the length of the drink.",
        subject: "biography",
        filename: "coconutmocha.jpg"
}, 
{
       name: "Breve Latte",
        description: "Breve is Italian for 'short' In this case, it stands for a whole lotta cream in espresso. This drink is for dairy lovers.",
        subject: "biography",
        filename: "breve.jpg"
}, 
{
       name: "Raspberry and White Mocha",
        description: "The sweet and fruity just screams love, love, love.",
        subject: "romance",
        filename: "raspberry.jpg"
}, 
{
       name: "Honey Lavendar Latte",
        description: "Imagine walking throuh a field of flowers. Now imagine drinking that field of flowers. We're kidding, it's not that floral, but it sure is delicious.",
        subject: "arts",
        filename: "lavender.jpg"
}, 
{
       name: "Cafe Con Leche",
        description: "A sweet espresso coffee with milk. Enjoyable in cold or hot weather.",
        subject: "biography",
        filename: "cafeconleche.jpg"
},
{
   name: "Cortadito",
    description: "A small, super sweet, super strong drink. Not for the faint of heart.",
    subject: "history",
    filename: "cortadito.jpg"
},
{
   name: "Cold Brew",
    description: "Dark, smooth, and really caffeinated, this drink is perfect for exploring new things and flavor combinations.",
    subject: "Young Adult",
    filename: "coldbrew.jpg"
},
{
   name: "Cold Brew Concentrate",
    description: "Are you insane? Are you not going to cut your coffee with water? No? Okay, well I hope you weren't planning on sleepin tonight. Or ever.",
    subject: "mathematics",
    filename: "concentrate.jpg"
},
{
   name: "Vanilla Cold Brew",
    description: "Cold brew is great, but adding some vanilla cream just makes it ten times better.",
    subject: "arts",
    filename: "vanillacoldbrew.jpg"
},
{
   name: "Cold Brew with Espresso",
    description: "Would you like coffee with your coffee? You do and you should because it tastes amazing. Good luck sleeping.",
    subject: "mathematics",
    filename: "coldespresso.jpg"
},
{
   name: "Chai Tea Latte",
    description: "Chai teas are so comforting and warm. Are you ready to relax with a cozy mystery and sip all day? You are, aren't you?",
    subject: "mystery",
    filename: "chai.jpg"
},
{
   name: "Matcha",
    description: "Matcha is a powdered green tea that can be pretty bitter, but you like bitter thins, don't you?",
    subject: "business",
    filename: "matcha.jpg"
},
{
   name: "Vanilla Matcha",
    description: "Matcha is a powdered green tea that can be pretty bitter, but add in some vanilla and you will probably have this drink every day.",
    subject: "science fiction",
    filename: "vanillamatcha.jpg"
},
{
   name: "Quad Shot Large Latte",
    description: "What's better than one shot of espresso? Four.",
    subject: "business",
    filename: "quadshot.jpg"
},
{
   name: "Kombucha",
    description: "A kombucha is a fermented tea with carbonation. Add in any flavor combination you want and it's there.",
    subject: "health",
    filename: "kombucha.jpg"
},
{
   name: "Iced Mint Tea",
    description: "Mint tea is refreshing and adds a bit of a zing when iced.",
    subject: "fantasy",
    filename: "icedmint.jpg"
},
{
   name: "Soy Latte",
    description: "Sometimes a latte is enough, but sometimes the stomach cannot handle it. The future is truly soy.",
    subject: "science fiction",
    filename: "soy.jpg"
},
{
   name: "Champagne",
    description: "Champagne is a sparkling wine that calls for quite the celebration! Just like your favorite book.",
    subject: "literature",
    filename: "champagne.jpg"
},
{
   name: "Hot Chocolate",
    description: "Milky and chocolatey and warm and cozy. Where are the marshmallows?",
    subject: "children",
    filename: "hotchocolate.jpg"
},
{
   name: "Caramel Latte",
    description: "Caramel lattes are actually the reason you get up in the mornin, aren't they?",
    subject: "else",
    filename: "caramellatte.jpg"
},
{
   name: "Caramel Mocha",
    description: "Imagine the most delicious coffee. It has chocolate in it, right? Now add caramel. You can't contain yourself, can you?",
    subject: "arts",
    filename: "caramelmocha.jpg"
},
{
   name: "Single Origin Pour Over",
    description: "Sophisticated. That's what you are and that's what you read. You grind your own beans and slowly brew your coffee.",
    subject: "literature",
    filename: "pourover.jpg"
},
{
   name: "English Breakfast Tea",
    description: "The Enlish really love their tea, but everyone makes it slightly different. How do you make it?",
    subject: "literature",
    filename: "breakfast.jpg"
},
{
   name: "Honey Oat Milk Latte",
    description: "Oat milk and honey are a match made in heaven. If you haven't had the popular beverage yet, grab a book and head to your favorite cafe.",
    subject: "biography",
    filename: "oathoney.jpg"
},
{
   name: "Chamomile Tea",
    description: "Chamomile tea is tea from a flowerthat does the opposite of coffee. If you need to get some rest, but cannot seem to be able to, try this one out.",
    subject: "mathematics",
    filename: "chamomile.jpg"
},
{
   name: "Rose Latte",
    description: "A sweet coffee for a sweet person. Who are you sharing your latte with?",
    subject: "romance",
    filename: "rose.jpg"
},
{
   name: "Mimosa",
    description: "It may be breakfast, but that does not stop the party. Orange juice and champagne, let's go!!",
    subject: "mystery",
    filename: "mimosa.jpg"
},
{
   name: "Cider",
    description: "Cider is a drink that uses fermented apples, creating a very delicious and unique taste. What could be better than a hard cider and a book?",
    subject: "business",
    filename: "cider.jpg"
},
{
   name: "Maple Cinnamon Latte",
    description: "If you are ready for the ultimate comfort drink, look no further than coffee, cinnamon, and maple. A 5-star comfort concotion.",
    subject: "horror",
    filename: "maple.jpg"
},
{
   name: "Americano",
    description: "If you like the taste of espresso, but don't want milk or a small drink, look no further than the classic Americano. Classy and refined.",
    subject: "business",
    filename: "americano.jpg"
},
{
   name: "Affagado",
    description: "Affagado means 'drowned' in Italian, and this 'drink' is labeled as such because the hot espresso drowns the delicious ice cream underneath.",
    subject: "fantasy",
    filename: "affagado.jpg"
},
{
   name: "Whole Milk Latte",
    description: "You know what you want and how you want it. Such a simple drink with a lot of flavor. What more could anyone want?",
    subject: "else",
    filename: "whole.jpg"
},
{
   name: "Sparkling Water",
    description: "Still water is for boring and average people. Obviously you aren't either of those.",
    subject: "biography",
    filename: "sparkling.jpg"
},
{
   name: "Sparkling Americano",
    description: "Coffee soda? Yes. ",
    subject: "history",
    filename: "sparkamericano.jpg"
},
{
   name: "Apple Juice",
    description: "Can you name one person that would turn down a good apple juice? We didn't think so.",
    subject: "children",
    filename: "applejuice.jpg"
},
{
   name: "Orange Juice",
    description: "Freshly squeezed lemonade is fine, but oranges are clearly the superior citrus. What's breakfast without some OJ?",
    subject: "children",
    filename: "orangejuice.jpg"
},
{
   name: "Old Fashioned",
    description: "Around here, we like to do things the classy way. Add some whiskey, bitters, and a bit of simple syrup, and you are well on your way to a great night with some old fashioned reading.",
    subject: "history",
    filename: "oldfashion.jpg"
},
{
   name: "Water",
    description: "Dihydrogen monoxide.",
    subject: "health",
    filename: "water.jpg"
},
{
   name: "Mazagran",
    description: "While there are plenty of ways to enjoy a good mazagran, a lot of cafes use just cold brew and lemonade. What a combo!",
    subject: "horror",
    filename: "mazagran.jpg"
},
{
   name: "Rockstar Energy",
    description: "You need to wake up so you can read all day, rockstar.",
    subject: "arts",
    filename: "rockstar.png"
},
{
   name: "Monster Energy",
    description: "Reading is a beast, ain't it?",
    subject: "horror",
    filename: "monster.jpg"
},
{
   name: "Bang",
    description: "WOW! BANG!",
    subject: "Young Adult",
    filename: "bang.jpg"
},
{
   name: "Red Bull",
    description: "Why read about flying while you can actually fly WHILE reading about flying?",
    subject: "fantasy",
    filename: "redbull.jpg"
},
{
   name: "Capri Sun",
    description: "A sweet drink with questionable flavors. Tastes like a mix of soccer practice and warm summer nights. Please don't play with the pouch.",
    subject: "children",
    filename: "caprisun.jpg"
},
{
   name: "Iced Coffee",
    description: "When you just wish your coffee wasn't hot today.",
    subject: "else",
    filename: "icedcoffee.jpg"
},
{
   name: "Moscow Mule",
    description: "This classic cocktail is a mix of vodka, ginger beer, and lime juice. Mixed to perfection, reading never felt so refreshing.",
    subject: "biography",
    filename: "moscowmule.jpg"
},
{
   name: "Cola",
    description: "The most classic drink of the all.",
    subject: "science fiction",
    filename: "cola.jpg"
},
{
   name: "Milk",
    description: "Sometimes we don't need anything more than a tall glass of milk. Cookies anyone?",
    subject: "children",
    filename: "milk.jpg"
},
{
   name: "Sweet Tea",
    description: "A southern classic. You won't actually believe how much sugar is in this tea. The rest of the world just wouldn't understand, y'all.",
    subject: "literature",
    filename: "sweettea.jpg"
},
{
   name: "Spiked Iced Tea",
    description: "While sipping on a nice iced cold black tea is perfect for the morning, we need to change it up a bit once 5 o'clock hits.",
    subject: "mystery",
    filename: "longisland.jpg"
},
{
   name: "White Claw",
    description: "The alcoholic seltzer that took the world by storm. Comes in a variety of flavors. Did you know that there are no laws when you are drinking white claws? Read responsibly.",
    subject: "science fiction",
    filename: "whiteclaw.jpg"
},
{
   name: "Lemon Water",
    description: "Antioxidants are very important and plain water just doesn't always hit the mark.",
    subject: "health",
    filename: "lemonwater.jpg"
},
{
   name: "Gingerale",
    description: "A classic mixer. Oh, wait, are you drinking this by itself?",
    subject: "history",
    filename: "gingerale.jpg"
},
{
   name: "Arnold Palmer",
    description: "Half lemonade and half iced black tea, nothing could be better on a warm summer day. Named after a famous golfer.",
    subject: "history",
    filename: "arnoldpalmer.jpg"
},
{
   name: "Malt Milkshake",
    description: "Pick any flavor you want, you literally cannot go wrong with a malted milkshake. Just don't get any ice cream on the page!",
    subject: "else",
    filename: "malt.jpg"
},
{
   name: "Bloody Mary",
    description: "Ready for a spicy thrill? Mr. Mustard did it with a knife in the parlor!",
    subject: "mystery",
    filename: "bloodymary.jpg"
},
{
   name: "Gin and Tonic",
    description: "You know exactly what is on your mind and you will write it all down in the bar, mysteriously.",
    subject: "horror",
    filename: "gintonic.jpg"
},
{
   name: "Margarita",
    description: "You are quite the partier. This drink involves tequila, lime juice, agave syrup, and whatever mixture you think fits the mood the best. Salt the rim and get ready for a fun beach read.",
    subject: "romance",
    filename: "margarita.jpg"
},
{
   name: "Vodka Cran",
    description: "Vodka and cranberry juice. This is truly a simple and go to cocktail for a night hitting the books.",
    subject: "mathematics",
    filename: "vodka.jpg"
},
{
   name: "Martini",
    description: "Shaken or stirred? James Bond would know best.",
    subject: "arts",
    filename: "martini.jpg"
},
{
   name: "Dirty Martini",
    description: "Attention all olive lovers! This classic cocktail adds a bit of extra olive juice to make a tangier drink.",
    subject: "mathematics",
    filename: "dirtymartini.jpg"
},
{
   name: "Grapefruit La Croix",
    description: "A flavor of champions. Also called Pampelmousse for those who are a bit more fancy. Some say they can't taste the flavors, but life doesn't always need to be so sweet.",
    subject: "literature",
    filename: "grapefruit.jpg"
},
{
   name: "Pistachio Latte",
    description: "This sounds like an interesting flavor and it is, but wow is it delicious... and green.",
    subject: "science fiction",
    filename: "pistachio.jpg"
},
{
   name: "Root Beer Float",
    description: "Why would anyone ever want to drink root beer alone when you can ADD ICE CREAM!!!??",
    subject: "Young Adult",
    filename: "rootbeer.jpg"
},
{
   name:  "Mango Dragonfruit Tea",
    description: "Coffee, not for us, but a refresher from everyone's favorite coffee shop? Need it.",
    subject: "Young Adult",
    filename: "dragonfruit.jpg"
},
{
   name: "Chocolate Milk",
    description: "There is nothing better than a carton of chocolate milk on a wednesday afternoon reading your favorite Junie B. Jones.",
    subject: "children",
    filename: "chocolatemilk.jpg"
},
{
   name: "Aperol Spritz",
    description: "All the rage and worth it all. You are new and trendy and on top of all the trends.",
    subject: "health",
    filename: "aperol.jpg"
},
{
   name: "Grape Juice",
    description: "Very sweet and the most sophisticated of drinks for children. Also stains everything.",
    subject: "horror",
    filename: "grapejuice.jpg"
},
{
   name: "Shirley Temple",
    description: "A Shirley Temple is truly the best mocktail of all time. Don't believe us? That's fine. But in your heart of hearts, you know it's true. Lemon-Lime soda with Cherry.",
    subject: "horror",
    filename: "shirley.jpg"
},
{
   name:  "Roy Rogers",
    description: "Shirley Temple not your thing? Cherry coke is much manlier, you're right.",
    subject: "mathematics",
    filename: "roy.jpg"
},
{
   name: "Stout",
    description: "This dark, top-fermented beer is an old classic in the world of beer making. Perfect for reading your favorite WWII tank novel.",
    subject: "history",
    filename: "stout.jpg"
},
{
   name: "Jones Soda",
    description: "If you can think of a flavor, Jones Soda is sure to have it. A whole Thanksgiving dinner? Your favorite savory food? They've got it. Drinks of the future.",
    subject: "science fiction",
    filename: "jones.jpg"
},
{
   name: "Whiskey Sour",
    description: "Sweet and sour, just like the characters of your favorite novel.",
    subject: "arts",
    filename: "whiskysour.jpg"
},
{
   name: "Flat White",
    description: "G'day mate! Aussie's invtented this microfoamed short latte. Less foam, more coffe flavor, delicious all around.",
    subject: "literature",
    filename: "flatwhite.jpg"
},
{
   name: "Macchiato",
    description: "Macchiato means stain in Italian. This drink is 3oz with just a stain of espresso or stain of foam, depending on your region. You are truly are a coffee fan.",
    subject: "mystery",
    filename: "macchiato.jpg"
},
{
   name: "Irish Coffee",
    description: "We all love coffee here, but the Irish just know how to do it better when the sun goes down. Pour some irish whiskey in your coffee and tell us how it is.",
    subject: "fantasy",
    filename: "irish.jpg"
},
{
   name: "Paloma",
    description: "Tequila! Grab your favorite tropical soda, some lime, and tequila and get to reading!",
    subject: "romance",
    filename: "palmoa.jpg"
},
{
   name: "Bahama Mama",
    description: "If you are ready for a sweet, chill day at the beach, it's time to have a Bahama Mama. This drink include rum orange and pineapple juice, frozen and blended. Serve with an umbrella!",
    subject: "romance",
    filename: "bahama.jpg"
},
{
   name: "Kool-Aid",
    description: "Oh YEAH!! Kool-aid in hand, book in the other. Ahhh the life.",
    subject: "children",
    filename: "kool.jpg"
},
{
   name: "Eggnog",
    description: "It doesn't just have to be the holidays to celebrate with eggnog. This drink is made with milk, cream, sugar, egg yolks, and whipped egg whites.",
    subject: "horror",
    filename: "eggnog.jpg"
},
{
   name: "GrassHopper",
    description: "Created in New Orleans, this drink is made with creme de menthe, creme de cacao, and french cream.",
    subject: "health",
    filename: "grasshopper.jpg"
},
{
   name: "Sazerac",
    description: "You sure do love your spirits. Absinthe, bitters, rye whiskey, cognac, with some lemon to garnish. Ahhh",
    subject: "else",
    filename: "saz.jpg"
}




]

const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;