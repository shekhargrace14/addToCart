fetch("https://fakestoreapi.com/products")
.then(response=> response.json())
.then(data=>{
    console.log(data)
    const productsRow = document.querySelector(".productsRow");
    data.map((value)=>{
        productsRow.insertAdjacentHTML("beforeend",`
        <div class="column card">
            <a href="./singleProductPage.html" id=${value.id}>
                <div class="column cardBody">
                    <div class="imgBox">
                        <img src=${value.image} alt="">
                    </div>
                    <div class="info">
                        <p class="productTitle">${value.title}</p>
                        <p class="description"> ${value.description}</p>
                        <div class="price d-flex ">
                            <p class="discount">$ ${value.price + 6}</p>
                            <p class="CurrentPrice">$ ${value.price}</p>
                        </div>
                        <div class="buttonDiv">
                            <button class="btn-primary">Add to cart</button>
                        </div>

                    </div>
                </div>
            </a>
        </div>
        `)
    })
})