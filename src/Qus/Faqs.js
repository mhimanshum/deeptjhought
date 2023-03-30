import Faq from './Faq'

function Faqs({ questionsWithAns }) {
  return (
    <div className='bg-bannerColor pb-10 md:pb-20'>
      {/* <p className='text-xl md:text-2xl text-center pt-10 md:pt-20 font-semibold'></p> */}
      <div className='flex justify-center py-5 md:py-7'>
        <div className='w-full px-5'>
          {questionsWithAns.map((detail, index) => {
            return (
              <div
                key={index}
                className=' bg-gray-300  border-2 border-bg rounded-sm my-2'
              >
                <Faq question={detail.que} answer={detail.ans} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Faqs
