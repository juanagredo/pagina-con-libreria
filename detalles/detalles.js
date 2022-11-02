
console.log(new URLSearchParams(window.location.search).get("name"));


let producto;
const nameQueryParam =new URLSearchParams(window.location.search).get("name");

SearchProduct();

renderProduct();

function SearchProduct() {
    producto = products.find( e =>
        e.name === nameQueryParam
    
    );

    console.log(producto);
}


function renderProduct() {
    
    const tittle = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    const imagen = document.getElementById('imagen_');
    const precio = document.getElementById('precio');
    const descuento = document.getElementById('descuento');


    tittle.textContent = producto.name;
    descripcion.textContent = producto.description;
    precio.textContent = producto.precio;
    descuento.textContent = producto.descuento;

    

    imagen.setAttribute('src', producto.img);


}