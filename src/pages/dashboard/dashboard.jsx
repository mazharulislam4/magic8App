import { motion, useWillChange } from "framer-motion";
import React from 'react';
import styled from 'styled-components';
import OrderedCustomers from '../../components/dashboard/orderedCustomers';
import ProductCard from '../../components/dashboard/productCard';
import StoreCard from '../../components/dashboard/storeCard';
import customersData from './customersData';
import { productData, storeData } from './productData';
// styled component 

const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 30px;
  grid-column: 20px;
  place-items: center ;

  @media (max-width: 1024px) {
    place-items: center ;
  }
`;


function Dashboard() {
 const opacityAni = useWillChange();


  return (
    <div className="custom-container ">
      <div className="wrapperContainer bg-softDark flex  px-[8px]">
        <motion.div
          className="wrapper max-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ opacityAni }}
        >
          {/*-------------------------------- Trending store --------------------------------*/}
          <div className="my-[50px] ">
            <h2 className="text-secondary large-font lg:mb-[17px] md:px-11 w-[100%] text-center lg:text-left ">
              Trending Stores
            </h2>
            <ProductCardGrid>
              {storeData &&
                storeData.map((data) => (
                  <StoreCard
                    key={data.id}
                    content={{
                      ...data,
                    }}
                  />
                ))}
            </ProductCardGrid>
          </div>

          {/* -----------------------------Trending product------------------------------ */}
          <div className="my-[50px]">
            <h2 className="text-secondary large-font lg:mb-[17px] md:px-11 w-[100%] text-center lg:text-left ">
              Trending Products
            </h2>
            <ProductCardGrid>
              {productData &&
                productData.map((data) => (
                  <ProductCard
                    key={data.id}
                    content={{
                      ...data,
                    }}
                  />
                ))}
            </ProductCardGrid>
          </div>
        </motion.div>
        {/*--------------------- --------------right sidebar layout -------------------------------- */}
        <div className="2xl:w-[500px] border-l-2 border-[#E4E4E4]  2xl:block hidden ">
          {/* container  */}
          <div className="md:overflow-y-auto md:h-screen px-[12px]  ">
            <h2 className="medium-font text-secondary pt-4 text-center md:text-left">
              Global Order Feed
            </h2>
            {customersData
              ? customersData.map((data) => {
                  return (
                    <OrderedCustomers
                      key={data.id}
                      content={{
                        title: data.title,
                        fullName: data.user_name,
                        price: data.price,
                        xs: data?.xs,
                        avatar: data.avatar,
                      }}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard