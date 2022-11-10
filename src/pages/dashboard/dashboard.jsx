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
  place-items: center stretch;

  @media (max-width: 1024px) {
    place-items: center ;
  }
`;


function Dashboard() {

  return (
    <div className="custom-container ">
      <div className="bg-softDark md:rounded-t-xl md:rounded-r-xl flex ">
        <div className="w-[100%] md:overflow-y-auto md:h-screen pb-[150px] pt-[20px] px-[30px]">
          {/*-------------------------------- Trending store --------------------------------*/}
          <div className='my-[50px]'>
            <h2 className="text-secondary large-font lg:mb-[17px] text-center lg:text-left ">
              Trending Stores
            </h2>
            <ProductCardGrid>
              {storeData &&
                storeData.map((data) => (
                  <StoreCard
                    content={{
                      ...data,
                    }}
                  />
                ))}
            </ProductCardGrid>
          </div>

          {/* -----------------------------Trending product------------------------------ */}
          <div className='my-[50px]'>
            <h2 className="text-secondary large-font lg:mb-[17px] text-center lg:text-left ">
              Trending Products
            </h2>
            <ProductCardGrid>
              {productData &&
                productData.map((data) => (
                  <ProductCard
                    content={{
                      ...data,
                    }}
                  />
                ))}
            </ProductCardGrid>
          </div>
        </div>
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