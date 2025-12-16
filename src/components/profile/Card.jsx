import React from "react";

function Card() {
  return (
    <div className="flex flex-col items-ceter justify-center backdrop-blur-[4px] bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6  lg:w-[50%]   text-center ">
      <div className=" w-full p-2 flex items-center justify-center">
        <img
            
          src="image/rounak-image.png"
          alt="Profile"
          className="w-60 h-60  object-cover rounded-full mx-auto border-4 border-white/30 shadow-md"
        />
      </div>
      <div className="w-[100%] flex flex-col items-center justify-center">
        <h2 className="lg:text-[3rem] text-[1.5rem]  font-bold text-[#373739] mt-4">Rounak Kumar</h2>
        <p className="text-[#102036] font-bold lg:text-[1rem] sm:text-[0.5rem]">Software Developer</p>
      </div>
    </div>
  );
}

export default Card;
