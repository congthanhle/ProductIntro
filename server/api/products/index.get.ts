import { queryByCollection, query } from "~/server/lib/firestore";
import { Product } from "~/store/Products/state";

let dataProducts: Product[] = [];

const unsubscribe = query("products", (docs: any) => {
  dataProducts = docs;
});

export default defineEventHandler(() => dataProducts);
