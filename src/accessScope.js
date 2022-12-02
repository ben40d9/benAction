import { AccessScope } from "@shopify/shopify-api/dist/rest-resources/2022-10/index.js";
import Shopify from "@shopify/shopify-api";
import fetch from "node-fetch";
import dotenv from "dotenv";

const {
  API_KEY,
  API_SECRET_KEY,
  SCOPES,
  SHOP,
  HOST,
  HOST_SCHEME,
  ACCESS_TOKEN,
} = process.env;

const getMeScopes = fetch(
  "https://59c130.myshopify.com/admin/api/2022-10/scopes.json",
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

console.log(getMeScopes);

// const test_session = await Shopify.Utils.loadCurrentSession(
//   getMeScopes,
//   response
// );

// await AccessScope.all({
//   session: test_session,
// });
