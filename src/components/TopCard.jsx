import React from 'react'


const TopCard = ({image, title, price, percent, color}) => {
  console.log(color)

  return (

    <div className="text-[black] card w-[250px] bg-[white] shadow-xl p-[20px] cursor-pointer">

      <div className={`flex flex-row justify-center items-center w-[35px] h-[35px] bg-[${color}] rounded-full`}>
        <img src={image} alt="img" className='w-[22px] h-[22px] '/>
      </div>

      <div className='text-[12.5px] font-[500] mt-[5px]'>{title}</div>

      <div className='flex flex-row justify-between items-center'>
        <div className='text-[20px] font-[700]'>{price}</div>
        <div className='py-[2px] px-[6px] rounded-[10px] text-[12.5px] font-[500] text-[#5ff55f] bg-[#e1fbdc]'>{percent}</div>
      </div>

    </div>

    // <section className="top-card bg-[grey]">

      // <div className={`flex flex-row justify-center items-center w-[35px] h-[35px]`}>

      // <img src={image} alt="img" className='w-[22px] h-[22px]'/>
      
      // </div>

    //   <div className='text-[12.5px] font-[500]'>{title}</div>

    //   <div>

    //     <div className='text-[20px] font-[700]'>{price}</div>

    //     <div>{percent}</div>

    //   </div>
    // </section>
  )
}

export default TopCard