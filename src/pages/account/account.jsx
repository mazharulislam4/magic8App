import React from 'react';
import NovicePlan from '../../components/novice plan/novicePlan';
export default function Account() {
  return (
    <div className="custom-container">
      <div className="bg-light md:rounded-t-xl md:rounded-r-xl ">
        <div className="w-[100%] md:overflow-y-auto md:h-screen pb-[150px] pt-[20px]">
          <NovicePlan />
        </div>
      </div>
    </div>
  );
}
