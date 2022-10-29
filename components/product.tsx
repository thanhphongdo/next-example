import { useRouter } from "next/router";
import { ProductModel } from "../models";

export default function Product(props: {
    product: ProductModel
}) {
    const { product } = props;
    const router = useRouter();

    function goToProductDetail(id: string) {
        router.push(`/product/${id}`);
    }

    return (
        <div key={product._id} className="group relative cursor-pointer" onClick={() => goToProductDetail(product._id)}>
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-bold text-red-500">
                        <a>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
        </div>
    );
}