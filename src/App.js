import "./App.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
import "./main.css";
import bg from "./Union.png";
import Intro from "./component/intro";
import Header from "./component/header";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="dark">
      <div className=" dark:bg-night min-h-screen h-full dark:text-white bg-slate-50 black ">
        {/* //header */}
        <Header></Header>
        {/* ///////////////// */}
        <Intro />
        <div className="px-32 py-32 md:px-8" data-aos="fade-up">
          <div className="before:h-5 before:w-1 before:bg-white before:inline-block before:mr-2 text-3xl">Project</div>
          <div className="py-8 flex flex-wrap justify-center ">
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5  ">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5  ">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="px-32 md:px-8" data-aos="fade-up">
          <div className="before:h-5 before:w-1 before:bg-white before:inline-block before:mr-2 text-3xl">Blogs</div>
          <div className="py-8 flex flex-wrap justify-center">
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5  ">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="w-72 border border-white rounded-xl flex flex-col p-4 my-4 mx-5  ">
              <div className="h-40 w-64 bg-slate-500 rounded-xl mb-8"></div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-2">Title</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className="flex my-4">
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                  <div className="h-6 w-6 bg-slate-500 rounded-full mx-2"></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="">@Mathzino</div>
      </div>
    </div>
  );
}

export default App;
