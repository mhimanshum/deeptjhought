import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { FaHome } from 'react-icons/fa'
import { FaTools } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

const Navbarr = () => {
  const [navbar, setNavbar] = useState(false)
  const router = useNavigate()

  function Show() {
    setNavbar(!navbar)
    console.log(navbar)
  }

  const navbarLinks = [
    {
      path: '/',
      name: 'Explore the world of management',
    },
    {
      path: '/',
      name: 'Technical Project Management',
    },
    {
      path: '/',
      name: 'Structure your pointers',
    },
  ]

  return (
    <>
      <nav className=' top-0 left-0 right-0 z-20 bg-gray-300 h-16 flex  items-center justify-between shadow'>
        <div className='ml-6 cursor-pointer'>
          <h1 className='' onClick={Show}>
            <span className='text-black text-2xl'>DEEP</span>
            <span className='text-blue-700  font-bold text-2xl'>THOUGHT</span>
          </h1>
        </div>
        <div className='mr-4 font-medium'>
          <div className='flex gap-4'>
            <div className='flex justify-center items-center bg-blue-600 rounded-full w-6 h-6'>
              <FaHome className='text-white' />
            </div>
            <div className='flex justify-center items-center bg-blue-600 rounded-full w-6 h-6'>
              <FaTools className='text-white' />
            </div>
            <div className=' flex justify-center items-center bg-blue-600 rounded-full w-6 h-6'>
              <FaBell className='text-white' />
            </div>{' '}
            <div className=' flex justify-center items-center bg-blue-600 rounded-full w-6 h-6'>
              <FaUser className='text-white' />
            </div>
          </div>
        </div>
      </nav>
      <div
        id='bg'
        className={
          navbar
            ? `visible fixed inset-0 z-30 h-screen bg-gray-800 bg-opacity-50`
            : 'hidden'
        }
        onClick={(e) => {
          console.log(e)
          if (e.target.id === 'bg') {
            Show()
          }
        }}
      >
        <div className='bg-gray-200 w-2/3 sm:w-72 h-full rounded-md'>
          <div className='bg-black w-full h-16 pl-5 flex justify-between items-center rounded-t-md'>
            <Link href='/'>
              <p className='text-white  font-bold text-lg'>Journey board</p>
            </Link>
            {/* <div className='text-white' onClick={() => setNavbar(false)}>
              <AiFillCloseSquare className='w-5 h-5' />
            </div> */}
          </div>
          <div className='font-light'>
            <ul className='text-black  '>
              {navbarLinks.map((link, index) => {
                return (
                  <ul className='list-disc list-inside'>
                    <li key={index} onClick={() => setNavbar(false)}>
                      <Link
                        href={link.path}
                        className={`flex justify-center rounded p-2 hover:text-red-500  ${
                          router.pathname == link.path ? 'bg-orange-600 ' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </ul>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbarr
