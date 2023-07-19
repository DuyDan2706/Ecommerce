import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Header() {
  return (
    <div className="bg-blue-200 pb-5 pt-2 text-white">
      <div className="mx-auto max-w-7xl py-2  ">
        <div className="mt-4 grid grid-cols-12 items-end gap-4">
          <div className="col-span-2">
            <img
              className="h-14 lg:h-14 object-contain"
              src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
              alt="dan111"
            />
          </div>
          <form className="col-span-8">
            <div className="flex rounded-sm bg-white p-1">
              <input
                type="text"
                name="Search"
                className="flex-grow border-none bg-transparent px-3 py-2 text-black outline-none"
                placeholder="Tìm kiếm sản phẩm mong muốn..."
              ></input>
              <button className="flex-shrink-0 bg-orange-500 px-6 py-2 hover:opacity-70 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="col-span-1 ml-8   ">
            <div className="flex items-center  lg:h-10">
              <Link
                to="/register"
                className="hover:texxt-white/70 mx-3 capitalize "
              >
                Đăng Kí
              </Link>
              <div className="h-4 border-r-[1px]  border-r-white/40" />
              <Link
                to="/login"
                className="hover:texxt-white/70 mx-3 capitalize"
              >
                Đăng Nhập
              </Link>
            </div>
          </div>
          <div className="col-span-1 ml-24  ">
            <Link to="/" className="">
              <ShoppingCartOutlined
                className="h-14 lg:h-10 w-4  "
                style={{ fontSize: "34px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
