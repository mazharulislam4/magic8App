import React from 'react';
import DashboardProduct from '../../components/dashboard/dashboardProduct';
import OrderedCustomers from '../../components/dashboard/orderedCustomers';
import customersData from './customersData';
import productData from './productData';
function Dashboard() {

  return (
    <div className="custom-container ">
      <div className="bg-softDark md:rounded-t-xl md:rounded-r-xl flex ">
        <div className="w-[100%] md:overflow-y-auto md:h-screen pb-[150px] pt-[20px]">
          <section className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 place-items-center gap-8">
            {productData &&
              productData.map((data) => (
                <DashboardProduct
                  content={{
                    ...data,
                  }}
                />
              ))}
          </section>
        </div>
{/* right sidebar layout  */}
        <div className="2xl:w-[500px] border-l-2 border-[#E4E4E4]  2xl:block hidden ">
          {/* container  */}
          <div className="md:overflow-y-auto md:h-screen px-[12px]  ">
            <h2 className="medium-font text-secondary pt-4">
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