import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import ProductPage from "../ProductPage/ProductPage";

export default function Homepage() {
  const arr = ["TV", "TuLanh", "LapTop"];

  const arrimg = [
    "https://salt.tikicdn.com/ts/tikimsp/cf/9e/a5/91a3d616fa55f1b94b08af3c7b4230f5.png",
    "https://salt.tikicdn.com/ts/tikimsp/07/df/a1/6e8aad1263303a24c14aa5aa5a60e069.png",
    "https://salt.tikicdn.com/ts/tikimsp/bc/ca/b4/39151bc02b2d1aeaacbb75d27165313f.png",
  ];
  return (
    <div className="mx-auto max-w-7xl py-4">
      <button
        className="flex items-start gap-6  border-soid border-red-500"
        style={{ padding: "0 120px" }}
      >
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </button>
      <div className="mt-2">
        <SliderComponent arrimg={arrimg} />
      </div>
      <ProductPage />
      
      <div className="flex justify-center ">
      <button className=" justify-center text-center bg-orange-500 p-2 text-sm uppercase text-white hover:bg-orange-400 " >
        Xem Thêm
      </button>
      </div>
    
    </div>
  );
}
