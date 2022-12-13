import {useState, useEffect} from 'react';
import {useParams, useNavigate,Link} from'react-router-dom';
import axios from 'axios';



const OneRecipe = () => {
  const {id} = useParams()
  const[oneOnly,setOneOnly] = useState('')

  const navigate = useNavigate()
 


  useEffect(() =>{
    axios.get(`http://localhost:8000/api/recipe/${id}`)
      .then((response)=>{
        console.log(response.data)
        
        setOneOnly(response.data)
      })
      .catch((err)=>{
        console.log(err.response.data)
      })
  },[id])

  const deleteHandler = (recipeId)=>{
    axios.delete(`http://localhost:8000/api/recipe/${recipeId}`)
      .then((response)=>{
      
        setOneOnly(recipeId)
        navigate('/recipe/blog')
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
  }



  return (
    <div className='w-[1500px] pl-72 p-10'>
      <div className='flex items-center w-86 p-20 bg-white border border-gray-200 rounded-lg shadow-xl shadow-yellow-500 dark:bg-gray-800 dark:border-gray-800'>
      <div className='card pr-20 pt-10 '>

        <div className="p-10 max-w-6xl h-max bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
          <>
          <Link to={'/recipe/blog'} className='font-bold  text-2xl text-green-700'> Go To Blog Page</Link>
            {/* <img className="rounded-t-lg" src={`http://localhost:8000/${oneOnly?.imageUrl}`} alt="" /> */}
        </>
      <div className="p-10">

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Recipe Name: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.recipename}</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Utensils: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.utensils}</p>
              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Portion Size: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.poryion}</p>
              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Time: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.time}mins</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Type:</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.type}</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Difficulty level: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.difficulty}</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Ingredients: </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
              {oneOnly.ingredients}</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Instructions: </p>
              <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-800">
              {oneOnly.instruction}</p>

              <p className="mb-1 font-bold text-lg text-gray-700 dark:text-gray-400">
              Recipe Type: </p>
              <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-800">
              {oneOnly.type}</p>


              </div>
              <div className='flex alitem'>
              
                <div className=' mb-4 px-4 flex-1 '>
                  <button onClick={(e)=>deleteHandler(id)}
                  className='bg-red-300 hover:bg-zinc-300 hover:text-red-500 text-slate-700 w-32 rounded-xl'
                  >Delete</button>
                </div>
                <div className='flex-1  '>
                  <button className='bg-green-200 hover:bg-zinc-300 hover:text-green-500 text-slate-700 w-32 rounded-xl'
                  onClick={()=>navigate(`/recipe/edit/${id}`)}
                  >Edit</button>
                </div>
              </div>
    {/* <div>
      <button onClick={(e)=>navigate('/recipe/blog')}
      className='bg-yellow-500 hover:bg-yellow-600 text-slate-700  rounded-xl'
      >Go To Blog</button>
    </div> */}
</div>
</div>

      </div>
     
</div>

         
  )
  
  
}

export default OneRecipe



