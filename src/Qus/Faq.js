import { useState } from 'react'
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io'

const Faq = (props) => {
  const [open, setopen] = useState(false)

  const show = () => {
    setopen(!open)
  }

  return (
    <>
      <div className='w-full '>
        <div className='flex  items-center cursor-pointer' onClick={show}>
          {!open ? (
            <IoIosArrowDropdownCircle
              className='m-5 text-gray-600 transition-all duration-200 hover:text-gray-900 h-6 w-6 md:h-7 md:w-7 cursor-pointer'
              onClick={show}
            />
          ) : (
            <IoIosArrowDropupCircle
              className='m-5 text-gray-600 transition-all duration-200 hover:text-gray-900 h-6 w-6 md:h-7 md:w-7 cursor-pointer'
              onClick={show}
            />
          )}
          <p
            className={`${
              !open ? 'text-gray-900' : 'text-blue-500'
            } font-medium p-5`}
          >
            {props.question}
          </p>
        </div>
        <div className={`bg-gray-50 p-5 rounded-sm ${!open ? 'hidden' : ''}`}>
          {props.answer}
        </div>
      </div>
    </>
  )
}

export default Faq
