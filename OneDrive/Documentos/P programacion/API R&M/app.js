function busq() {
    let app = document.getElementById('personaje')
    let input = document.getElementById('inp').value
    axios.get(`https://rickandmortyapi.com/api/character/${input}/`)
        .then((response) => {
            const character = response.data
            console.log(character)
            app.innerHTML = `
            <div class="caracteres">
            <img src=${character.image}>
            <h1>${character.name}</h1>
            <ul>
                <li>Estado= ${character.status}</li>
                <li>Especie= ${character.species}</li>
                <li>Genero= ${character.gender} </li>
                <li>Locacion= ${character.location.name}</li>
                <li>Tipo= ${character.type}</li>
               
                
            </ul>
            </div>
            `
        })
    .catch((error)=>console.log(error))
    
}

 function vp() {
    axios.get(`https://rickandmortyapi.com/api/character`)
        .then((response) => {
            const character = response.data
            console.log(character)
            
        })
        .catch((error) => console.log(error))
} 
