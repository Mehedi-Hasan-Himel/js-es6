const products = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    color: "Natural Titanium",
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    color: "Titanium Gray",
  },
  {
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 999,
    color: "Bay Blue",
  },
  {
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    color: "Silky Black",
  },
  {
    name: "Xperia 1 V",
    brand: "Sony",
    price: 1199,
    color: "Khaki Green",
  },
];

// const result = products.map((product) => product.brand);
// console.log(result);

// products.forEach((product) => console.log(product.name));

// const result = products.filter((product) => product.name == "Pixel 8 Pro");
// console.log(result);


const result = products.find(product => product.name === "Galaxy S24 Ultra");
console.log(result);