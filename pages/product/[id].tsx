import { NextPage } from "next";
import { useState } from "react";
import Layout from "../../components/layout";
import { ProductModel } from "../../models";
import { getProduct, getProductById } from "../../services";

const ProductDetail: NextPage<{ productDetail: ProductModel }> = ({ productDetail }) => {
    const [product, setProduct] = useState<ProductModel>(productDetail)
    return (
        <Layout>
            <div className="bg-white">
                <div className="pt-6">
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">{product?.name}</h1>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={product?.image}
                                    className="w-1/2 h-1/2 object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-4 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">Price: ${product?.price}</p>

                            <form className="mt-10">
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Quantity:</h3>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Buy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetail;

export async function getStaticPaths() {
    const products = await getProduct(1, 20);
    return {
        paths: products.map(product => ({ params: { id: product._id } })),
        fallback: true, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const productDetail = await getProductById(context.params.id)
    return {
        props: {
            productDetail
        }
    }
}