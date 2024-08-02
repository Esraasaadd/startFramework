/* import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets//port3.png";
import { useState } from "react";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  function getSrc(e) {
    const src = e.currentTarget.querySelector('img').src;
    setCurrentSrc(src);
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  return (
    <div className="pt-32 mb-3">
      <div className="container ">
        <div className="row flex-col justify-center items-center space-y-3">
          <h2 className="font-bold text-4xl text-[#2c3e50]">
            PORTFOLIO COMPONENT
          </h2>
          <div className="row justify-between space-x-4 items-center">
            <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star text-[#2c3e50]"></i>
            <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
          </div>
        </div>
        <div className="container mt-5 w-10/12 mx-auto">
          <div className="row gap-9 mb-6">
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img1} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img2} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img3} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="row gap-9">
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img1} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img2} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img3} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className="layer flex justify-center items-center fixed inset-0 bg-blue-700 bg-opacity-25" onClick={close}>
          <img className="w-[600px]" src={currentSrc} alt="" />
        </div>
      )}
    </div>
  );
}

 */

import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets//port3.png";
import { useState } from "react";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  function getSrc(e) {
    const src = e.currentTarget.querySelector('img').src;
    setCurrentSrc(src);
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  return (
    <div className="pt-32 mb-3 mt-[-50px] md:mt-0">
      <div className="container">
        <div className="row flex-col justify-center items-center space-y-3">
          <h2 className="text-center font-bold text-4xl text-[#2c3e50]">
            PORTFOLIO COMPONENT
          </h2>
          <div className="row justify-between space-x-4 items-center">
            <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star text-[#2c3e50]"></i>
            <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
          </div>
        </div>
        <div className="container mt-7 w-10/12 mx-auto">
          <div className="row flex flex-wrap md:flex-nowrap gap-9 mb-6">
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img1} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img2} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img3} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="row flex flex-wrap md:flex-nowrap gap-9">
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img1} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img2} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="box w-full md:w-1/3 relative group cursor-pointer" onClick={getSrc}>
              <div>
                <img className="rounded-md" src={img3} alt="" />
              </div>
              <div className="layer opacity-0 flex justify-center items-center bg-[#1abc9ce6] absolute top-0 right-0 left-0 bottom-0 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className="layer flex justify-center items-center fixed inset-0 bg-blue-700 bg-opacity-25" onClick={close}>
          <img className="w-[600px]" src={currentSrc} alt="" />
        </div>
      )}
    </div>
  );
}
