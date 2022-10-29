import React from "react";

export default function Appliance({ src, text, idx, handleClick }) {
  return (
    <div className="flex flex-col items-center mx-[13px] my-4 cursor-pointer" onClick={() => handleClick(idx)}>
      <div className="h-[105px] w-[105px] bg-[#eef4f7fb] flex justify-center items-center">
        <img className="appliance-image w-24" src={src} alt={`${text} ${idx + 1}`} draggable={false} />
      </div>
      <div className="appliance-text pt-1 text-black text-[12px] font-semibold">{text}</div>
    </div>
  );
}
