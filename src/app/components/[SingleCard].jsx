// pages/[productId].js

import { useRouter } from 'next/router';
import { getUsers } from './Constant';
import { useContext } from 'react';
import { UserContext } from '../context/Contextapi';

const SingleCard = () => {
  const {SingleCardData} = useContext(UserContext)
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      <p>Product Data: {SingleCardData}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {setSingleCardData} = useContext(UserContext)
  const { params } = context;
  const { productId } = params;

  // Fetch data based on productId from your API or database
  // For demonstration purposes, using a mock API call here
  getUsers(`/products/${productId}`,setSingleCardData);

  // return {
  //   props: {
  //     productData,
  //   },
  // };
}

export default SingleCard;
