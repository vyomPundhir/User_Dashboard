import React from 'react'

const SignIn = () => {
  return (

    <section className="signin flex flex-row justify-start h-[1250px] w-full">

      

        <div className="left bg-[#4083F3] flex flex-col ml-[-239px] w-3/5 -skew-x-[8deg]">

          <div className='flex flex-col ml-[295px] skew-x-[8deg] h-full'>

            <div className='logo text-white text-[25.5px] font-[700] tracking-[1.5px] mt-[58px]'>
              LOGO
            </div>

            <div className='board text-white text-[80px] font-[700] tracking-[2px] mt-[390px] ml-[110px]'>
              Board.
            </div>

            <div className='flex flex-row mt-[390px] ml-[40px]'>

              <img src="src\assets\github.png" alt="github" className='w-[45px] h-[45px]'/>

              <img src="src\assets\twitter.png" alt="twitter" className='w-[45px] h-[45px] rounded-full' />

              <img src="src\assets\linkedin.png" alt="linkedIn" className='w-[56px] h-[56px]' />

              <img src="src\assets\discord.png" alt="discord" className='w-[50px] h-[50px]' />

            </div>

          </div>

        </div>

      


      {/* <div className='left bg-[#4444ff] flex flex-col justify-center mt-[-118px] ml-[-50px] w-1/2 rotate-[8deg]'>

        <div>

          <div className='logo text-white text-[30px] font-[700] tracking-[1px]'>
              LOGO
            </div>

            <div className='board text-white text-[80px] font-[700] tracking-[2px]'>
              Board.
            </div>

            <div className='flex flex-row'>

              <img src="src\assets\github.png" alt="github" className='w-[45px] h-[45px]'/>

              <img src="src\assets\twitter.png" alt="twitter" className='w-[45px] h-[45px] rounded-full' />

              <img src="src\assets\linkedin.png" alt="linkedIn" className='w-[56px] h-[56px]' />

              <img src="src\assets\discord.png" alt="discord" className='w-[50px] h-[50px]' />

            </div>
          
        </div>

      </div> */}


      <div className='right'>

        <div>
          <div>Sign In</div>
          <div>Sign in to your account</div>
        </div>

        <div>

          <div>
            <img src="" alt="" />
            <span>Sign in with Google</span>
          </div>

          <div>
            <img src="" alt="" />
            <span>Sign in with Apple</span>
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

          <button type="submit">Sign In</button>

        </form>

        <div>
          Don't have an account? <span>Register here</span>
        </div>

      </div>

    </section>
  )
}

export default SignIn