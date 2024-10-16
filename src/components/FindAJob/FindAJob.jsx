import React from "react";
import BoxFindJob from "../BoxFindJob/BoxFindJob";

export default function FindAJob() {
  return (
   <div className="px-[300px]  bg-blur py-20">
      <div className="flex gap-12  justify-between items-center">
        <div>
          <div className="text-3xl font-medium tracking-wider w-80">
            Find a job that suits your interest & skills.
          </div>
          <div className="tracking-tighter text-xl w-96">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
          <div className="flex gap-4 items-center ">
            <input
              className="p-2 border border-sky-100"
              placeholder="Job tittle, Keyword..."
            />
            <div>
              <input
                className="p-2 border border-sky-100"
                placeholder="Your Location"
              />
            </div>
            <div className="p-4 text-white bg-blue-600">Find Job</div>
          </div>
          <div>
            <span>
              Suggestion: Designer,{" "}
              <span className="text-blue-400">Digital Marketing</span>, Video,
              Animation.
            </span>
          </div>
          
        </div>
        <div>
            <img
              className="w-492 object-cover"
              src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
            />
          </div>
          
      </div>

      <div className="flex gap-5 justify-start ">
        <BoxFindJob so={"1,75,324"} chu={"Live Job"} />
        <BoxFindJob so={"1,75,324"} chu={"Live Job"} />
        <BoxFindJob so={"1,75,324"} chu={"Live Job"} />
        <BoxFindJob so={"1,75,324"} chu={"Live Job"} />
      </div>
    </div>
  );
}
