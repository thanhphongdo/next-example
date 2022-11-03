import Layout from '../components/layout'
import { ProductModel } from '../models'
import { getProduct } from '../services'
import Product from '../components/product';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Home: NextPage<{ productList: Array<ProductModel> }> = ({ productList }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(productList || []);

  useEffect(() => {
    if (page > 1) {
      getProduct(page, 20).then(productList => {
        setProducts([...products, ...productList])
      })
    }
  }, [page]);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-4 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
          <div className='flex justify-center py-8'>
            <span className='cursor-pointer' onClick={() => setPage(page + 1)}>Load more...</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {

  const productList = await getProduct(1, 20);

  return {
    props: {
      productList
    }
  }
}