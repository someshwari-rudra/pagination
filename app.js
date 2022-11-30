
const ShowProductsContainer = document.getElementById("ShowProducts");
const pagination = document.getElementById("pagination");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const EcommerceData = [
  {
    id: 1,
    productName: "women's T-shirt",
    price: 2000,
    img: "images/women/women1.jpeg",
    category: "women",
  },
  {
    id: 2,
    productName: "women fancy shirt",
    price: 3500,
    img: "images/women/women2.jpeg",
    category: "women",
  },
  {
    id: 3,
    productName: "women's Hoodies ",
    price: 1800,
    img: "images/women/women3.png",
    category: "women",
  },
  {
    id: 4,
    productName: "women's office shirt",
    price: 2000,
    img: "images/women/women4.png",
    category: "women",
  },
  {
    id: 5,
    productName: "men's T-shirt",
    price: 2000,
    img: "images/mens/men1.jpeg",
    category: "men",
  },
  {
    id: 6,
    productName: "men's simple T-shirt",
    price: 1500,
    img: "images/mens/men2.jpeg",
    category: "men",
  },
  {
    id: 7,
    productName: "men's fancy T-shirt",
    price: 1000,
    img: "images/mens/men3.png",
    category: "men",
  },
  {
    id: 8,
    productName: "mens's T-shirt",
    price: 1000,
    img: "images/mens/men4.jpeg",
    category: "men",
  },
  {
    id: 9,
    productName: "kids's Traditional",
    price: 1400,
    img: "images/kids/kid1.png",
    category: "kids",
  },
  {
    id: 10,
    productName: "kids's Western",
    price: 4000,
    img: "images/kids/kid2.png",
    category: "kids",
  },
  {
    id: 11,
    productName: "kids's tradition",
    price: 2000,
    img: "images/kids/kid1.png",
    category: "kids",
  },
  {
    id: 12,
    productName: "kids's Western",
    price: 1000,
    img: "images/kids/kid2.png",
    category: "kids",
  },
  {
    id: 13,
    productName: "women's T-shirt",
    price: 2000,
    img: "images/women/women1.jpeg",
    category: "women",
  },
  {
    id: 14,
    productName: "kids's Western",
    price: 4000,
    img: "images/kids/kid2.png",
    category: "kids",
  },
  {
    id: 15,
    productName: "kids's tradition",
    price: 2000,
    img: "images/kids/kid1.png",
    category: "kids",
  },
  {
    id: 16,
    productName: "men's T-shirt",
    price: 2000,
    img: "images/mens/men1.jpeg",
    category: "men",
  },
];

let currentPage = 1;
let productsTodisplay = 4;

function displayProduts(allProducts, productContainer, productsCount, currentPage) {
  
  endIndex = productsCount * currentPage;
  startIndex = endIndex - productsCount;
  console.log("start",startIndex, "end",endIndex)
  let html= ""
	let paginationProducts = allProducts.slice(startIndex, endIndex);

  console.log("allProducts",allProducts)
  console.log("paginationProducts", paginationProducts)
  
  paginationProducts.forEach((ele) => {
    let i = 0;
    html += `
    <div class="col-12 col-md-6 col-xl-3">
            <div class="card my-2 p-2">
                <img src="${ele.img}" alt="" class="img-fluid">
                <div class="d-flex justify-content-between align-content-center">
                    <h4 class="card-title my-2">${ele.productName}</h4>
                    <p class="my-2">₹ ${ele.price}</p>
                </div>
                <button class="btn btn-warning">Add To cart</button>
            </div>
        </div>
    `;
  })
 productContainer.innerHTML = html
}

function setupPagination(allProducts, paginationContainer, productsCount) {
  console.log(allProducts.length);
  paginationContainer.innerHTML = "";
  totalBtns = Math.ceil(allProducts.length / productsCount);
  console.log("totalbtns  ", totalBtns)
 
  for (i = 1; i <= totalBtns; i++) {
  let btn =generateBtn(i)
    paginationContainer.append(btn)
  }
}

function generateBtn(page) {

  let button = document.createElement("button");
  button.innerHTML = page;
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.classList.add("me-1");
    	
	if (page === currentPage) {
    button.classList.add("btn-success");
  }
  button.addEventListener("click", () => {
    currentPage = page
    displayProduts(EcommerceData, ShowProductsContainer, productsTodisplay, currentPage);
    	let prevPage = document.querySelector("button.active");
      prevPage.classList.remove("active");
      button.classList.add("active");
  })
return button
}

function previousBtnfun() {
  if (currentPage > 1) {
    currentPage--;
    setupPagination(EcommerceData, pagination, productsTodisplay);
    displayProduts(EcommerceData,ShowProductsContainer,productsTodisplay,currentPage);
  } 
}
function nextBtnfun() {
    totalBtns = Math.ceil(EcommerceData.length / productsTodisplay);
  if (currentPage < totalBtns) {
    currentPage++;
    setupPagination(EcommerceData, pagination, productsTodisplay);
    displayProduts(
      EcommerceData,
      ShowProductsContainer,
      productsTodisplay,
      currentPage
    );
  }
}

previousBtn.addEventListener("click", previousBtnfun);  
nextBtn.addEventListener("click", nextBtnfun);  
displayProduts(EcommerceData,ShowProductsContainer,productsTodisplay,currentPage);
setupPagination(EcommerceData, pagination, productsTodisplay);





































// search on input keyup "filtered products" will be called
// function filterProducts (){
//     keyword = searchInput.value.toLowerCase()
//     filtered = EcommerceData.filter((product)=>{
//         product =product.productName.toLowerCase()
//         return(product.indexOf(keyword) > -1)
//     })
//     showProducts(filtered)
// }
// searchInput.addEventListener("keyup", filterProducts)


// //filter based on dropdown
// function filterBasedOnDropdown(category){
//     if(category === "All"){
//         showProducts(EcommerceData)
//         return
//       }
//    filtered = EcommerceData.filter((ele)=>{
//     return(ele.category === category)
//     })
//     showProducts(filtered)
// }







