import React from 'react'

const Sidebar = () => {
  return (
    <section className="sidebar bg-[#4285F4] flex flex-col gap-[400px] mx-[38px] mt-[42px] mb-[30px] h-[1000px] rounded-[20px] items-center">

      <div className="top w-[70%] flex flex-col gap-[52px] mt-[53px]">

        <div className=" head text-[white] text-[40px] font-[700] tracking-[1.5px] ml-[10px]">
          Board.
        </div>

        <div className="items flex flex-col gap-[28px] ml-[-3px]">

          <div className="item flex flex-row items-center gap-[19px] hover:bg-[#639cf8] pl-[10px] py-[4px] rounded-[8px] cursor-pointer">
            <img src="src\assets\dashboard.png" alt="dashboard" className='w-[25px] h-[25px]'/>
            <span className='text-[white] text-[20px] tracking-[1px] font-[600]'>Dashboard</span>
          </div>

          <div className="item flex flex-row items-center gap-[19px] hover:bg-[#639cf8] pl-[13px] py-[4px] rounded-[8px] cursor-pointer">
          <img src="src\assets\transactions.png" alt="transactions" className='w-[23px] h-[23px]' />
            <span className='text-[#e4e4e4] text-[20px] tracking-[1px] font-[400]'>Transactions</span>
          </div>

          <div className="item flex flex-row items-center gap-[19px] hover:bg-[#639cf8] pl-[14px] py-[4px] rounded-[8px] cursor-pointer">
            <img src="src\assets\schedules.png" alt="schedules" className='w-[20px] h-[20px]' />
            <span className='text-[#e4e4e4] text-[20px] tracking-[1px] font-[400]'>Schedules</span>
          </div>

          <div className="item flex flex-row items-center gap-[19px] hover:bg-[#639cf8] pl-[12px] py-[4px] rounded-[8px] cursor-pointer">
            <img src="src\assets\users.png" alt="users" className='w-[24px] h-[24px]' />
            <span className='text-[#e4e4e4] text-[20px] tracking-[1px] font-[400]'>Users</span>
          </div>

          <div className="item flex flex-row items-center gap-[19px] hover:bg-[#639cf8] pl-[12px] py-[4px] rounded-[8px] cursor-pointer">
            <img src="src\assets\settings.png" alt="setttings" className='w-[23px] h-[23px]' />
            <span className='text-[#e4e4e4] text-[20px] tracking-[1px] font-[400]'>Settings</span>
          </div>

        </div>

      </div>

      <div className="bot flex flex-col gap-[10px] w-[70%]">
        <div className='text-white tracking-[0.5px] pl-[12px] py-[4px] hover:bg-[#639cf8] rounded-[5px] cursor-pointer'>Help</div>
        <div className='text-white tracking-[0.5px] pl-[12px] py-[4px] hover:bg-[#639cf8] rounded-[5px] cursor-pointer'>Contact Us</div>
      </div>

    </section>
  )
}

export default Sidebar