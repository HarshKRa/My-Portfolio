import React from 'react';
import ProjectData from '../../Data/ProjectData.jsx'
import imgL from '../../assets/leetcodeProfile.png'
import LeetCode from '../../ProblemSolving/LeetCode.jsx';



function Project() {
  return (
    <div className='bg-[#1E293B] flex justify-center flex-col items-center border-white border-2 rounded-lg mx-auto w-11/12 mt-10 md:p-10 p-6 pb-0 md:px-2' >
      <h1 className='font-mono text-2xl subpixel-antialiased font-bold'>Projects</h1>

      <div className="mt-5 flex flex-wrap justify-center align-middle  p-5">
        {
          ProjectData.map((data)=>(
            <div key={data.name} className='bg-[#191E26] rounded-3xl border-white border-2 p-4 my-5 mx-5 md:w-96 w-72 hover:scale-110'>
              <div className='p-2 h-36'>
                 <img src={data.imgink} alt="ImageNotFound" />
              </div>
              <div className='p-2'>
              <h2>{data.name}</h2>
              <p>{data.discription}</p>

             <div className='flex flex-wrap'>
             {
                data.technologyUsed.map((tech)=>(
                  <div className='mr-2 mt-2 bg-[#1E293B] px-2 py-1'>
                    {tech.split(",")}
                  </div>
                ))
              }
             </div>
              </div>
              <div className='flex px-2 justify-between'>
                <p className='hover:scale-125'>visit</p>
                <p className='hover:scale-125'>code </p>
                </div>
            </div>
            
          )
          )
        }
      </div>
    </div>
  )
}

export default Project
