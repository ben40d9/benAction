import dotenv from "dotenv";
import fetch from "node-fetch";

const {
  API_KEY,
  API_SECRET_KEY,
  SCOPES,
  SHOP,
  HOST,
  HOST_SCHEME,
  ACCESS_TOKEN,
} = process.env;

const getWebhookCount = fetch(
  "https://59c130.myshopify.com/admin/api/2022-10/webhooks/count.json",
  {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": `${ACCESS_TOKEN}`,
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

console.log(getWebhookCount);

// const getMeShop = fetch(
//   "https://59c130.myshopify.com/admin/api/2022-10/shop.json",
//   {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Shopify-Access-Token": `${ACCESS_TOKEN}`,
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// console.log(getMeShop);
