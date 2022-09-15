let cars = [
  {
    brand: "nexia",

    color: "black",
    
    price: "4000",
    
    img: "https://picsum.photos/id/12/200",
},
{
    brand: "matiz",

    color: "white",
    
    price: "4000",
    
    img: "https://picsum.photos/id/22/200",
},
{
    brand: "lacceti",

    color: "black",
    
    price: "8000",
    
    img: "https://picsum.photos/id/34/200",
},
{
    brand: "malibu",

    color: "black",
    
    price: "40000",
    
    img: "https://picsum.photos/id/42/200",
},
{
    brand: "Captiva",

    color: "green",
    
    price: "14000",
    
    img: "https://picsum.photos/id/52/200",
},
{
    brand: "malibu2",

    color: "black",
    
    price: "40000",
    
    img: "https://picsum.photos/id/62/200",
},
{
    brand: "trailbazer",

    color: "black",
    
    price: "50000",
    
    img: "https://picsum.photos/id/72/200",
},
{
    brand: "exuinx",

    color: "black",
    
    price: "45000",
    
    img: "https://picsum.photos/id/92/200",
},
{
    brand: "Damas",

    color: "black",
    
    price: "7000",
    
    img: "https://picsum.photos/id/122/200",
},
{
    brand: "Labo",

    color: "black",
    
    price: "6500",
    
    img: "https://picsum.photos/id/39/200",
},
];

let box = document.querySelector(".box");
cars.forEach((element) => {
  let newDiv = document.createElement("div");

  let h2 = document.createElement("h2");

  let p = document.createElement("p");

  let img = document.createElement("img");

  img.src =element.img;

  h2.textContent = element.brand;

  p.textContent =`Narxi: ${element.price}`;

  newDiv.append(img, h2, p);

  box.append(newDiv);
});
