


// GET books
function getBooks() {
    
    searchBtn = document.getElementById('output').innerHTML="";
    var inputBook = document.getElementById("input").value;
    axios({
        method: 'get',
        url: ('http://openlibrary.org/search.json?q=' + inputBook),
        data: {
            title: '',
            authors: '',
        }
    })
    .then(response => console.log(response)) 
    .catch(err => console.error(err))


};

function showBooks(res){
document.getElementById("output").innerHTML = `<h2> ${(res.title)} ${(res.authors)}</h2>
<br>
<img src = 'http://books.google.com/books/content?id=" + ${(res.id)} +"&printsec=frontcover&img=1&zoom=1&source=gbs_api"><br>`
};
document.getElementById("searchBtn").addEventListener("click", getBooks);
//show output
//https://www.googleapis.com/books/v1/volumes?q=