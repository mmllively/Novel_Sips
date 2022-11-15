const editHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#book-title').value.trim();
    const text = document.querySelector('#book-text').value.trim();
    const id = document.querySelector("h2").id;

    if (title && description) {
        const response = await fetch(`/api/bookshelf/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
    if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to edit book.');
          }
        }
      };


document
.querySelector('#edit-btn')
.addEventListener('click', editHandler);