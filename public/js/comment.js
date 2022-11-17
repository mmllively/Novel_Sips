
const commentFormHandler = async (e) =>{
e.preventDefault() 
const content = document.getElementById("content-description").value
console.log(content);
const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
        content,
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
if (response.ok) {
    document.location.reload();
} else {
    response.json()
}

};


const commentEditHandler = async (e) =>{
    e.preventDefault() 
    const content = document.getElementById("edit-description").value
    console.log(content);
    const response = await fetch('/api/comments', {
        method: 'PUT',
        body: 
            content,

        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        response.json()
    }
    
    }


    const delButtonHandler = async (event) => {
        console.log("deleting")
        if (event.target.hasAttribute('deleteBtn')) {
          const id = event.target.getAttribute('deleteBtn');
      
          const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete comment');
          }
        }
      };

    
//content create button
const contentButton = document.getElementById("contentBtn")

contentButton.addEventListener('click',commentFormHandler)


//edit button
const editButton = document.getElementById("edit-btn")
editButton.addEventListener('click',commentEditHandler)


// delete button
const deleteButton = document.getElementsByClassName("deleteBtn")
deleteButton.addEventListener('click',delButtonHandler)




