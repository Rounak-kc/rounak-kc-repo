import React from "react";
import { logos } from "./skillData";

function SkillCloud() {
  return (
    <div className="flex items-center justify-center bg-white py-2 sm:py-8 ">
      <div className="w-full px-6 lg:px-8 ">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          {logos.map((lg) => (
            <div
              key={lg.name}
              className="flex items-center justify-center flex-col toolkit"
            >
              {/* <div className="box">
                <p className="head">{lg.name}</p>
                <p className="para">{lg.detail}</p>
              </div> */}
              <div className="border border-gray-500 w-20 h-20 flex items-center justify-center overflow-hidden rounded-[50%] transition delay-100 duration-200 ease-in-out hover:scale-[1.1] hover:shadow-md">
                <img
                  alt={lg.name}
                  src={lg.img}
                  width={170}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <p className="text-center">{lg.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCloud;
