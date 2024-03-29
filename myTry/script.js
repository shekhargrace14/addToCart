
let productsRow = document.querySelector(".productsRow");



async function getData(){
    let resolve = await fetch("https://fakestoreapi.com/products");
    let apiData = await resolve.json();
    console.log(apiData);
    showData(apiData)
    return apiData
}
getData()

async function showData(apiData){
    let data = await apiData;  
    console.log(data);
    data.map((value,index)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
                <div class="column cardBody" id=${value.id}>
                    <div class="utilityIcons d-flex direction-column">
                        <i class="fa-regular fa-heart"></i>
                        <i class=" onHover fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div class="imgBox">
                        <img src=${value.image} alt="">

                    </div>                   
                    <div class="info">
                        <p class="rating"> ${value.rating.rate} | ${value.rating.count} </p>
                        <h3 class="productTitle">${value.title}</h3>
                        
                        <div class="price d-flex ">
                        <p class="CurrentPrice">$ ${value.price.toFixed(2)}</p>
                        <p class="discount">$ ${(value.price+ 10).toFixed(2) }</p>
                        </div>
                    </div>
                    <div >
                   
                        <button class="btn-primary" id=${value.id}>Quick Shop</button>
                       

                    </div>

                </div>
        </div>
        `)
        // console.log(value.title)
    })

}


productsRow.addEventListener("click", (event)=>{
    let positionClick = event.target;
    if(positionClick.classlist.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id)
    }
})





























// let header = document.querySelector("header")


// fetch("https://fakestoreapi.com/products")
// .then(response=>response.json())
// .then(data=>{
//     // console.log(data);
//     let productsRow = document.querySelector(".productsRow");
//     data.map((value,index)=>{
//         productsRow.insertAdjacentHTML("beforeend",`
//         <div class="column card">
//                 <div class="column cardBody" id=${value.id}>
//                     <div class="utilityIcons d-flex direction-column">
//                         <i class="fa-regular fa-heart"></i>
//                         <i class=" onHover fa-solid fa-magnifying-glass"></i>
//                     </div>
//                     <div class="imgBox">
//                         <img src=${value.image} alt="">
//                     </div>                   
//                     <div class="info">
//                         <p class="rating"> ${value.rating.rate} | ${value.rating.count} </p>
//                         <h3 class="productTitle">${value.title}</h3>                
//                         <div class="price d-flex ">
//                         <p class="CurrentPrice">$ ${value.price.toFixed(2)}</p>
//                         <p class="discount">$ ${(value.price+ 10).toFixed(2) }</p>
//                         </div>
//                     </div>
//                     <div >
                   
//                         <button class="btn-primary" id=${value.id}>Quick Shop</button>
                       

//                     </div>

//                 </div>
//         </div>
//         `)
//         // console.log(value.title)
//     })
//     let card = document.querySelectorAll(".card")
//     console.log(card, "card");
//     card.forEach((item,index)=>{
//         item.addEventListener("click", ()=>{
//             let itemID = item.firstElementChild.id
//             console.log(itemID, "card has been clicked")
//             localStorage.setItem("singleProductPage",itemID)
//         })
//     })
// })