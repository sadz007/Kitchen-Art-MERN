import React from 'react'
import applepie from '../assets/applepie.jpg'
import chef from '../assets/chef.jpeg'
import bake from '../assets/bake.jpg'
import sort from '../assets/sort.jpg'
import spice from '../assets/spice.jpg'
import cook from '../assets/cook.jpg'
import sweet from '../assets/sweet.jpg'
import chef1 from '../assets/chef1.jpg'


const Main = () => {
  return (
    

    <div className='pl-14'>
        <div className='w-full h-[800px]  absolute '>
            <div className='pt-28    '>
              <div className='flex flex-row flex-wrap gap-1 ml-36   '>

                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay  '
                    src={bake} alt='/'/>
                  </div>

                  <div className='bg-slate-500 rounded-xl ' >
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={sort} alt='/'/>

                  </div>  

                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={chef} alt='/'/>
                  </div>

                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={applepie} alt='/'/>
                  </div>

                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={spice} alt='/'/>
                  </div>


                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={cook} alt='/'/>
                  </div>  

                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={sweet} alt='/'/>
                  </div>


                  <div className='bg-slate-500 rounded-xl'>
                    <img className=' w-96 h-full bg-cover shadow-2xl rounded-md mix-blend-overlay'
                    src={chef1} alt='/'/>
                  </div>
              </div>
            </div>
          </div>
          <div className='max-w-[1240px] mx-auto text-white relative py-20'>
            
            <div className='px-34 pt-[308px]'>
              <h1 className='py-2 text-6xl text-zinc-100 text-center font-bold'>Check Out Recipes on Kitchen Art. </h1>
              <h1 className='py-2 text-2xl text-yellow-200 text-center font-bold'>Create Account To Share Best Recipies </h1>
            </div>
          </div>
         
      <div>
      </div>        
    </div>
  )
}

export default Main