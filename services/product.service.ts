import { ProductModel } from '../models';
import { BaseAxios } from '../utils';

const axios = new BaseAxios(process.env.apiDomain);

export async function getProduct(page: number, perPage: number) {
    return await axios.get<Array<ProductModel>>(`product/list?page=${page}&perPage=${perPage}`);
}

export async function getProductById(id: string) {
    return await axios.get<ProductModel>(`product/id/${id}`);
}