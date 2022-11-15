// // API URLS
// var bookInput = {
//     title: "",
//     author_name: "",
//     subjects: ""
// }; 
// function getBooks(event){
    
//     searchBtn = document.getElementById('output').innerHTML="";
    
//     fetch("http://openlibrary.org/search.json?q=" +document.getElementById("input").value)
//     .then(a=>a.json())
//     .then(response =>{
//         //change fetch to axios
//         //go into the first doc[0].seed 
//         //do a for/each
//         //split the string str.split('/subjects/')[1]
//         //try and find a drink with that subject, then go to the next one function looking for it findall where this.subject
//         //compare this string to the drinks subject 
//         //return an array of drinks that includes this subject
//         //randomly return one drink from this array 
        

//         for (let i = 0; i < 10; i++) {
//             document.getElementById("output").innerHTML+= "<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<br><img src = 'http://covers.openlibrary.org/b/isbn/" +response.docs[i].isbn[0]+"-M.jpg'><br>";     
//         }
      
//     });
// }

// document.getElementById("searchBtn").addEventListener("click", getBooks);
// go into results and split it docs/seed/subjects/horror pass that into the where for the drink
//for/each inside there and get that string out and get each one to log out
//check to see if there is a drink with that subject

//or pick by genre and then 
