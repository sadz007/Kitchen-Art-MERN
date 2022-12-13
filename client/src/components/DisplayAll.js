import {useState,useEffect} from 'react';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'

import background from '../assets/background.jpg'





const DisplayAll = () => {


  const [recipe,setRecipe]= useState([]);
  console.log(recipe)
  const navigate = useNavigate()

  
  useEffect (()=>{



    axios.get('http://localhost:8000/api/recipe',{
      withCredentials:true
    })

      .then((response)=>{
        localStorage.getItem('token')
        setRecipe(response.data)
        
        
  
      })
  }, [])


  return (

        <div className='w-full mb-24' >
          <div className='w-full h-[700px] bg-gray-500 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay'src={background} alt="/" />
          </div>
          <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-28'>
              <h2 className='py-8 text-2xl pt-8 text-slate-100 uppercase text-center'>Made by professional chefs.</h2>
              <h3 className='text-5xl pt-8 font-bold py-8 text-center'>Find the right recipe</h3>
              <p className='py-8 text-3xl text-slate-200 text-center'>Recipe Shared with Care and Love. Only on Kitchen Art. </p>
      
          </div>
          </div>Name
          <div className='mt-36'>
          <section className=" mx-auto px-4 sm:px-6 lg:px-4 py-2">
            <div className="text-center pb-2">
                <h2 className="text-base font-bold text-teal-800">
                    We have the best recipes to for you
                </h2>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    Check our awesome chef creations
                </h1>
            </div>
            {
              recipe.map((item, index)=>{
                return(
                <div key ={index} class="w-full flex flex-col justify-center items-center">
                  
                  <div class=" cursor-pointer flex flex-col items-center w-max-full m-5 p-5 bg-zinc-100 border rounded-lg shadow-xl shadow-yellow-500 md:flex-row md:max-w-xl hover:bg-gradient-to-r from-zinc-300 to-blue-200"
                  onClick={()=>navigate(`/recipe/${item._id}`)}>
                    {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-l-lg"
                    src={`http://localhost:8000/${item?.imageUrl}`} alt=""/> */}
                    
                  <div className="flex flex-col justify-between p-4 m-2 leading-normal ">
                    <h5 className="mb-2 p-2 text-2xl font-bold tracking-tight text-gray-900 ">Recipe Type: {item.type}</h5>
                    <h3 className="mb-2 font-normal text-gray-700 dark:text-gray-500">Recipe Name: {item.recipename}</h3>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Difficulty Level: {item.difficulty}</p>
                  </div>
                  </div>

              </div>
                )
              })
            }
            
          </section>
          </div>
          {/* {
            
          recipe.map((item,index)=>{
            return(

              <div key={index}> 
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                 
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" src=""/>
                  </div>
                <div class="text-center">
                  <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                  <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
                </div>
                </div>
                </section>

               
                
                        
        
              
              </div>
              )
            })
          } */}
        
       
        </div>
    
    )}

export default DisplayAll

// <div 
//                 className='h-full  first-line:text-bold  hover:bg-slate-300 cursor-pointer '
//                 // group-hover:bg-gradient-to-r from-black to-blue-200 
//                 onClick={()=>navigate(`/recipe/${item._id}`)}>
//                     <div >
//                       <h3 className=' text-2xl  text-slate-800 uppercase text-center group-hover:text-slate-800' >Recipe By:{props.user}.</h3> 
//                       <img className=' mx-36 rounded-xl w-30 h-64  '
//                       src={`http://localhost:8000/${item?.recipeimage}`} alt="" />
//                        {/* {console.log(`http://localhost:3000/${item.recipeimage}`)} */}
//                       <p className='  text-xl  text-slate-800 uppercase text-center group-hover:text-slate-800 '>Recipe Origin: {item.type}</p>
//                     </div>
//                 </div >          





