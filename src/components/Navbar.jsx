import React from 'react'

const Navbar = () => {
  return (
    <section className="text-[black] navbar flex flex-row gap-[620px] items-center mx-[30px] mt-[57px]">

      <div className='text-[27px] font-[700] tracking-[0.5px]'>Dashboard</div>

      <div className='flex flex-row items-center gap-[20px]'>

        <div className='flex flex-row items-center bg-[white] px-[15px] py-[3px] rounded-[5px] cursor-pointer shadow-xl'>
          <input type="search" name="search" id="search" placeholder='Search...' className='focus:outline-none bg-white w-[150px]'/>
          <img src="src\assets\search.png" alt="search" className='w-[20px] h-[20px]' />
        </div>

        <img src="src\assets\bell.png" alt="notification" className='w-[25px] h-[25px] rounded-full cursor-pointer' />

        <img src="src\assets\profile.jpg" alt="profile" className='w-[30px] h-[30px] rounded-full cursor-pointer' />
      </div>

    </section>
  )
}

export default Navbar