const con = require('../../config/connection');

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#book-title').value.trim();
    const description = document.querySelector('#book-description').value.trim();

     console.log(title);
     console.log(description);
     
    con.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO book (book_title, description) VALUES (title, description)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Book Added!");
      });
    });

  
    if (title && text) {
      const response = await fetch(`/api/bookshelf`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create book');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/bookshelf/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete book');
      }
    }
  };
  
  document
    .querySelector('.new-book-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.book-list')
    .addEventListener('click', delButtonHandler);
