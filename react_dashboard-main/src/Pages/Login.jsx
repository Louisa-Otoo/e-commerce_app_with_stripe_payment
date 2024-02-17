import React from 'react'
import { useForm } from 'react-hook-form'
import '../components/css/Login.css'
import { useAuth } from '../Context/AdminAuth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
  const navigate = useNavigate();
  const { login, setAdmin } = useAuth();
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

 
     const onSubmission = async (data) => {
        try {
          const response = await fetch('http://localhost:9097/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": data.email,
              "password": data.password,
            }),
          }
        );
    
          // Handle the response
          if (response.ok) {
            const admin = await response.json();
          
            if (admin.id > 0) {
              login(admin);
              setAdmin(true);  
              navigate("/products");
              toast.success('Login successful');
          } else {
            console.error('Login failed'); 
          toast.error('Invalid credentials');
          }
        } else {
          console.error('Login failed');
          toast.error('Invalid credentials');
        }

        } catch (error) {
          console.error('Error during login:', error);
          toast.error('An error occurred during login');
        }
      };
  

  return (
    <>
    <div className='login-container'>
    <form className='loginForm' onSubmit={handleSubmit(onSubmission)}>
      <h2>Welcome</h2>
      <div className='login_form_group'>
        <label>Name</label>
        <input 
          type="text" 
            name="name"
            placeholder="Name" 
            {...register('name', {
              required: "Name is required",
              minLength: {value: 4, message:"Name should be at least 4 characters"}
            })} 
            />
            <small className='error-check'>
            {errors.name && <p>{errors.name.message}</p>}
          </small>
      </div>

      <div className='login_form_group'>
        <label>Email</label>
        <input 
          type="text" 
          name="email"
          placeholder="Email" 
          {...register('email', {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid email format",
          }, 
          })}
          />
          <small className='error-check'>
            {errors.email && <p>{errors.email.message}</p>}
          </small>
          
      </div>

      <div className='login_form_group'>
        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          placeholder="password"
          {...register('password', {
          required: "Password is required",
          minLength: { value: 5, message: "Password must be at least 4 characters"} 
          })}
          />
          <small className='error-check'>
            {errors.password && <p>{errors.password.message}</p>}
          </small>
          
      </div>

      <div className='login_form_group'>
        <button type="submit"> Signin </button>
      </div>

    </form>

    <ToastContainer />
    </div>
    </>
  )
}


export default Login;