// //objetos
// let mascota={
//     //propiedades --> características o atributos del objeto

//     nombre:"Felix",
//     tipo:"gato",
//     edad:4,

//     //Métodos --> Acciones o comportamientos del objeto
//     comer(){
//         console.log(`${mascota.nombre} tiene ${this.edad}`)
//     }
// }

// console.log(mascota.comer())

console.log(document.getElementById("box-dom"))

console.log(document.querySelector("h1")) //etiquetas
console.log(document.querySelector(".box-dom-box")) //Clases CSS
console.log(document.querySelector("#box-dom")) //Ids CSS

// // console.log(document.querySelectorAll("a")[1])}
// let enlaces=document.querySelectorAll("a").forEach((el)=>console.log(el))
// console.log(enlaces)
let enlace2=document.querySelectorAll("a")[1]

enlace2.setAttribute("href", "https://github.com/")

let boxDom= document.getElementById("box-dom")
boxDom.style.setProperty("color", "#0000FF")
boxDom.style.setProperty("width", "50%")
boxDom.style.setProperty("background-color", "#FF0000")

let title1=document.querySelector("h1")
title1.textContent="Este ya no es el título de JS"
box2.innerHTML=`
<h1>Mi titulo</h1>
<2>Mi subtitulo</h1>
`

let imgEjemplo=document.createElement("img")
imgEjemplo.src="https://upload.wikimedia.org/wikipedia/commons/3/39/Domestic_Goose.jpg"

box2.appendChild(imgEjemplo)
// imgPerro.remove()

let
