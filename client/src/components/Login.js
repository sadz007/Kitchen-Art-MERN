import {useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({ email: "", password: ""});
	const [error, setError] = useState("");
    const navigate = useNavigate()







    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		
			const { data: res } = await axios.post("http://localhost:8000/api/login", data);
            
            
			localStorage.setItem("token", res.data);
            localStorage.setItem('data',data)
            console.log("TOKKEN",localStorage.token)
            
			navigate('/recipe/blog')

		}
        catch (error) {
			if (
				error.response ) {
                    // console.log(error.response.data)
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className='pt-20 '>
        <div className='p-16  flex flex-col items-center '>
            <form className="bg-slate-100 shadow-xl rounded  mb-4 pb-8 p-30 w-max"
            onSubmit={handleSubmit}>
                <h1 className='pb-10 mb-10'>Login In To Your Account</h1>
                <div className='mb-4'>
                    <label>
                        <span className="block text-gray-700 text-sm font-bold mb-1">Email</span>
                        <input type="text" name="email" value={data.email}
                    
                        onChange={handleChange}/>
                    </label>
                </div>
                <div className='mb-4'>
                    <label >
                    <span className="block text-gray-700 text-sm font-bold mb-1">Password</span>
                    <input type="text" name="password" value={data.password}
                    onChange={handleChange}/>   
                    </label>
                </div>
                
                {error && <div className='text-red-600'>{error}</div>}
                
                <button className='mt-2 w-32'>Sing In</button>

            </form>
            <div className='text-center'>
            <h2>Sign Up now and share your Recipies? </h2>
            <Link to={'/signup'}>
                <button className='w-40 bg-slate-100 shadow-xl hover:text-teal-800 hover:border-teal-400'>
                    Sign Up</button>
            </Link>
        </div>
        </div>
    
    </div>
  )
}

export default Login