const editHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('.commentPost').value.trim();
  const id = document.querySelector("h2").id;

  if (content) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to edit comment.');
    }
  }
};


document
  .querySelector('#edit-btn')
  .addEventListener('click', editHandler);