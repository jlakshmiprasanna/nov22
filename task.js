const api1="https://ecommerce-api3.p.rapidapi.com/mobiles";
const options1={
    method:"GET",
    headers:{
        "x-rapidapi-key":"34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
}


async function getMobiles() {
  let data = await fetch(api1, options1);
  let res = await data.json();
  console.log(res);
  let cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  cardsContainer.style.display = "flex";
  cardsContainer.style.flexWrap = "wrap";
  cardsContainer.style.gap = "20px";

  res.forEach((x) => {
    let card = document.createElement("div");
    //     cardsContainer.innerHTML +=
    //     `
    // <div>
    // <img src="${x.Image}"/>
    // <p>${x.Brand}</p>
    // <span>${x.Price}</span>
    // <button>AddToCart</button>
    // </div>
    // `
    card.innerHTML = `
    <img src="${x.Image}"/>
    <p>${x.Brand}</p>
    <span>${x.Price}</span>
    <button>AddToCart</button>
    `;
    cardsContainer.appendChild(card);
  });
}
// getMobiles()

const api2 = "https://ecommerce-api3.p.rapidapi.com/laptops";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getLaptops() {

  let data = await fetch(api2, options2);
  let res = await data.json();
  console.log(res);
  let cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  cardsContainer.style.display = "flex";
  cardsContainer.style.flexWrap = "wrap";
  cardsContainer.style.gap = "20px";

  res.forEach((x) => {
    let card = document.createElement("div");
    
    card.innerHTML = `
    <img src="${x.Image}"/>
    <p>${x.Brand}</p>
    <span>${x.Price}</span>
    <button>AddToCart</button>
    `;
    cardsContainer.appendChild(card);
  });
}
// getLaptops()

const api3 = "https://ecommerce-api3.p.rapidapi.com/kidsfootwear";
const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getKidsFootwear() {
  let data = await fetch(api3, options3);
  let res = await data.json();
  console.log(res);
  let cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";
  cardsContainer.style.display = "flex";
  cardsContainer.style.flexWrap = "wrap";
  cardsContainer.style.gap = "20px";

  res.forEach((x) => {
    let card = document.createElement("div");
    //     cardsContainer.innerHTML +=
    //     `
    // <div>
    // <img src="${x.Image}"/>
    // <p>${x.Brand}</p>
    // <span>${x.Price}</span>
    // <button>AddToCart</button>
    // </div>
    // `
    card.innerHTML = `
    <img src="${x.Image}"/>
    <p>${x.Brand}</p>
    <span>${x.Price}</span>
    <button>AddToCart</button>
    `;
    cardsContainer.appendChild(card);
  });
}


const apiDell = "https://ecommerce-api3.p.rapidapi.com/laptops";
const optionsDell = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getDell() {

  try {
    let data = await fetch(apiDell, optionsDell);
    let res = await data.json();
    console.log(res);
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    cardsContainer.style.display = "flex";
    cardsContainer.style.flexWrap = "wrap";
    cardsContainer.style.gap = "20px";

    const filteredData = res.filter(
      (x) =>
        x.Brand.includes("DEll") || x.Brand.includes("HP")
    );
    
    console.log(filteredData);

    filteredData.forEach((x) => {
      let card = document.createElement("div");
     
      card.innerHTML = `
    <img src="${x.Image}"/>
    <p>${x.Brand}</p>
    <span>${x.Price}</span>
    <button>AddToCart</button>
    `;
      cardsContainer.appendChild(card);
    });
  } catch (err) {
    alert(err);
  }
}

const apiRam = "https://ecommerce-api3.p.rapidapi.com/laptops";
const optionsRam = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getRAM() {

  try {
    let data = await fetch(apiRam, optionsRam);
    let res = await data.json();
    console.log(res);
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    cardsContainer.style.display = "flex";
    cardsContainer.style.flexWrap = "wrap";
    cardsContainer.style.gap = "20px";

    const filteredData = res.filter(
      (x) =>
        (x.Brand.includes("i5") || x.Brand.includes("i7")) &&
        x.Brand.includes("DELL") &&
        x.Brand.includes("12th Gen")
    );
    
    console.log(filteredData);

    filteredData.forEach((x) => {
      let card = document.createElement("div");
      
      card.innerHTML = `
    <img src="${x.Image}"/>
    <p>${x.Brand}</p>
    <span>${x.Price}</span>
    <button>AddToCart</button>
    `;
      cardsContainer.appendChild(card);
    });
  } catch (err) {
    alert(err);
  }
}