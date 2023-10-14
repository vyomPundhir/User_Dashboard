import React from 'react'

const SignIn = () => {
  return (

    <section className="signin flex flex-row justify-start h-[1080px] w-full bg-[#F8FAFF]">

      

        <div className="left bg-[#4083F3] flex flex-col ml-[-227px] w-3/5 -skew-x-[8deg]">

          <div className='flex flex-col ml-[297px] skew-x-[8deg] h-full'>

            <div className='logo text-white text-[25px] font-[700] tracking-[1.5px] mt-[55px]'>
              LOGO
            </div>

            <div className='board text-white text-[80px] font-[700] tracking-[2px] mt-[380px] ml-[110px]'>
              Board.
            </div>

            <div className='flex flex-row items-center gap-[40px] mt-[364px] ml-[78px]'>

              <img src="src\assets\github.png" alt="github" className='w-[46px] h-[46px] cursor-pointer'/>

              <img src="src\assets\twitter.png" alt="twitter" className='w-[45px] h-[45px] rounded-full cursor-pointer' />

              <img src="src\assets\linkedin.png" alt="linkedIn" className='w-[56px] h-[56px] cursor-pointer' />

              <img src="src\assets\discord.png" alt="discord" className='w-[50px] h-[50px] cursor-pointer' />

            </div>

          </div>

        </div>

      <div className='right bg-[#F8FAFF]'>

        <div className='flex flex-col gap-[30px] ml-[182px] h-full'>

          <div>
            <div className='text-[40px] font-[700] mt-[238px] tracking-[1.5px]'>Sign In</div>
            <div className='font-[400] text-[17px] mt-[5px]'>Sign in to your account</div>
          </div>

          <div className='flex flex-row items-center gap-[30px]'>

            <button className='h-[30px] w-[210px] flex flex-row justify-center items-center gap-[15px] bg-[#ffffff] rounded-[20px] shadow-xl'>
              <img src="src\assets\google.png" alt="google" className='w-[18px] h-[18px]'/>
              <span className='text-[#a1a1a1] text-[14px] font-[500]'>Sign in with Google</span>
            </button>

            <button className='h-[30px] w-[200px] flex flex-row justify-center items-center gap-[15px] bg-[#ffffff] rounded-[20px] shadow-xl'>
              <img src="src\assets\apple.png" alt="apple" className='w-[17px] h-[17px]' />
              <span className='text-[#a1a1a1] text-[14px] font-[500]'>Sign in with Apple</span>
            </button>

          </div>
          
          <form action="" className='flex flex-col gap-[20px] w-[440px] h-[365px] bg-[white] rounded-[18px] shadow-xl'>

            <div className='flex flex-col ml-[30px] mr-[30px] mt-[30px] gap-[9px]'>
              <label className='font-[500] text-[17.5px]'>Email address</label>
              <input type="text" name="email" id="email" placeholder='Enter email address' className='rounded-[10px] h-[45px] bg-[#EAEAEA] text-[17px] pl-[20px] focus:outline-none'/>
            </div>

            <div className='flex flex-col ml-[30px] mr-[30px] gap-[9px]'>
              <label className='font-[500] text-[17.5px]'>Password</label>
              <input type="password" name="password" id="password" placeholder='Enter password' className='rounded-[10px] bg-[#EAEAEA] text-[17px] h-[45px] pl-[20px] focus:outline-none'/>
            </div>

            <button className='ml-[30px] mr-[30px] text-[17px] font-[500] text-[#4083F3] text-left'>Forgot password?</button>

            <button type="submit" className='rounded-[10px] text-[17px] font-[600] tracking-[1px] h-[45px] bg-[#4083F3] text-[white] ml-[30px] mr-[30px] flex flex-row justify-center items-center w-[380px]'>Sign In</button>

          </form>

          <div className='text-[17px] font-[600] text-[#a0a0a0] text-center'>
            Don't have an account? <button className='text-[#4083F3] font-[600]'>Register here</button>
          </div>

        </div>

        

        

        

        

      </div>

    </section>
  )
}

export default SignIn