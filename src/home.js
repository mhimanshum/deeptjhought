import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import Faqs from './Qus/Faqs'
import { questionsWithAns } from '../src/constants/question'

export const Home = () => {
  return (
    <div>
      {/* <SideBar /> */}
      <div className='flex justify-between mt-4 px-8'>
        <div>
          <h1 className='text-blue-600 text-3xl font-bold'>
            Technical Project Management
          </h1>
        </div>
        <div>
          <button
            type='button'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Submit Task
          </button>
        </div>
      </div>
      <div className='mt-3  px-8'>
        <div className='bg-gray-300 p-10 rounded-md'>
          <h1 className='text-black font-bold text-2xl px-4'>
            Explore The World of management
          </h1>
          <p className='px-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit molestias placeat, obcaecati dignissimos eligendi in
            repellat neque minus hic. Excepturi maxime ullam veniam ipsam
            suscipit ea corrupti alias saepe dolorum.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 px-8 mt-10'>
        {/* ================= */}
        <div className=' bg-white border-2 border-gray-500 min-h-80 rounded-md'>
          <div className='flex items-center justify-between bg-black h-16 text-white text-center px-2 py-3 rounded-t-md border'>
            <div className='w-4/5 text-center'>
              Technical Project Management
            </div>
            <div className='flex justify-end'>
              <RiErrorWarningFill size={30} />
            </div>
          </div>
          <div>
            <h1 className='m-4'>
              <span className='font-bold'> Description :</span>
              <span>to Explore more read more</span>
            </h1>
          </div>
          <div className=''>
            <iframe
              // width='700'
              // height='250'
              src='https://www.youtube.com/embed/Zb5JsQt324M'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* =============== */}
        <div className=' bg-white border-2 border-gray-500 h-80 rounded-md'>
          <div className='flex items-center justify-between bg-black h-16 text-white text-center px-2 py-3 rounded-t-md border'>
            <div className='w-4/5 text-center'>Threadbuild</div>
            <div className='flex justify-end'>
              <RiErrorWarningFill size={30} />
            </div>
          </div>
          <div>
            <h1 className='m-4'>
              <span className='font-bold'> Description :</span>
              <span>to Explore more read more</span>
            </h1>
          </div>
        </div>
        {/* ================= */}
        <div className=' bg-white border-2 border-gray-500 min-h-80 rounded-md'>
          <div className='flex items-center justify-between bg-black h-16 text-white text-center px-2 py-3 rounded-t-md border'>
            <div className='w-4/5 text-center'>Structure your pointers</div>
            <div className='flex justify-end'>
              <RiErrorWarningFill size={30} />
            </div>
          </div>
          <div>
            <h1 className='m-4'>
              <span className='font-bold'> Description :</span>
              <span>to Explore more read more</span>
            </h1>
          </div>
          <div className=' px-6'>
            <div>
              <h1>Title</h1>
              <div className='border-2 w-full h-12 shadow'></div>
            </div>
            <div className='mt-4'>
              <h1>Contant</h1>
              <div className='flex justify-center items-center gap-4 border-2 w-full h-12 shadow p-2 '>
                <p>Home</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p>Table</p>
                <p>Help</p>
              </div>
              <div className='border-2 h-36 shadow '></div>
            </div>
          </div>
        </div>
        {/* ==================== */}
        <div className=' bg-white border-2 border-gray-500 min-h-80 rounded-md'>
          <div className='flex items-center justify-between bg-black h-16 text-white text-center px-2 py-3 rounded-t-md border'>
            <div className='w-4/5 text-center'> 4SA method</div>
            <div className='flex justify-end'>
              <RiErrorWarningFill size={30} />
            </div>
          </div>
          <div>
            <h1 className='m-4'>
              <span className='font-bold'> Description :</span>
              <span>to Explore more read more</span>
            </h1>
          </div>
          <div>
            <Faqs questionsWithAns={questionsWithAns} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
