import { Product } from "./models/product.model";
import { Query } from "./models/query.model";

export const getData = async (query: Query) => {
    const response = await fetch('https://ozon-be655-default-rtdb.europe-west1.firebasedatabase.app/goods.json');
    const json = await response.json();

    // if (query.category) {
    //     return json.filter((product: Product) => {
    //         return product.category === query.category;
    //     });
    // } else {
    //     return json;
    // }

    return json.filter((product: Product) => {
        if (query.category && product.category !== query.category ||
            query.search && !product.title.toLowerCase().includes(query.search.toLowerCase())) {
            return false;
        };
        return true;
    });
}