import {useState} from 'react';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'



const RecipeForm = () => {

 
  const [recipename,setRecipeName] = useState('');
  const [portion,setPortion] = useState('');
  const [difficulty,setDifficulty] = useState('');
  const[ingredients,setIngredients] = useState('');
  const[time,setTime] = useState('');
  const [instruction,setInstruction] = useState('');
  const [utensils,setUtensils] = useState('')
  const [type,setType] = useState('');
  // const [imageUrl,setImageUrl] = useState('')
  const[errors,setErrors] = useState({});
  const navigate = useNavigate()



 

  const submitHandler =(e)=>{
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

  
    axios.post('http://localhost:8000/api/recipe',recipe )
      .then((response)=>{
        
        navigate('/recipe/blog')
        localStorage.getItem('token')
        
      
      })
      .catch((error)=> {
        console.log('RECIPE FOR ERRRRRRRRR',error.response.data)
        setErrors(error.response.data.errors)
      })
      
  }

  const recipeNamehandler  = (e)=>{
    setRecipeName(e.target.value)
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
  const portionHanler = (e)=>{
    setPortion(e.target.value)
    setErrors('')
  };

  // const imageUrlHandler = (e)=>{
  //   setImageUrl(e.target.files[0])
  //   setErrors('')
  // }

  return (
    <div >
      <div  className='p-16 flex flex-col items-center ' >
      <form 
      onSubmit={submitHandler} className="bg-slate-300  mt-20 shadow-xl rounded-2xl mb-4 pb-4  w-max">
        <h1 className='mb-4 font-bold text-6xl '> Tell Us Your Recipe</h1>
        <div className='mb-4 pt-6'>
          <h3 className='font-bold mb-2'>Hello Chef</h3>
          <h3 className='font-bold mb-16'>Whats on your mind today</h3>
          <div className='mb-4'>
          <label >
          <span className="block text-gray-700 text-sm font-bold mb-1">RECIPE NAME:</span>
          <input type="text" value={recipename} onChange= {recipeNamehandler}  />
          {errors.recipename?<p className='text-red-600'>{errors.recipename.message}</p>: null}
          </label>
        </div>
        </div>
        
            <div className='mb-4' > 
              <lable>
              <span className="block text-gray-700 text-sm font-bold mb-1">Difficulty(optional):</span>
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
              <input type = 'number' min='1' value={portion} onChange= {portionHanler} />     
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
          <span className="block text-gray-700 text-sm font-bold mb-1">RECIPE TYPE:</span>
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

export default RecipeForm