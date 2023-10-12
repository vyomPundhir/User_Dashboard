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

              <img src="src\assets\github.png" alt="github" className='w-[46px] h-[46px]'/>

              <img src="src\assets\twitter.png" alt="twitter" className='w-[45px] h-[45px] rounded-full' />

              <img src="src\assets\linkedin.png" alt="linkedIn" className='w-[56px] h-[56px]' />

              <img src="src\assets\discord.png" alt="discord" className='w-[50px] h-[50px]' />

            </div>

          </div>

        </div>

      <div className='right bg-[#F8FAFF]'>

        <div className='flex flex-col ml-[172px] h-full'>

          <div>
            <div className='text-[38.5px] font-[700] mt-[238px] tracking-[1.5px]'>Sign In</div>
            <div className='font-[500] text-[16px] mt-[5px]'>Sign in to your account</div>
          </div>

          <div className='flex flex-row items-center gap-[40px]'>

            <div className='h-[30px] w-[210px] flex flex-row justify-center items-center gap-[15px] bg-[#ffffff] rounded-[20px]'>
              <img src="src\assets\google.png" alt="google" className='w-[18px] h-[18px]'/>
              <span className='text-[#a1a1a1] text-[14px] font-[500]'>Sign in with Google</span>
            </div>

            <div className='h-[30px] w-[200px] flex flex-row justify-center items-center gap-[15px] bg-[#ffffff] rounded-[20px]'>
              <img src="src\assets\apple.png" alt="apple" className='w-[17px] h-[17px]' />
              <span className='text-[#a1a1a1] text-[14px] font-[500]'>Sign in with Apple</span>
            </div>

          </div>

          <form action="">
            <div>
              <label>Email address</label>
              <input type="text" name="email" id="email" placeholder='Enter email address' />
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password" id="password" placeholder='Enter Password' />
            </div>

            <div>Forgot password?</div>

            <button type="submit" className='bg-[#4083F3] text-[white]'>Sign In</button>

          </form>

          <div>
            Don't have an account? <span className='text-[#4083F3]'>Register here</span>
          </div>

        </div>

        

        

        

        

      </div>

    </section>
  )
}

export default SignIn