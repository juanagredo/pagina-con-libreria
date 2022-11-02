const products = [
  
    {
        name: '',
        img: '',
        description: '', 
        precio: '',
        descuento: '',
        color: '',
        character: '',
        type: '', // clothe, bags, accesories, virtual product, toys/merch, other
        size: '',

    },


    
    {
        name: 'dizfraz de finn el humano',
        img: 'https://i.pinimg.com/564x/be/c5/66/bec5660bbbe7383eef0feaa27bec4e80.jpg',
        description: 'Traje unisex completo de Finn el humano. Ideal para vestir como el mejor aventurero de todo Ooo.', 
        precio: '89.900',
        descuento: '0%',
        color: 'blue',
        character: 'finn',
        type: 'Ropa', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'L',

    },    {
        name: 'Bmo Taza de ceramica',
        img: 'https://i.pinimg.com/564x/7d/95/b2/7d95b22abd7e342f49b2515e92d44e31.jpg',
        description: 'Una tácita de cerámica con temática de Bmo. No apta para jugar con ella a menos que no te importe romperla.', 
        precio: '25.000',
        descuento: '0%',
        color: 'green',
        character: 'Bmo',
        type: 'Mercancia', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'No aplica',

    },    {
        name: 'Lemon troste',
        img: 'https://i.pinimg.com/564x/1e/9c/58/1e9c58fc0673b849731d3a2cb480c794.jpg',
        description: 'Al igual que yo, este peluche tamaño persona de lemon agrio no le encuentra sentido a la vida', 
        precio: 'Invaluable, la realizacion espiritual no tiene precio',
        descuento: '25%',
        color: 'gris',
        character: 'lemon agrio',
        type: 'Mercancia', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'XXL',

    },    {
        name: 'Peluche del rey lombriz',
        img: 'https://i.pinimg.com/564x/fa/e4/56/fae4569a4949ced735611dbf4976a4c5.jpg',
        description: 'Es una lombriz y la ve un rey. ¿que mas quieres?', 
        precio: '34.900',
        descuento: '15%',
        color: 'green',
        character: 'Rey lombriz',
        type: 'Mercancia', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'S',

    },    {
        name: 'Bmo mochila tela peluche',
        img: 'https://i.pinimg.com/564x/a6/94/59/a69459496613a2e8c01ab17bae999481.jpg',
        description: 'La unica y verdadera mochelita fachera de uno de los mejores personajes de una de las mejores series de cartoon network', 
        precio: '109.900',
        descuento: '10%',
        color: 'Blue',
        character: 'Bmo',
        type: 'Bolsos', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'M',

    },    {
        name: 'Bolso de Mentita',
        img: 'https://i.pinimg.com/564x/52/f8/b4/52f8b46485ae39f6ab18fcabfa312938.jpg',
        description: 'La magia negra se vende por separado de este bolsito fachero de Mentita. No nos hacemos responsables de cualquier pacto satanico elaborado por este articulo', 
        precio: '109.900',
        descuento: '0%',
        color: 'white',
        character: 'Mentita',
        type: 'Bolsos', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'M',

    },    {
        name: 'gorritos de finn y Jake',
        img: 'https://i.pinimg.com/564x/da/f4/97/daf49799cbe3b1e8597b29d449591a38.jpg',
        description: 'Elige entrevel mitico gorrito de finn el humano o el de su fiel amigo y hermano jake el perro y preparate para la aventura', 
        precio: '45.000',
        descuento: '0%',
        color: 'yellow',
        character: 'Jake',
        type: 'Ropa', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'M',

    },    {
        name: 'El mismisimo finn de chiquito',
        img: 'https://i.pinimg.com/564x/bd/bc/97/bdbc97a23bd1c6ce1664ea0b6386c6d8.jpg',
        description: 'Es muy tierno pero no esta a la venta, eso seria muy ilegal solo disfruta lo cute que se ve', 
        precio: 'Invaluable',
        descuento: '0%',
        color: 'blue',
        character: 'Finn',
        type: 'Other', // clothe, bags, accesories, virtual product, toys/merch, Other
        size: 'XXS',

    },    {
        name: 'El mismisimo Jake el cachorrito',
        img: 'https://i.pinimg.com/564x/df/51/ce/df51ce88ef5c7649954cd62c631710e4.jpg',
        description: 'De lo chiquito que esta aun no se puede estirar, Pero, tambien esta muy cute', 
        precio: 'Invaluable',
        descuento: '0%',
        color: 'yellow',
        character: 'Jake',
        type: 'Other', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'XXS',

    },    {
        name: 'Dulce princesa Chiquita',
        img: 'https://i.pinimg.com/564x/8a/0e/82/8a0e826af7a80dca54b317a5188b783c.jpg',
        description: 'Muñequita inspirida en la autoritarista favorita de todos, mejor conocida por ser pareja de marceline', 
        precio: '25.000',
        descuento: '60%',
        color: 'pink',
        character: 'Bubblegum',
        type: 'Toy', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'S',

    },    {
        name: 'Dulce princesa y su dulce subdito',
        img: 'https://i.pinimg.com/564x/02/e2/da/02e2daf85ef37f3aa3aee8eed556b368.jpg',
        description: 'Cosplay de la dulce princesa. Incluye un mentita des-satanizado para que te ayude a llevar tus objetos mas importantes', 
        precio: '500.000',
        descuento: '0%',
        color: 'pink',
        character: 'Bubblegum',
        type: 'Ropa', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'S',

    },    {
        name: 'Amor de padre',
        img: 'https://i.pinimg.com/564x/e7/f5/e6/e7f5e6fc66f4f52d66b4ee78fdc6b053.jpg',
        description: 'Simplemente Simon god. Simon cuido de nuestra princesa de la noche favorita marceline cuando esta era niña esto durante los primeros años tras la gran guerra de los champiñones', 
        precio: '990.000',
        descuento: '15%',
        color: 'blue',
        character: 'Ice king',
        type: 'Other', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'M',

    },    {
        name: 'Simon coronado',
        img: 'https://i.pinimg.com/564x/79/91/2d/79912df5c8d719f4da10012ebf066517.jpg',
        description: 'simon con la corana ya a punto de perder el control sore si mismo', 
        precio: '250.000',
        descuento: '45%',
        color: 'blue',
        character: 'Ice king',
        type: 'Other', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'M',

    },    {
        name: 'El rey Icecream',
        img: 'https://i.pinimg.com/564x/e1/0b/53/e10b53e6d0de2e032dda4eb2cc2864c9.jpg',
        description: 'Peluchito del rey helado. Just enjoy it', 
        precio: '25.000',
        descuento: '0%',
        color: 'blue',
        character: 'Ice king',
        type: 'Mercancia', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'S',

    },    {
        name: 'El ser mas malvado conocido y por conocer',
        img: 'https://i.pinimg.com/564x/f3/89/2a/f3892ad2eb9b5957a963a8d4fc56fb58.jpg',
        description: 'gunter', 
        precio: '1.000.000',
        descuento: '75%',
        color: 'white',
        character: 'Ice king',
        type: 'Other', // clothe, bags, accesories, virtual product, toys/merch, other
        size: 'XS',

    }   


];

