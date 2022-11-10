import React from 'react';

function NovicePlanHeading({title , subtitle1 , subtitle2}) {
  return (
    <div>
      <h2 className="large-font text-secondary">{title}</h2>
      <article>
        <p className="small-font text-dark mt-[13px] ">{subtitle1 }</p>
        <p className="small-font text-dark mb-[14px] ">{subtitle2 }</p>
      </article>
    </div>
  );
}

export default NovicePlanHeading