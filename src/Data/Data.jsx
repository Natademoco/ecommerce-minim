import home1 from "../assets/images/home1.png";
import home2 from "../assets/images/home2.png";
import home3 from "../assets/images/home3.png";
import home4 from "../assets/images/home4.png";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";

import shopping1 from "../assets/images/shopping1.png";
import shopping2 from "../assets/images/shopping2.png";

import review1 from "../assets/images/review1.png";
import review2 from "../assets/images/review2.png";
import review3 from "../assets/images/review3.png";
import review4 from "../assets/images/review4.png";
import review5 from "../assets/images/review5.png";
import review6 from "../assets/images/review6.png";

import payment1 from "../assets/images/payment1.png";
import payment2 from "../assets/images/payment2.png";
import payment3 from "../assets/images/payment3.png";
import payment4 from "../assets/images/payment4.png";

export const homeImages = [
  {
    id: 1,
    img: home1,
    name: "Floor And Table Lamps",
    bgColor: 'bg-[#F1D3B3]',
    layout: 'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3',
    size: 'w-[16rem] md:w-[20rem] lg:w-full'
  },
  {
    id: 2,
    img: home2,
    name: "Round Shape Couchs",
    bgColor: 'bg-[#EDDBC7]',
    layout: '',
    size: 'md:w-[20rem] md:h-[20rem] object-cover'
  },
  {
    id: 3,
    img: home3,
    name: "Stylish Chairs",
    bgColor: 'bg-[#C7BCA1]',
    size: ''
  },
  {
    id: 4,
    img: home4,
    name: "Lightings",
    bgColor: 'bg-[#D0B8A8]',
    layout: 'md:row-start-2 md:row-end-3 md:col-start-3 md:col-end-5',
    size: 'w-[18rem] h-[18rem] object-cover'
  },
];

export const products = [
  {
    id: 1,
    img: product1,
    name: "Pica Ivory Boucle Ottoman",
    price: "$199",
    color: 'bg-[#d7ccc1]'
  },
  {
    id: 2,
    img: product2,
    name: "Maris White Marble Clock",
    price: "$59",
    color: 'bg-[#ededee]'
  },
  {
    id: 3,
    img: product3,
    name: "Poltrona Frau Ginger Side Chair",
    price: "$722",
    color: 'bg-[#eedfce]'
  },
  {
    id: 4,
    img: product4,
    name: "Kana Table Lamp",
    price: "$99",
    color: 'bg-[#f3eee5]'
  },
  {
    id: 5,
    img: product5,
    name: "Leap Black Table Lamp",
    price: "$79",
    color: 'bg-[#ded2c2]'
  },
  {
    id: 6,
    img: product6,
    name: "Gabriola Ivory Lounge Chair",
    price: "$499",
    color: 'bg-[#eee8e9]'
  },
  {
    id: 7,
    img: product7,
    name: "Bios 71 Inches Sideboard",
    price: "$999",
    color: 'bg-[#e3b481]'
  },
  {
    id: 8,
    img: product8,
    name: "Koepel Brass 18 Inches Table lamp",
    price: "$129",
    color: 'bg-[#dbdfd7]'
  },
];

export const shoppingImgs = [
  {
    id: 1,
    img: shopping1,

    title: "Life could be a brezze",
    text: "Out of the tropics and into your space. Natural cane pieces are the key to perma-vacation vibes.",
    btnText: "Shop Cane",
  },
  {
    id: 2,
    img: shopping2,
    title: "Smooth",
    text: "We have got a real soft spot for the velvet versions of these popular style.",
    btnText: "Shop Velvet",
  },
];

export const reviews = [
  {
    id: 1,
    reviewImg: review1,
    reviewer: "Jess S. from Raleigh, NC bought a",
    reviewProduct: "Lenia White Oak 2 Drawer Nightstand",
    review: "Easy to order and recieved very fast! We love Minim",
  },
  {
    id: 2,
    reviewImg: review2,
    reviewer: "David P. from Spring Valley,NY bought a",
    reviewProduct: "Rus White Counter Stool",
    review: "Excellent customer service,wonderful product.",
  },
  {
    id: 3,
    reviewImg: review3,
    reviewer: "Steven L. from Long Beach,NY bought a",
    reviewProduct: "Bios 53 Inches Coffee Table",
    review:
      "The furniture is so well made and looks incredible.Customer service is so easy to get hope of and helpful",
  },
  {
    id: 4,
    reviewImg: review4,
    reviewer: "Adam F. from Seattle,WA bought a",
    reviewProduct: "Basi Walnut King Bed Frame",
    review: "Clear communication,quick delivery,no complains",
  },
  {
    id: 5,
    reviewImg: review5,
    reviewer: "Denny D. from Stone Ridge,NY bought a",
    reviewProduct: "Nirvana Dakota Tan Lounge Chair",
    review: "Quality furniture.Great service and delivery",
  },
  {
    id: 6,
    reviewImg: review6,
    reviewer: "Stephen P. from Flower Mound,TX bought a",
    reviewProduct: "Amoeba Wild Walnut End Table",
    review:
      "Great looking table.Quick shipment with good packaging.Easy tool free assembly",
  },
];

export const menuDatas = [
  {
    id: 1,
    dataGroupName: "Sofas",
    dataItems: [
      "All Sofas",
      "Sectionals",
      "Sofa Beds",
      "Loveseats",
      "Ottomans",
      "Chaise Lounges",
    ],
  },
  {
    id: 2,
    dataGroupName: "Chairs",
    dataItems: [
      "All Chairs",
      "Lounge Chairs",
      "Dining Chairs",
      "Stools",
      "Office Chairs",
    ],
  },
  {
    id: 3,
    dataGroupName: "Decor",
    dataItems: ["All Decor", "Lighting", "Rugs", "Pillows", "Mirrors"],
  },
  {
    id: 4,
    dataGroupName: "Tables",
    dataItems: [
      "All Tables",
      "Dining Tables",
      "Coffee Tables",
      "Desks",
      "Side Tables",
    ],
  },
];

export const buyOnlineDatas = [
  {
    id: "1",
    title: "Digital Payment Options",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, saepe aperiam. Ex modi reiciendis facilis, incidunt nam vero a iusto impedit quisquam cumque ea delectus repellendus et odio aspernatur saepe explicabo! Vitae excepturi nisi facere nulla recusandae facilis qui iste quae corrupti alias cumque, sint nostrum totam, sunt, voluptatem commodi!",
    btnText: "Read More",
    img: [payment1, payment2, payment3, payment4],
  },
  {
    id: 2,
    title: "Delivery",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis sed quidem aliquam veritatis illo magni nemo minus temporibus saepe consequatur",
    btnText: "Read more about delivery policy",
  },
];
