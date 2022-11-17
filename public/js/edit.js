
const commentEditHandler = async (e) =>{
  e.preventDefault(); 
  const content = document.getElementById("edit-description").value
  const id = document.querySelector("h2").id;

  if(content){
  const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          content,
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  if (response.ok) {
      document.location.replace('/profile');
  } else {
      alert('Failed to edit post.');
  }
}
  }

//edit button
const editButton = document.getElementById("edit-btn")
editButton.addEventListener('click',commentEditHandler)