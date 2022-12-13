import {useState,useEffect}from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
// import io from 'socket.io-client'


const UpdateRecipe = (props) => {
  const {id} = useParams()
  const [recipename,setRecipeName] = useState('');
  const [portion,setPortion ] = useState('');
  const [difficulty,setDifficulty] = useState('');
  const[ingredients,setIngredients] = useState('');
  const[time,setTime] = useState('');
  const [instruction,setInstruction] = useState('');
  const [utensils,setUtensils] = useState('')
  const [type,setType] = useState('');
  // const [imageUrl,setImageUrl] = useState('')
  const[errors,setErrors] = useState({});
  const navigate = useNavigate()

 
  

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/recipe/${id}`)
      .then((response)=>{
        console.log(response.data)
        setRecipeName(response.data.recipename)
        setPortion(response.data.portion)
        setDifficulty(response.data.difficulty)
        setIngredients(response.data.ingredients)
        setTime(response.data.time)
        setInstruction(response.data.instruction)
        setUtensils(response.data.utensils)
        setType(response.data.type)
        // setImageUrl(response.data.imgaeUrl)
        // console.log(setRecipeImage)
      })
      .catch((err)=>{
        console.log(err)
        
      });
  },[id])

  const updateHandler =((e)=>{
    e.preventDefault();

    const recipe= {
      recipename,
      portion,
      difficulty,
      ingredients,
      time,
      instruction,
      utensils,
      type

    }

    axios.put(`http://localhost:8000/api/recipe/${id}` , recipe)
    .then((response)=>{
      // console.log(response)
      navigate('/recipe/blog')
      
    })
    .catch((err)=>{
        console.log(err.response.data.errors.errors)
        setErrors(err.response.data.errors)

    })
  })


  const Namehandler  = (e)=>{
    setRecipeName(e.target.value)
    setErrors('')
  };
  const Portionhandler  = (e)=>{
    setPortion(e.target.value)
    setErrors('')
  };

  const levelHandler = (e)=>{
    setDifficulty(e.target.value)
    setErrors('')
  };

  const ingredientHandler  = (e)=>{
    setIngredients(e.target.value)
    setErrors('')
  };

  const timeHandler = (e)=>{
    setTime(e.target.value)
    setErrors('')
  };
  const instructionHandler = (e)=>{
    setInstruction(e.target.value)
    setErrors('')

  };
  const utensilHandler = (e)=>{
    setUtensils(e.target.value)
    setErrors('')
  }
  const typeHandler = (e)=>{
    setType(e.target.value)
    setErrors('')
  };
  // const imageUrlHandler = (e)=>{
  //   setImageUrl(e.target.files[1])
  //   setErrors('')
  // }


  return (
    <div >
      <div  className='p-16 flex flex-col items-center ' >
      <form encType='multipart/form-data'
      onSubmit={updateHandler} className="bg-slate-300  mt-20 shadow-xl rounded-2xl mb-4 pb-4  w-max">
        <h1 className='mb-4 font-bold text-6xl '> Edit Your Recipe</h1>
        <div className='mb-4 pt-6'>
          <h3 className='font-bold mb-2'>Hello Chef</h3>
          <h3 className='font-bold mb-16'>Want to make some changes</h3>
          <div className='mb-4'>
          <label >
          <span className="block text-gray-700 text-sm font-bold mb-1">RECIPE NAME:</span>
          <input type="text" value={recipename} onChange= {Namehandler}  />
          {errors.recipename?<p className='text-red-600'>{errors.recipename.message}</p>: null}
          </label>
        </div>
        </div>
        
            <div className='mb-4' > 
              <lable>
              <span className="block text-gray-700 text-sm font-bold mb-1">Difficulty:</span>
              <select 
              className='box-border w-32 mt-2 border-1 '
              value={difficulty}
              onChange={levelHandler}>
                <option>Select It</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              </lable>
              {errors.difficulty?<p className='text-red-600'>{errors.difficulty.message}</p>: null} 
              
              

            </div>
            <div className='mb-4'>
              <label >
              <span className="block text-gray-700 text-sm font-bold mb-1">PREP TIME:</span>
              <input type = 'number' min='1' value={time} onChange= {timeHandler} />     
              </label>   
              {errors.time?<p className='text-red-600'>{errors.time.message}</p>: null} 
            </div>
            <div className='mb-4'>
              <label >
              <span className="block text-gray-700 text-sm font-bold mb-1">Portion Size:</span>
              <input type = 'number' min='1' value={portion} onChange= {Portionhandler} />     
              </label>  
              {errors.portion?<p className='text-red-600'>{errors.portion.message}</p>: null} 
            </div>
      
        <div className='mb-4 ' >
          <lable >
          <span className=" block text-gray-700 text-sm font-bold mb-1">INGREDIENTS:</span>
          <textarea type='text'  value={ingredients} onChange={ingredientHandler}/>
          </lable>
          {errors.ingredients?<p className='text-red-600'>{errors.ingredients.message}</p>: null}
        </div>
        <div className='mb-4 ' >
          <lable >
          <span className=" block text-gray-700 text-sm font-bold mb-1">INSTRUCTIONS:</span>
          <textarea type='text'  value={instruction} onChange={instructionHandler}/>
          </lable>
          {errors.instruction?<p className='text-red-600'>{errors.instruction.message}</p>: null}
        </div>
        <div className='mb-4 '>
          <label>
          <span className="block text-gray-700 text-sm font-bold mb-1">UTENSILS:</span>
          <input type='text' value={utensils} onChange= {utensilHandler} />
          </label>
          {errors.utensils?<p className='text-red-600'>{errors.utensils.message}</p>: null}
        </div>
        <div className='mb-4'>
          <label >
          <span className="block text-gray-700 text-sm font-bold mb-1">RECIPE Type:</span>
          <input type='text' value={type} onChange= {typeHandler}/>
          </label>
          {errors.type?<p className='text-red-600'>{errors.type.message}</p>: null}
        
        </div>
        {/* <div>
          <label>
            <span className="block text-gray-700 text-sm font-bold mb-1">Upload Image(Requied*)</span>
            <input type='file' filename = 'imageUrl'
            onChange={imageUrlHandler}
            />
          </label>
          {errors.imageUrl?<p className='text-red-600'>{errors.imageUrl.message}</p>: null}
        </div> */}
        <div style={{paddingTop:'15px'}}>
            <button className='w-32' >Post It</button>
        </div>
      </form>
      </div>
    </div>
  )
}


export default UpdateRecipe