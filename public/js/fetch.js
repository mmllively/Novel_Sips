//Basic Fetch by title or category
const booksTitleAPI = 'https://www.googleapis.com/books/v1/volumes?q=title:';
const booksByIdAPI = 'https://www.googleapis.com/books/v1/volumes/'

const key = 'AIzaSyB-PoP7pVCAWxrn4HnA-Gwt6H8konn7WqI';

let categories = [];

let bookTitle = "fifty Shades of Grey";

const getBook = async () => {
    let id;
    await fetch( booksTitleAPI + bookTitle)

        .then(function (response) {
        return response.json();
        })

        .then(function (response) {
            id = response.items[0].id;
            console.log('Book ID: ', id);
        });
        bookURL = booksByIdAPI + id + "?key=" + key ;

        const actualBook = async () => {
            await fetch(bookURL)
            .then(function (response) {
                return response.json();
                })
            .then(function (response){
                categories = response.volumeInfo.categories
                console.log(categories);
            })
        }

        actualBook();
};



// let categories = "fiction";

// function getCategory() {
//      fetch('https://www.googleapis.com/books/v1/volumes?q=subject:' + categories)

//         .then((response) => response.json())

//         .then((data) => console.log('Books by Category', data));
               
// };

// fetch(booksTitleAPI)
// .then(function (response) {
//     return response.json();
//     })

//     .then(function (response) {
//         console.log(response);
//     })

getBook();


// getCategory();


