import { Items, getAllItemstype } from "@types/eCommerceTypes";
import axios from "axios";
export async function getAllItems({ sizeItems = 20, page = 0 }: getAllItemstype) {
    // let Pagination = 1;
    let Data: Items[] =
        await axios.get(`${import.meta.env.VITE_BaseUrl}/api/items?page=${page}&size=${sizeItems}`)
            .then((res) => {
                return res.data;
                //   setData(res.data);
                // Pagination = Math.ceil(res.headers.get("x-total-count") / sizeItems);
            })
            .catch((err) => console.log(err));

    return Data
}
