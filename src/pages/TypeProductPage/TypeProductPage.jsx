import React from "react";
import Navbar from "../../components/NavBarComponent/Navbar";
import ProductPage from "../ProductPage/ProductPage";
import { Pagination } from "antd";
export default function TypeProductPage() {
  const onChange = ()=>{

  }
  return (
    // <div>
    //    <Navbar/>
    //     <ProductPage/>
    // </div>
    <div className="bg-white py-6">
      <div className="mx-auto max-w-7xl py-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Navbar />
          </div>
          <div className="col-span-9">
            <ProductPage />
          </div>
        </div>
        <Pagination
        className="text-center ml-24 "
          showSizeChanger
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
