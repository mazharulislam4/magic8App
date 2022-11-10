import React from "react";
import { Link } from "react-router-dom";



export default function NovicePlanCard() {
  return (
    <div className="flex flex-col md:flex-row  gap-9 justify-center xl:gap-[26px] items-center flex-wrap  ">
      {/* card 1 ----------------------------> Novice plan------------------------ */}
      <div className="w-[338px] min-h-[604px] bg-softDark rounded-md px-[30px] relative ">
        <div className="py-2">
          <h3 className="medium-font text-green pt-[30px] pb-[25px]">Novice Plan</h3>
          <p className="small-font text-secondary my-4">
            For beginner doing basic store & product research
          </p>
          <h4 className="my-8  medium-font">
            <span className="big-font text-green">$50</span>{" "}
            <span className="text-softDark medium-font"> /month</span>
          </h4>
          <button
            type="button"
            className="medium-font text-light bg-green py-[14px] block w-[100%] hover:bg-light hover:text-secondary transition rounded-md shadow-md "
          >
            <Link to="/dashboard">Choose plane</Link>
          </button>
        </div>
        <div className="box-footer">
          <h3 className="medium-font text-secondery my-[22px] ">
            This plan Includes:
          </h3>
          <ul className="list-none text-secondary flex flex-col gap-3 ">
            <li>Reveal Unlimited stores</li>
            <li>500 Mana Per Day</li>
            <li>Track Up Unlimited Stores</li>
          </ul>
        </div>
      </div>

      {/* card 1 ----------------------------> foreture plan------------------------ */}
      <div className="w-[338px] min-h-[604px] scale-105 bg-primary rounded-md px-[30px] relative ">
        <div className="py-2">
          <div className="absolute top-[-16px] left-[50%] translate-x-[-50%] text-center py-[8px] px-[1.63rem] rounded-sm inisital-font whitespace-nowrap  bg-[#FFC93E] ">
            <h5>Most Popular</h5>
          </div>
          <h3 className="medium-font text-light pt-[50px] bp-[30px] ">
            Fortune Teller Plan
          </h3>
          <p className="small-font text-light my-4">
            For beginner doing basic store & product research
          </p>
          <h4 className="my-8 text-light medium-font">
            <span className="big-font text-light">$50</span> /month
          </h4>
          <button
            type="button"
            className="medium-font text-primary bg-light py-[14px] block w-[100%] hover:bg-bubble-gum hover:text-light transition rounded-md shadow-md "
          >
            <Link to="/dashboard">Choose plane</Link>
          </button>
        </div>
        <div className="box-footer">
          <h3 className="medium-font text-light my-[22px] ">
            This plan Includes:
          </h3>
          <ul className="list-none text-light flex flex-col gap-3 ">
            <li>Reveal Unlimited stores</li>
            <li>500 Mana Per Day</li>
            <li>Track Up Unlimited Stores</li>
            <li>Store Clocking</li>
            <li>Advanced Search Filter</li>
            <li>See Store Owner Date</li>
          </ul>
        </div>
      </div>
      {/* card 1 ----------------------------> Oracle plan------------------------ */}
      <div className="w-[338px] min-h-[604px] bg-softDark rounded-md px-[28px] relative ">
        <div className="py-2">
          <h3 className="medium-font text-cyan pt-[30px] pb-[25px] ">
            Fortune Teller Plan
          </h3>
          <p className="small-font text-secondary my-3">
            For beginner doing basic store & product research
          </p>
          <h4 className="my-8 text-light medium-font">
            <span className="big-font text-cyan">$50</span>{" "}
            <span className="medium-font text-softDark">/month</span>
          </h4>
          <button
            type="button"
            className="medium-font text-light bg-cyan py-[14px] block w-[100%] hover:bg-light hover:text-secondary transition rounded-md shadow-md "
          >
            <Link to="/dashboard">Choose plane</Link>
          </button>
        </div>
        <div className="box-footer">
          <h3 className="medium-font text-sacondary my-[22px] ">
            This plan Includes:
          </h3>
          <ul className="list-none text-sacondary flex flex-col gap-3  ">
            <li>Reveal Unlimited stores</li>
            <li>500 Mana Per Day</li>
            <li>Track Up Unlimited Stores</li>
            <li>Store Clocking</li>
            <li>Advanced Search Filter</li>
            <li>See Store Owner Date</li>
            <li>Export Data as CSV</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
