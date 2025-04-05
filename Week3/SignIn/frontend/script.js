document.getElementById("form").addEventListener('submit',async function(event){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let response = await fetch("http://localhost:3000/signIn",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
    });
    let data = await response.json();
    console.log(data);
})