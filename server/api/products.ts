import { queryByCollection } from "~/server/lib/firestore";
const productsData = queryByCollection('products');

export default defineEventHandler(() => (productsData));
