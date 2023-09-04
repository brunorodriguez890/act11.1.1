document.addEventListener("DOMContentLoaded",()=>{
    const boton = document.getElementById("boton");
    const chiste = document.getElementById("chiste");
    boton.addEventListener("click",()=>{
        fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            chiste.innerHTML=data.setup + "<br>" + data.delivery
        })
        .catch(error => console.log(error));
    })
  
})