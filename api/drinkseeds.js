const { Drink } = require('../models');

const drinkData = [


{
        drink_name: "Lemonade",
        drink_description: "A sweet, delicious citrus-y drink that will give you a refreshing read.",
        drink_subject: "science fiction"
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
        drink_subject: "literature"
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
        drink_subject: 'arts'
}, 
{
        drink_name: "Coffee with Cream and Sugar",
        drink_description: "How could anyone drink coffee without a bit of sweetness in there?",
        drink_subject: "else"
},
 {
        drink_name: "Cafe au lait",
        drink_description: "A drip coffee with some delicious foam on the top. When lattes are too strong, but you couldn't resist that fluffy milk.",
        drink_subject: "biography"
}, 
{
        drink_name: "Redeye",
        drink_description: "Drip coffee with espresso. Did you say were you tired, because I don't think you are anymore!",
        drink_subject: "business"
}, 
{
        drink_name: "Pina Colada",
        drink_description: "Do you like getting caught in the rain? Us either, but we still love this tropical frozen drink, regardless of the alochol.",
        drink_subject: "fantasy"
}, 
{
        drink_name: "Cream Soda",
        drink_description: "Despite the name, cream soda does not have any dairy in it. It is, however, aboslutely delicious full of vanilla sugar and carbonation.",
        drink_subject: "horror"
}, 
{
        drink_name: "White Mocha",
        drink_description: "Some peope like dark chocolate, some like milk chocolate, but white chocolate is often forgotten and it really shouldn't be... at least with coffee!",
        drink_subject: "romance"
}, 
{
        drink_name: "Honey and Vanilla Latte",
        drink_description: "Sweet vanilla and a bee's special honey, this creamy latte warms even the cruelest of hearts.",
        drink_subject: "else"
}, 
{
        drink_name: "Coconut Mocha Latte",
        drink_description: "Summer is ready (or at least you wish it was). This flavor will take you to another world for at least the length of the drink.",
        drink_subject: "biography"
}, 
{
        drink_name: "Breve Latte",
        drink_description: "Breve is Italian for 'short' In this case, it stands for a whole lotta cream in espresso. This drink is for dairy lovers.",
        drink_subject: "biography"
}, 
{
        drink_name: "Raspberry and White Mocha",
        drink_description: "The sweet and fruity just screams love, love, love.",
        drink_subject: "romance"
}, 
{
        drink_name: "Honey Lavendar Latte",
        drink_description: "Imagine walking throuh a field of flowers. Now imagine drinking that field of flowers. We're kidding, it's not that floral, but it sure is delicious.",
        drink_subject: "arts"
}, 
{
        drink_name: "Cafe Con Leche",
        drink_description: "A sweet espresso coffee with milk. Enjoyable in cold or hot weather.",
        drink_subject: "biography"
},
{
    drink_name: "Cortadito",
    drink_description: "A small, super sweet, super strong drink. Not for the faint of heart.",
    drink_subject: "history"
},
{
    drink_name: "Cold Brew",
    drink_description: "Dark, smooth, and really caffeinated, this drink is perfect for exploring new things and flavor combinations.",
    drink_subject: "Young Adult"
},
{
    drink_name: "Cold Brew Concentrate",
    drink_description: "Are you insane? Are you not going to cut your coffee with water? No? Okay, well I hope you weren't planning on sleepin tonight. Or ever.",
    drink_subject: "mathematics"
},
{
    drink_name: "Vanilla Cold Brew",
    drink_description: "Cold brew is great, but adding some vanilla cream just makes it ten times better.",
    drink_subject: "arts"
},
{
    drink_name: "Cold Brew with Espresso",
    drink_description: "Would you like coffee with your coffee? You do and you should because it tastes amazing. Good luck sleeping.",
    drink_subject: "mathematics"
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
    drink_subject: "science fiction"
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
    drink_subject: "fantasy"
},
{
    drink_name: "Soy Latte",
    drink_description: "Sometimes a latte is enough, but sometimes the stomach cannot handle it. The future is truly soy.",
    drink_subject: "science fiction"
},
{
    drink_name: "Champagne",
    drink_description: "Champagne is a sparkling wine that calls for quite the celebration! Just like your favorite book.",
    drink_subject: "literature"
},
{
    drink_name: "Hot Chocolate",
    drink_description: "Milky and chocolatey and warm and cozy. Where are the marshmallows?",
    drink_subject: "children"
},
{
    drink_name: "Caramel Latte",
    drink_description: "Caramel lattes are actually the reason you get up in the mornin, aren't they?",
    drink_subject: "else"
},
{
    drink_name: "Caramel Mocha",
    drink_description: "Imagine the most delicious coffee. It has chocolate in it, right? Now add caramel. You can't contain yourself, can you?",
    drink_subject: "arts"
},
{
    drink_name: "Single Origin Pour Over",
    drink_description: "Sophisticated. That's what you are and that's what you read. You grind your own beans and slowly brew your coffee.",
    drink_subject: "literature"
},
{
    drink_name: "English Breakfast Tea",
    drink_description: "The Enlish really love their tea, but everyone makes it slightly different. How do you make it?",
    drink_subject: "literature"
},
{
    drink_name: "Honey Oat Milk Latte",
    drink_description: "Oat milk and honey are a match made in heaven. If you haven't had the popular beverage yet, grab a book and head to your favorite cafe.",
    drink_subject: "biography"
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
    drink_subject: "mystery"
},
{
    drink_name: "Cider",
    drink_description: "Cider is a drink that uses fermented apples, creating a very delicious and unique taste. What could be better than a hard cider and a book?",
    drink_subject: "business"
},
{
    drink_name: "Maple Cinnamon Latte",
    drink_description: "If you are ready for the ultimate comfort drink, look no further than coffee, cinnamon, and maple. A 5-star comfort concotion.",
    drink_subject: "horror"
},
{
    drink_name: "Americano",
    drink_description: "If you like the taste of espresso, but don't want milk or a small drink, look no further than the classic Americano. Classy and refined.",
    drink_subject: "business"
},
{
    drink_name: "Affagado",
    drink_description: "Affagado means 'drowned' in Italian, and this 'drink' is labeled as such because the hot espresso drowns the delicious ice cream underneath.",
    drink_subject: "fantasy"
},
{
    drink_name: "Whole Milk Latte",
    drink_description: "You know what you want and how you want it. Such a simple drink with a lot of flavor. What more could anyone want?",
    drink_subject: "else"
},
{
    drink_name: "Sparkling Water",
    drink_description: "Still water is for boring and average people. Obviously you aren't either of those.",
    drink_subject: "biography"
},
{
    drink_name: "Sparkling Americano",
    drink_description: "Coffee soda? Yes. ",
    drink_subject: "history"
},
{
    drink_name: "Apple Juice",
    drink_description: "Can you name one person that would turn down a good apple juice? We didn't think so.",
    drink_subject: "children"
},
{
    drink_name: "Orange Juice",
    drink_description: "Freshly squeezed lemonade is fine, but oranges are clearly the superior citrus. What's breakfast without some OJ?",
    drink_subject: "children"
},
{
    drink_name: "Old Fashioned",
    drink_description: "Around here, we like to do things the classy way. Add some whiskey, bitters, and a bit of simple syrup, and you are well on your way to a great night with some old fashioned reading.",
    drink_subject: "history"
},
{
    drink_name: "Water",
    drink_description: "Dihydrogen monoxide.",
    drink_subject: "health"
},
{
    drink_name: "Mazagran",
    drink_description: "While there are plenty of ways to enjoy a good mazagran, a lot of cafes use just cold brew and lemonade. What a combo!",
    drink_subject: "horror"
},
{
    drink_name: "Rockstar Energy",
    drink_description: "You need to wake up so you can read all day, rockstar.",
    drink_subject: "arts"
},
{
    drink_name: "Monster Energy",
    drink_description: "Reading is a beast, ain't it?",
    drink_subject: "horror"
},
{
    drink_name: "Bang",
    drink_description: "WOW! BANG!",
    drink_subject: "Young Adult"
},
{
    drink_name: "Red Bull",
    drink_description: "Why read about flying while you can actually fly WHILE reading about flying?",
    drink_subject: "fantasy"
},
{
    drink_name: "Capri Sun",
    drink_description: "A sweet drink with questionable flavors. Tastes like a mix of soccer practice and warm summer nights. Please don't play with the pouch.",
    drink_subject: "children"
},
{
    drink_name: "Iced Coffee",
    drink_description: "When you just wish your coffee wasn't hot today.",
    drink_subject: "else"
},
{
    drink_name: "Moscow Mule",
    drink_description: "This classic cocktail is a mix of vodka, ginger beer, and lime juice. Mixed to perfection, reading never felt so refreshing.",
    drink_subject: "biography"
},
{
    drink_name: "Cola",
    drink_description: "The most classic drink of the all.",
    drink_subject: "science fiction"
},
{
    drink_name: "Milk",
    drink_description: "Sometimes we don't need anything more than a tall glass of milk. Cookies anyone?",
    drink_subject: "children"
},
{
    drink_name: "Sweet Tea",
    drink_description: "A southern classic. You won't actually believe how much sugar is in this tea. The rest of the world just wouldn't understand, y'all.",
    drink_subject: "literature"
},
{
    drink_name: "Spiked Iced Tea",
    drink_description: "While sipping on a nice iced cold black tea is perfect for the morning, we need to change it up a bit once 5 o'clock hits.",
    drink_subject: "mystery"
},
{
    drink_name: "White Claw",
    drink_description: "The alcoholic seltzer that took the world by storm. Comes in a variety of flavors. Did you know that there are no laws when you are drinking white claws? Read responsibly.",
    drink_subject: "science fiction"
},
{
    drink_name: "Lemon Water",
    drink_description: "Antioxidants are very important and plain water just doesn't always hit the mark.",
    drink_subject: "health"
},
{
    drink_name: "Gingerale",
    drink_description: "A classic mixer. Oh, wait, are you drinking this by itself?",
    drink_subject: "history"
},
{
    drink_name: "Arnold Palmer",
    drink_description: "Half lemonade and half iced black tea, nothing could be better on a warm summer day. Named after a famous golfer.",
    drink_subject: "history"
},
{
    drink_name: "Malt Milkshake",
    drink_description: "Pick any flavor you want, you literally cannot go wrong with a malted milkshake. Just don't get any ice cream on the page!",
    drink_subject: "else"
},
{
    drink_name: "Bloody Mary",
    drink_description: "Ready for a spicy thrill? Mr. Mustard did it with a knife in the parlor!",
    drink_subject: "mystery"
},
{
    drink_name: "Gin and Tonic",
    drink_description: "You know exactly what is on your mind and you will write it all down in the bar, mysteriously.",
    drink_subject: "horror"
},
{
    drink_name: "Margarita",
    drink_description: "You are quite the partier. This drink involves tequila, lime juice, agave syrup, and whatever mixture you think fits the mood the best. Salt the rim and get ready for a fun beach read.",
    drink_subject: "romance"
},
{
    drink_name: "Vodka Cran",
    drink_description: "Vodka and cranberry juice. This is truly a simple and go to cocktail for a night hitting the books.",
    drink_subject: "mathematics"
},
{
    drink_name: "Martini",
    drink_description: "Shaken or stirred? James Bond would know best.",
    drink_subject: "arts"
},
{
    drink_name: "Dirty Martini",
    drink_description: "Attention all olive lovers! This classic cocktail adds a bit of extra olive juice to make a tangier drink.",
    drink_subject: "mathematics"
},
{
    drink_name: "Grapefruit La Croix",
    drink_description: "A flavor of champions. Also called Pampelmousse for those who are a bit more fancy. Some say they can't taste the flavors, but life doesn't always need to be so sweet.",
    drink_subject: "literature"
},
{
    drink_name: "Pistachio Latte",
    drink_description: "This sounds like an interesting flavor and it is, but wow is it delicious... and green.",
    drink_subject: "science fiction"
},
{
    drink_name: "Root Beer Float",
    drink_description: "Why would anyone ever want to drink root beer alone when you can ADD ICE CREAM!!!??"
    drink_subject: "Young Adult"
},
{
    drink_name:  "Mango Dragonfruit Tea",
    drink_description: "Coffee, not for us, but a refresher from everyone's favorite coffee shop? Need it.",
    drink_subject: "Young Adult"
},
{
    drink_name: "Chocolate Milk",
    drink_description: "There is nothing better than a carton of chocolate milk on a wednesday afternoon reading your favorite Junie B. Jones.",
    drink_subject: "children"
},
{
    drink_name: "Aperol Spritz",
    drink_description: "All the rage and worth it all. You are new and trendy and on top of all the trends.",
    drink_subject: "health"
},
{
    drink_name: "Grape Juice",
    drink_description: "Very sweet and the most sophisticated of drinks for children. Also stains everything.",
    drink_subject: "horror"
},
{
    drink_name: "Shirley Temple",
    drink_description: "A Shirley Temple is truly the best mocktail of all time. Don't believe us? That's fine. But in your heart of hearts, you know it's true. Lemon-Lime soda with Cherry.",
    drink_subject: "horror"
},
{
    drink_name:  "Roy Rogers",
    drink_description: "Shirley Temple not your thing? Cherry coke is much manlier, you're right.",
    drink_subject: "mathematics"
},
{
    drink_name: "Stout",
    drink_description: "This dark, top-fermented beer is an old classic in the world of beer making. Perfect for reading your favorite WWII tank novel.",
    drink_subject: "history"
},
{
    drink_name: "Jones Soda",
    drink_description: "If you can think of a flavor, Jones Soda is sure to have it. A whole Thanksgiving dinner? Your favorite savory food? They've got it. Drinks of the future.",
    drink_subject: "science fiction"
},
{
    drink_name: "Whiskey Sour",
    drink_description: "Sweet and sour, just like the characters of your favorite novel.",
    drink_subject: "arts"
},
{
    drink_name: "Flat White",
    drink_description: "G'day mate! Aussie's invtented this microfoamed short latte. Less foam, more coffe flavor, delicious all around.",
    drink_subject: "literature"
},
{
    drink_name: "Macchiato",
    drink_description: "Macchiato means stain in Italian. This drink is 3oz with just a stain of espresso or stain of foam, depending on your region. You are truly are a coffee fan.",
    drink_subject: "mystery"
},
{
    drink_name: "Irish Coffee",
    drink_description: "We all love coffee here, but the Irish just know how to do it better when the sun goes down. Pour some irish whiskey in your coffee and tell us how it is.",
    drink_subject: "fantasy"
},
{
    drink_name: "Paloma",
    drink_description: "Tequila! Grab your favorite tropical soda, some lime, and tequila and get to reading!",
    drink_subject: "romance"
},
{
    drink_name: "Bahama Mama",
    drink_description: "If you are ready for a sweet, chill day at the beach, it's time to have a Bahama Mama. This drink include rum orange and pineapple juice, frozen and blended. Serve with an umbrella!",
    drink_subject: "romance"
},
{
    drink_name: "Kool-Aid",
    drink_description: "Oh YEAH!! Kool-aid in hand, book in the other. Ahhh the life.",
    drink_subject: "children"
},
{
    drink_name: "Eggnog",
    drink_description: "It doesn't just have to be the holidays to celebrate with eggnog. This drink is made with milk, cream, sugar, egg yolks, and whipped egg whites.",
    drink_subject: "horror"
},
{
    drink_name: "GrassHopper",
    drink_description: "Created in New Orleans, this drink is made with creme de menthe, creme de cacao, and french cream.",
    drink_subject: "health"
},
{
    drink_name: "Sazerac",
    drink_description: "You sure do love your spirits. Absinthe, bitters, rye whiskey, cognac, with some lemon to garnish. Ahhh",
    drink_subject: "else"
}




]