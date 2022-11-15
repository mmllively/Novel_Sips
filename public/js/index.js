


// GET books
function getBooks() {
    
    searchBtn = document.getElementById('output').innerHTML="";
    var inputBook = document.getElementById("input").value;
    axios({
        method: 'get',
        url: ('https://www.googleapis.com/books/v1/volumes?q=' + inputBook),
        data: {
            title: '',
            authors: '',
        }
    })
    .then(response => showBooks(response)) 
    .catch(err => console.error(err))
};

function showBooks(data){
document.getElementById("output").innerHTML = `<h2> ${(data.title)} ${(data.authors)}</h2>
<br>
<img src = 'http://books.google.com/books/content?id=" + ${(data.id)} +"&printsec=frontcover&img=1&zoom=1&source=gbs_api"><br>`
};
document.getElementById("searchBtn").addEventListener("click", getBooks);
//show output
