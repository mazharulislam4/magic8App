import React from "react";
import Button from "../global/button";
import NovicePlanCard from "./novicePlanCard";
import NovicePlanHeading from "./novicePlanHeading";
function NovicePlan() {
  return (
    <div className="flex flex-col justify-center">
      <div className="my-[5px]  mt-[28px] gap-3 flex justify-center">
        <Button bg="#8646EE" color = '#fff' hoverbg= "#fff" texthover = "#000" >Plans</Button>
        <Button>Buy Mana</Button>
      </div>
      <div className="text-center mt-[17px]">
        <NovicePlanHeading
          title="Plans"
          subtitle1="Upgraded Plans Are recurring"
          subtitle2="Your plan will remain active until it is downgraded or cancelled"
        />
      </div>
      <div>
        <NovicePlanCard />
      </div>
    </div>
  );
}

export default NovicePlan;
