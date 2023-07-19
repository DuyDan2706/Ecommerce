import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-gray-500 min-h-screen flex'>
    <div className='mx-auto max-w-7xl px-4'>
      <div className='grid grid-cols-1 py-12 lg:grid-cols-2 lg:py-32 lg:pr-10'>
        <div className='lg:col-span-2 lg:col-start-4'>
          <form className='rounded bg-white shadow-sm grid lg:grid-cols-2 lg:gap-4 h-full'>
            <div className='lg:col-span-1 p-10'>
              <div className='text-4xl font-bold'>Xin chào </div>
              <div className='text-xl mt-6'>Vui lòng tạo tài khoản </div>
              <div className='mt-4'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='email'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'></div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Mật khẩu'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'></div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Nhập lại mật khẩu'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:text-red-600'>
                  {' '}
                  Đăng nhập{' '}
                </button>
              </div>
             
              <div className='mt-8'>
                <div className='flex items-center '>
                  <span className='text-center text-back'>Bạn đã  có Tài khoản?</span>
                  <Link className='ml-2 text-blue-400' to='/login'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
            <div className='lg:col-span-1 hidden lg:block bg-blue-200'>
              <img
                src='https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png'
                alt='Tikicdn Image'
                className='w-full h-full'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
