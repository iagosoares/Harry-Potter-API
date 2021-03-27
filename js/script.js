var minhaLista = document.getElementById('lista')     
var lista = []

function FunctionName(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(json => {

        

        for(let i=0; i<= 22; i++){
            lista.push(json[i])
        } 
        
        for(var aux of lista){
            var element = document.createElement('div')
            element.classList.add('card')
            var div = document.createElement('div')
            var texto = document.createElement('p')
            var casa = document.createElement('span')
            texto.innerHTML = `${aux.name}`
            if(aux.house == 'Slytherin'){

                element.classList.remove('car')
                element.classList.add('slytherin')


            }
            casa.innerText = `${aux.house}`


              
            var image = document.createElement('img')
            image.src = `${aux.image}`            
            minhaLista.appendChild(element)
            div.appendChild(texto)
            div.appendChild(casa)
            div.classList.add('divtext')            
            element.appendChild(div)
            element.appendChild(image) 
                   

        
    }

    })  
}

FunctionName()

