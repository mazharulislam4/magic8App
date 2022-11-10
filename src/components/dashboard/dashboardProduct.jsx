import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
function DashboardProduct({content}) {
  return (
      <div className="w-[18.18rem] px-[21px] py-[14px]  border-2 rounded ">
        {/* content body */}
        <div className="flex justify-between  ">
          <div>
            <p className="text-[#49446D] font-normal ">Search Volume</p>
            <h3 className="text-[#201C40] font-bold my-[4px]">
              {content.search}
            </h3>
            <p className="text-[#00AF27] flex gap-2 items-center">
              <span>
                <FiArrowUpRight />
              </span>
              <span>+{content.searchAvg}%</span>
            </p>
            <p className="text-[#49446D] flex gap-2 items-center mt-[14px]">
              <span>
                <BsFillBarChartFill />
              </span>
              <span>{content.tracking}Other Tracking</span>
            </p>
          </div>
          <div>
            <p className="text-[#49446D] font-normal ">Revenue</p>
            <h3 className="text-[#201C40] font-bold my-[4px]">
              ${content.revenue}
            </h3>
            <p className="text-[#00AF27] flex gap-2 items-center">
              <span>
                <FiArrowUpRight />
              </span>
              <span>+{content.revenueAvg}%</span>
            </p>
          </div>
        </div>
        <h3 className="text-center text-[#201C40] font-bold my-[29px]">
          {content.mana} Mana
        </h3>
        <button
          type="button"
          className="border-2 py-[11px] text-center block w-[100%] text-[#51459F] hover:bg-[#51459F]  hover:text-[#fff]   rounded-md duration-300 "
        >
          Reveal This Stores
        </button>
      </div>
  );
}

export default DashboardProduct;
