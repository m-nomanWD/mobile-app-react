const menu = [
  // {
  //   id: 1,
  //   title: "buttermilk pancakes",
  //   category: "breakfast",
  //   price: 15.99,
  //   img: "./images/item-1.jpeg",
  //   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  // },
  // {
  //   id: 2,
  //   title: "diner double",
  //   category: "lunch",
  //   price: 13.99,
  //   img: "./images/item-2.jpeg",
  //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  // },
  // {
  //   id: 3,
  //   title: "godzilla milkshake",
  //   category: "shakes",
  //   price: 6.99,
  //   img: "./images/item-3.jpeg",
  //   desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  // },
  // {
  //   id: 4,
  //   title: "country delight",
  //   category: "breakfast",
  //   price: 20.99,
  //   img: "./images/item-4.jpeg",
  //   desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  // },
  // {
  //   id: 5,
  //   title: "egg attack",
  //   category: "lunch",
  //   price: 22.99,
  //   img: "./images/item-5.jpeg",
  //   desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  // },
  // {
  //   id: 6,
  //   title: "oreo dream",
  //   category: "shakes",
  //   price: 18.99,
  //   img: "./images/item-6.jpeg",
  //   desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  // },
  // {
  //   id: 7,
  //   title: "bacon overflow",
  //   category: "breakfast",
  //   price: 8.99,
  //   img: "./images/item-7.jpeg",
  //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  // },
  // {
  //   id: 8,
  //   title: "american classic",
  //   category: "lunch",
  //   price: 12.99,
  //   img: "./images/item-8.jpeg",
  //   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  // },
  // {
  //   id: 9,
  //   title: "quarantine buddy",
  //   category: "shakes",
  //   price: 16.99,
  //   img: "./images/item-9.jpeg",
  //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  // },

  {
    id: 1,
    title: "Google Pixel 5",
    category: "Google",
    price: 699,
    img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg",
    desc: "Take stunning photos with Night Sight and Portrait mode with the Google Pixel 5's dual-camera system.",
    link: "https://www.gsmarena.com/google_pixel_5-10386.php",
  },
  {
    id: 2,
    title: "Google Pixel 4a",
    category: "Google",
    price: 349,
    img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg",
    desc: "Get incredible photos, videos, and gaming on a 5.81-inch OLED display with the Google Pixel 4a.",
    link: "https://www.gsmarena.com/google_pixel_3-9256.php",
  },
  {
    id: 3,
    title: "Google Pixel 3",
    category: "Google",
    price: 799,
    img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3-.jpg",
    desc: "Experience the power of the Qualcomm Snapdragon 845 processor and a 5.5-inch OLED display with the Google Pixel 3.",
    link: "https://www.gsmarena.com/google_pixel_3-9256.php",
  },
  {
    id: 4,
    title: "Google Pixel 2 XL",
    category: "Google",
    price: 849,
    img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl2-.jpg",
    desc: "Enjoy a 6-inch P-OLED display and the power of the Qualcomm Snapdragon 835 processor with the Google Pixel 2 XL.",
    link: "https://www.gsmarena.com/google_pixel_2_xl-8720.php",
  },
  {
    id: 5,
    title: "OnePlus 9 Pro",
    category: "OnePlus",
    price: 969,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
    desc: "Experience the smoothness of a 120Hz display and the power of a Snapdragon 888 with the OnePlus 9 Pro.",
    link: "https://www.gsmarena.com/oneplus_9_pro-10806.php",
  },
  {
    id: 6,
    title: "OnePlus 8T",
    category: "OnePlus",
    price: 749,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8t.jpg",
    desc: "Enjoy a 6.55-inch Fluid AMOLED display and Warp Charge 65 with the OnePlus 8T.",
    link: "https://www.gsmarena.com/oneplus_8t-10420.php",
  },
  {
    id: 7,
    title: "OnePlus Nord",
    category: "OnePlus",
    price: 399,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord.jpg",
    desc: "Experience flagship-level performance with the Qualcomm Snapdragon 765G and 5G connectivity in the OnePlus Nord.",
    link: "https://www.gsmarena.com/oneplus_nord-10289.php",
  },
  {
    id: 8,
    title: "OnePlus 7T",
    category: "OnePlus",
    price: 599,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-.jpg",
    desc: "Get flagship performance with the Snapdragon 855+ and a 90Hz Fluid AMOLED display with the OnePlus 7T.",
    link: "https://www.gsmarena.com/oneplus_7t-9816.php",
  },
  {
    id: 9,
    title: "iPhone 12 Pro Max",
    category: "iPhone",
    price: 1099,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
    desc: "Experience the largest display ever on an iPhone with the 6.7-inch Super Retina XDR display on the iPhone 12 Pro Max.",
    link: "https://www.gsmarena.com/apple_iphone_12_pro_max-10237.php",
  },
  {
    id: 10,
    title: "iPhone 11",
    category: "iPhone",
    price: 599,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    desc: "Get the A13 Bionic chip and the advanced camera system with the iPhone 11.",
    link: "https://www.gsmarena.com/apple_iphone_11-9848.php",
  },
  {
    id: 11,
    title: "iPhone SE (2nd generation)",
    category: "iPhone",
    price: 399,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg",
    desc: "Enjoy the power of the A13 Bionic chip and the advanced camera system in a compact design with the iPhone SE (2nd generation).",
    link: "https://www.gsmarena.com/apple_iphone_se_(2022)-11410.php",
  },
  {
    id: 12,
    title: "Samsung Galaxy S21 Ultra",
    category: "Samsung",
    price: 1199,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg",
    desc: "Experience the ultimate in smartphone technology with the Samsung Galaxy S21 Ultra's 6.8-inch Dynamic AMOLED display and 5G connectivity.",
    link: "https://www.gsmarena.com/samsung_galaxy_s21_ultra_5g-10596.php",
  },
  {
    id: 13,
    title: "Samsung Galaxy Note20",
    category: "Samsung",
    price: 999,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-5g-r.jpg",
    desc: "Take your productivity to the next level with the Samsung Galaxy Note20's S Pen and 6.7-inch Dynamic AMOLED display.",
    link: "https://www.gsmarena.com/samsung_galaxy_note20-10338.php",
  },
  {
    id: 14,
    title: "Samsung Galaxy A52 5G",
    category: "Samsung",
    price: 499,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52-5g.jpg",
    desc: "Experience the speed of 5G connectivity and the power of a long-lasting battery with the Samsung Galaxy A52 5G.",
    link: "https://www.gsmarena.com/samsung_galaxy_a52_5g-10631.php",
  },
];
export default menu;
