display(products);

function display(Arr) {
  const productsSection = document.getElementById('products-container')
  productsSection.innerHTML = ""

  Arr.forEach(e => {
    if (e.name != '') {
      const card = document.createElement('article')
      card.setAttribute('class', 'column is-4 px-4')

      card.innerHTML = `
        <section class="column is-full">

        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${e.img}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">

                    <div class="media-content">
                        <p class="title is-4">${e.name}</p>
                        <p class="title is-6">$${e.precio}</p>
                        <p class="title is-7 descuento">${e.descuento}</p>

                    </div>
                </div>

                <div class="content">
                    ${e.description}
                <br>
                    <a href="/detalles/?name=${e.name}">ver detalle</a>
                </div>
            </div>
        </div>


    </section> `
      productsSection.append(card);
    }
  });
}



window.addEventListener("load", () => {

  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach(item => {
    item.addEventListener('click', function () {
      const idSelected = this.id;
      
      handleColor(idSelected);

      console.log("click :3")

    })
  })
})


 function handleColor (input) {

  const color = input;
  if (color != "gray") {
    blue
  
  const filteredArr = products.filter( e => {

    return(e.color.includes(color))

  } )


  display(filteredArr); 
  console.log(filteredArr);}
  else {
    display(products);
  }

 }
