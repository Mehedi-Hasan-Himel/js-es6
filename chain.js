const products = {
  count: 5000,
  data: [
    {
      id: 1,
      name: "Lenovo Laptop",
      price: 65000,
    },
    {
      id: 2,
      name: "MacBook Pro",
      price: 275000,
    },
  ],
};

// second product price.
const secondProductPrice = products.data[1].price;
// console.log(secondProductPrice);

const user = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 Uttor Side",
      second: "Poribag er goli",
      third: "No Dorai",
    },
    city: "Dhaka",
  },
};


// need street second value
const streetSecondValue = user.address.street.second
console.log(streetSecondValue);
