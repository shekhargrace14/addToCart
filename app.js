let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML =  document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProduct = [];
let carts = [];
iconCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})
const addDataToHTML = ()=>{
    listProductHTML.innerHTML = '';
    if(listProduct.length>0){
        listProduct.forEach(product=>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>

                <h2> ${product.title}</h2>
                <div class="price">${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
            `
            listProductHTML.appendChild(newProduct)
        })
    }
}

// target the image when user click on any card start

listProductHTML.addEventListener('click', (event)=>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id)
        addToCart(product_id);
    }
})
const addToCart = (product_id)=>{
    let positionThisProductInCart = carts.findIndex((value)=>value.product_id == product_id);  
    if(carts.length <=0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity:1
        })
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
}

const initApp = () =>{
    // get data from 
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        listProduct = data;
        addDataToHTML();
    })
}

initApp()
