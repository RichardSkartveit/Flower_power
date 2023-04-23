const fullPageURL = apiBase + pagesBase;
const fullProductURL = apiBase + woocomerceBase + productBase;
const fullProductURLExample = "http://localhost/flower-power/wp-json/wc/v3/products"
 
 
 
 async function getProducts () {
    const response = await fetch(fullProductURL);

    const products = await response.json();

    return products
 }

 function createProductHTML(product) {
    const container = document.querySelector(".container")

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title= document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title):

    for (let i = 0; < product.images.length; i++) {
        const imgData = product.images[i];
        console.log (imgData);
        const img = document.createElement ("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }

    container.append(productContainer)

 }

 function createProductHTML (products) {
    for (let i = 0; i < products.length; i++){
        const product ? products[i];
        createProductHTML(product)
    }

 }

 async function main () {
    const products = await getProducts()
    createProductsHTML(products)
 }

 main()