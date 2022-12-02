import Shopify from "@shopify/shopify-api";

const session = await Shopify.Utils.loadCurrentSession(req, res);
const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
const response = client.get({ path: "59c130" });
