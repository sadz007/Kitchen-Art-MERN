import {useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
    const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

  const [error, setError] = useState("");
	const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/signup";
			const { data: res } = await axios.post(url, data);
      console.log('jsjsjsjsjsjsj',res)
			navigate('/recipe/blog')
			console.log(res.message);
		} catch (error) {
			if (
				error.response
        // &&
				// error.response.status >= 400 &&
				// error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



  return (
    <div className='pt-20'>
     
        
        <div className='p-16 flex flex-col items-center '>
          
            <form className="bg-slate-100 shadow-xl rounded mb-4 pb-4  w-max"
            onSubmit={handleSubmit}>
                <h2>Join The Kitchen and Share Your Recipes By Sigining In</h2>
                <h1>Create Account</h1>
                
                <div className='mb-4'>
                <label htmlFor="">
                  <span  className="block text-gray-700 text-sm font-bold mb-1">First Name</span>
                  <input type="text" name="firstName" value={data.firstName}
                  onChange={handleChange}
                  />
                </label>
                </div>
                <div className='mb-4'>
                <label htmlFor="">
                  <span className="block text-gray-700 text-sm font-bold mb-1">Last Name</span>
                  <input type="text" name="lastName" value={data.lastName}
                  onChange={handleChange}
                  />
                </label>
                </div>
                <div className='mb-4'>
                  <label htmlFor="">
                    <span className="block text-gray-700 text-sm font-bold mb-1">Email</span>
                    <input type="text" name="email" value={data.email}
                    onChange={handleChange}
                    />
                </label>
                </div>
                <div className='mb-4'>
                <label htmlFor="">
                  <span className="block text-gray-700 text-sm font-bold mb-1">Password</span>
                  <input type="text" name="password" value={data.password}
                  onChange={handleChange}
                  />
                </label>
                </div>
                {error && <div className='text-red-500' >{error}</div>}

                <button className='mt-1 w-32' >Sing Up</button>
            </form>
            <h2>Already have an account?</h2>
            <Link to={'/login'}>
              <button className='w-40'>Sign In</button>
            </Link>
        </div>
    </div>
  )
}

export default SingUp