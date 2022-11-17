
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


    const delButtonHandler = async (event) => {
        
        if (event.target.hasAttribute('deleteBtn')) {
          const id = event.target.getAttribute('data-delete');
          console.log("Deleting", id) 
          const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete project');
          }
        }
      };






    
//content create button
const contentButton = document.getElementById("contentBtn")

contentButton.addEventListener('click',commentFormHandler)


//edit button
const editButton = document.getElementById("edit-btn")
editButton.addEventListener('click',commentEditHandler)


//delete button
const deleteButtons = document.getElementsByClassName("deleteBtn")

 for(var i=0; i<deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click",async (event) => {
        console.log('deleted')
        if (event.target.classList.contains('deleteBtn')) {
          const id = event.target.dataset.del;
          console.log("Deleting", id) 
          const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete project');
          }
        }
      })

 }
 


// document
//   .querySelector('#deleteBtn')
//   .addEventListener('click', delButtonHandler);


