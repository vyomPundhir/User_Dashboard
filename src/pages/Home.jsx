import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import TopCard from '../components/TopCard'
import {topCardData} from "../utils/constants"
import  BarChart  from '../components/BarChart'
import Add from '../components/Add'
import DoughnutChart from '../components/DoughnutChart'


const Home = () => {
  return (
    <section className="home w-full h-[1080px] flex flex-row bg-[#F8FAFF]">

      <div className='bg-[f8faff] sidebar h-full w-[24.5%]'>
        <Sidebar/>
      </div>

      <div className='dashboard bg-[#F8FAFF] w-[73%]'>
        <Navbar />
        <div className="bg-[#F8FAFF] mx-[39px] mt-[30px] topcards flex flex-row gap-[20px]">
          {
            topCardData.map((item, index)=>(
              <div key={index}>
                <TopCard image={item.image} title={item.title} price={item.price} percent={item.percent} color={item.color}/>
              </div>
            ))
          }
        </div>

        <div className='bg-[white] flex flex-col items-center mx-[39px] w-[1060px] rounded-3xl h-[380px] my-[30px] shadow-xl border-2'>

          <div className='text-[#000] font-[700] text-[24px] w-[93%] pr-[20px] py-[20px]'>Citizens</div>
          <BarChart />
        </div>

        <div className='flex flex-row gap-[40px] items-center mx-[39px] w-[1060px]'>
          <div className='w-[510px]' >
            <DoughnutChart/>
          </div>
          
          <Add/>
        </div>
        
        
      </div>

    </section>
  )
}

export default Home