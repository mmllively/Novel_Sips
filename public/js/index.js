// API URLS

async function getBooks(){
    
    // let bookSubject = [];
    searchBtn = document.getElementById('output').innerHTML="";
    
    await fetch("http://openlibrary.org/search.json?q=" +document.getElementById("input").value)
    .then(response => response.json())
    .then(response => {

        //Displays the API
        console.log(response);
        for (let i = 0; i < 5; i++) {
            document.getElementById("output").innerHTML+= "<div class='bookCard'><h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<img src = 'http://covers.openlibrary.org/b/isbn/" +response.docs[i].isbn[1]+"-M.jpg'></div>"+"<button class='getdrinks'>Drink Generator</button>"; 
            
            // Grabs and displays the book subjects on console side
            // bookSubject = response.docs[i].subject; 
            // console.log(bookSubject);
        }
    
    });
}


function getDrinks () {
// TODO: check if what is clicked is "getdrinks" 
// then traverse DOM and get data for the book
// a post fetch with data to route to drinks
// put drink and book on the page -- add function


}

document.querySelector('bookCard').addEventListener("click", getDrinks)
document.getElementById("searchBtn").addEventListener("click", getBooks);

// document.getElementById("drinkBtn").addEventListener('click', showDrink);


