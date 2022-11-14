// API URLS

async function getBooks(){
    
    let bookTitle = [];
    searchBtn = document.getElementById('output').innerHTML="";
    
    await fetch("http://openlibrary.org/search.json?q=" +document.getElementById("input").value)
    .then(response => response.json())
    .then(response => {

        //Displays the API
        console.log(response);
        for (let i = 0; i < 5; i++) {
            document.getElementById("output").innerHTML+= "<div class='bookBtn'><h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<img src = 'http://covers.openlibrary.org/b/isbn/" +response.docs[i].isbn[1]+"-M.jpg'></div>"; 
            
            // Grabs and displays the book titles on console side
            bookTitle = response.docs[i].title; 
            console.log(bookTitle);
        }
    });
}

document.getElementById("searchBtn").addEventListener("click", getBooks);




