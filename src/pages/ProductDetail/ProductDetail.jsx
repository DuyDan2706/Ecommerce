import React from 'react'
import {ShoppingCartOutlined,PlusOutlined,MinusOutlined} from '@ant-design/icons';
export default function ProductDetail() {
  const arrrProduct = [
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn",
    "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn"
  ]
 
  const onchange = ()=>{

  }

  return (
    <div className='bg-gray-200 py-6'>
    <div className='bg-white p-4 shadow'>
      <div className='mx-auto max-w-7xl py-4'>
        <div className=' grid grid-cols-12 gap-9'>
          <div className='col-span-5'>
            <div className='relative w-full  pt-[100%] shadow'>
            <img
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
            src='https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn'
            alt='anh1'
          />
            </div>
            <div className='relative mt-4 grid grid-cols-5 gap-1'>
              <button className='text-ưhite absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
              <button className='text-ưhite absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </button>
              {arrrProduct.slice(0, 5).map((img, index) => {
                const isActive = index === 0
                return (
                  <div className='relative w-full  pt-[100%]' key={img}>
                  <img
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
            src='https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn'
            alt='anh1'
          />
                    {isActive && <div className='absolute inset-0 bordẻ-2 border-orange-50' />}
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-span-7'>
            <h1 className="text-xl font-medium uppercase">
            Bộ phụ kiện bảo vệ cáp và củ sạc bằng silicon nhân vật hoạt hình dễ thương cho bộ sạc 18W và 20W Date84store
            </h1>
            {/* <div className='mt-8 flex items-center '>
              <div className="flex items-center">
                <span className='mr-1 border-b-orange-200 text-orange-200'>
                  {product.rating}
                </span>
                <ProductRating rating={product.rating} activeClassname='fill-orange-500 text-orange-500 h-4 w-4 ' nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4' />
              </div>
              <div className="mx-4 h-4 w-[1px] bg-gray-300">

              </div>
              <div>
                <span>1000</span>
                <span className='ml-1 text-gray-500'> Đã bán</span>
              </div>
            </div> */}
            <div className="mt-8 flex items-center bg-gray-50 px-5 py-4">
              <div className="text-gray-500 line-through">
                ₫40.000

              </div>
              <div className="ml-3 text-2xl font-medium text-orange-500">₫70.000</div>
              <div className='ml-4 rounded-sm bg-orange-500 px-1 py-[2px] text-sm font-semibold uppercase text-white'>
               30.000 Giảm
              </div>
            </div>
            <div className='mt-8 flex items-center  '>
            <div className='capitalize text-gray-500'>
              số lượng
            </div>
            <div className='ml-10 flex '>
              <button className='flex h-8 w-8 items-center justify-center rounded-sm border-gray-300 text-gray-500'>
              <MinusOutlined />

              </button>
              <input
           value={1}
             
              className = 'p-3 w-12  border  border-gray-500 rounded-sm text-center'
              onChange={onchange}
              />
<button className='flex h-8 w-4 items-center justify-center rounded-r-sm border-gray-300 text-gray-500'>
<PlusOutlined />



              </button>
            </div>
          <div className="ml-6 text-sm text-gray-500">
            1000 sản phẩm có sẵn
          </div>
          </div>
          <div className='mt-8 flex items-center'>
              <button
            
                className='flex h-12 items-center justify-center rounded-sm border border-orange bg-orange-500 px-5 capitalize text-orange shadow-sm hover:bg-orange-400'
              >
              <ShoppingCartOutlined />
                Thêm vào giỏ hàng
              </button>
              <button
              
                className='fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none bg-orange-500 hover:bg-orange-400'
              >
              Mua trả sau
              </button>
            </div>
          </div>
       
        </div>
      </div>
      <div className='mt-8'>
      <div className='container'>
        <div className=' bg-white p-4 shadow'>
          <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
          <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            /> */}
            MÃ SP:HD76

Quần thể thao nam cao cấp chất mềm mịn ko nhăn nhiều màu HD76

- Quần Gió Thể Thao Nam được may từ chất liệu vải gió cao cấp, hạn chế nhăn tối đa, bền màu, không bai không xù sau một thời gian dài sử dụng,có lưng chun rất dễ sử dụng. 

- Chất liệu: 92% Poly, 8% Spandex

- Túi: 2 túi hông 1 túi hậu( túi hậu sau mông có khóa kéo)

- Size: M,L,XL,2XL, 3XL

- Tính năng nổi bật của Quần Gió Thể Thao Nam

 + Chất lượng tốt với giá cả cạnh tranh. 

 + Sản phẩm luôn mang đến sự thoải mái và tiện dụng cho người mặc và được sử dụng hàng ngày. 

+ Chất vải chống nhăn chống nhầu dễ dàng khi giăt giũ và không mất công là ủi.

+ Kiểu dáng đẹp, thiết kế đứng dáng mang đến phong cách khỏe khoắn, trẻ trung

 

 
          </div>
        </div>
      </div>
    </div>

    {/* <div className='mt-8'>
      <div className='container'>
        <div className='uppercase text-gray-400'>CÓ THỂ BẠN CŨNG THÍCH</div>
        {productsData && (
          <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {productsData.data.data.products.map((product) => (
              <div className='col-span-1' key={product._id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div> */}
    </div>
  </div>
  )
}
