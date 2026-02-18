import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return "";
  }
}

class Clothing extends Product {
  sizeChartLink;

  // if no constructor is created in child class by default parent constructor runs
  constructor(productDetails) {
    //super call the constructor of the parent class.
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    //this overrides the parent method of same name- method overriding
    // super.extraInfoHTML(); // calls the parent method if needed
    return `
      <a href="${this.sizeChartLink}" target="_blank">Size chart</a>
    `;
  }
}

export let products = [];

export function loadProductsFetch() {
  const promise = fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((productsData) => {
      products = productsData.map((productDetails) => {
        if (productDetails.type === "clothing") {
          return new Clothing(productDetails);
        }
        return new Product(productDetails);
      });
      console.log("Load Products");
    })
    .catch((error) => {
      console.log("Unexpected Error. Please try again later.");
    });
  return promise;
}

// still being used to render the products grid in amazon.js
export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log("Load Products");
    fun();
  });

  xhr.addEventListener("error", (error) => {
    console.log("Unexpected Error. Please try again later.");
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
