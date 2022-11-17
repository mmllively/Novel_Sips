async function drinkDb(e){
    ee.preventDefault()
    document.location=("/drinks/"+ document.getElementById("input").value)
    
}

document.getElementById("submitBtn").addEventListener("click", drinkDb);
