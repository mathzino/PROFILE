import bg from "../../Union.png";
import companyprofile from "../../ugm.png";
import kantin from "../../kantingkejujuran.png";
import AOS from "aos";
import { useEffect } from "react";
let Intro = () => {
  return (
    <div className="flex px-32 md:px-8 xl:flex-col  ">
      <div className="absolute right-0 md:top-16  ">
        <img src={bg} alt="tes" className="h-full w-full" />
      </div>
      {/*  */}
      <div className="py-24 xl:flex xl:flex-col " data-aos="fade-up">
        <div className="font-semibold text-4xl md:text-2xl tes">Hi, I'm Fairus Ramadhani</div>
        <div className=" tes opacity-60 mt-5 mb-7 text-base md:text-sm w-3/4 ">
          <p>Computer science student. Passion at Frontend Engineer. You've found my personal slice of the internet. Take a look and enjoy.</p>
        </div>
        <div className="font-semibold text-3xl md:text-xl tes mb-8 md:mb-5">Current Favourite Tech Stacks</div>
        <div className="flex flex-row">
          <div className="w-12 h-12 z-10 md:w-7 md:h-7 bg-slate-500 rounded-full mr-5 "></div>
          <div className="w-12 h-12 z-10 md:w-7 md:h-7 bg-slate-500 rounded-full mr-5 "></div>
          <div className="w-12 h-12 z-10 md:w-7 md:h-7 bg-slate-500 rounded-full mr-5 "></div>
          <div className="w-12 h-12 z-10 md:w-7 md:h-7 bg-slate-500 rounded-full mr-5 "></div>
        </div>
      </div>
      {/* card component */}
      <div className="flex flex-row md:flex-wrap justify-center pt-32 md:pt-24 xl:hidden" data-aos="fade-up">
        <a
          href="https://kantin-kejujuran.netlify.app/"
          className="mx-2 hover:z-20 hover:transition-all w-80 md:w-[calc(80/4*3)] h-[22rem] rounded-3xl border border-white bg-night z-10 flex flex-col items-center py-3 relative left-32 rotate-[-22deg] md:rotate-0 md:static md:left-0 md:mb-8"
        >
          <div className="bg-slate-500 relative z-10 rounded-2xl mb-9 w-72 h-36 lg:w-[17rem overflow-hidden">
            <img className="object-fill  w-72 h-36 " src={kantin} alt="" />
          </div>
          <div className="flex flex-col px-4">
            <div className="tes font-bold  text-xl">Kantin Kejujuran</div>
            <div className="tes font-light opacity-60 my-4 lg:">A website to facilitate student to sell and buy food with self-service</div>
            <div className="flex">
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
            </div>
          </div>
        </a>
        <a href="https://ugm-site.netlify.app/" className="w-80 md:w-[calc(80/4*3)] h-[22rem] rounded-3xl border border-white bg-night z-10 flex flex-col items-center py-3 ">
          <div className="bg-slate-500  z-10 rounded-2xl mb-9 w-72 h-36 lg:w-[17rem] overflow-hidden">
            <img src={companyprofile} className="object-fill" alt="" />
          </div>
          <div className="flex flex-col px-4">
            <div className="tes font-bold  text-xl">Web Profile University</div>
            <div className="tes font-light opacity-60 my-4">2nd place web competition UNTAG. Company profile using next js </div>
            <div className="flex">
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
              <div className="h-7 w-7 bg-slate-500 rounded-full mx-2"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Intro;
