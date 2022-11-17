// API URLS

async function getBooks(e){
    e.preventDefault()
    document.location=("/profile/"+ document.getElementById("input").value)
    
    // console.log(response)
    
    // http://openlibrary.org/search.json?q=" +document.getElementById)
    // let bookSubject = [];
    // searchBtn = document.getElementById('output').innerHTML="";
    
    // await fetch("http://openlibrary.org/search.json?q=" +document.getElementById("input").value)
    // .then(response => response.json())
    // .then(response => {

    //     //Displays the API
    //     console.log(response);
    //     for (let i = 0; i < 5; i++) {
    //         document.getElementById("output").innerHTML+= "<div class='bookCard'><h2 class='title'>"+response.docs[i].title+"</h2><p class='author'>"+response.docs[i].author_name[0]+"</p><img src = 'http://covers.openlibrary.org/b/isbn/" +response.docs[i].isbn[1]+"-M.jpg'></div>"+"<button class='getdrinks'>Drink Generator</button>"; 
            
    //     }
    
  
}


function getDrinks (e) {
    // console.log(e.target);
    if (e.target.matches(".getdrinks")) {
        console.log(e.target);
        let btn = e.target;
        let title = btn.previousSibling.childNodes[0].textContent;
        let author = btn.previousSibling.childNodes[1].textContent;
        let image = btn.previousSibling.childNodes[2].src;

        let selectedBook = {title, author, image}
        console.log(selectedBook);
        fetch ("/profile", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedBook)
            

        })
        .then ((response) => {
            // response.json();
        }).then ((data) => {
            // console.log(data);
        })
       
    }
   
// TODO: check if what is clicked is "getdrinks" 
// then traverse DOM and get data for the book
// a post fetch with data to route to drinks
// put drink and book on the page -- add function


}

document.getElementById("searchBtn").addEventListener("click", getBooks);




