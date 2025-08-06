"use client"
import './home.css';
import React,{useRef} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

// TypeScript interface for form data
interface FormData {
  fname: string;
  lname: string;
  age: string;
  email: string;
  mobileNum: string;
}

export default function Home() {
  const {register, reset, handleSubmit, formState:{errors}} = useForm<FormData>();
  
  //Method for sending the form data to the server
  function userData(data: FormData) {
    const api_url = process.env.NEXT_PUBLIC_CREATE_USER;
    
    // Check if environment variable is set
    if (!api_url) {
      toast.error('API URL not configured. Please check your environment variables.');
      return;
    }
    
    axios.post(api_url,data)
      .then((res) => {
        console.log("Response is ", res);
        toast.success('User created successfully!');
        reset();
      })
      .catch((err) => {
        console.log("Error is ",err);
        toast.error('Something went wrong. Please try again.');
      });
  }

  return (
    <>
    <h1 id='heading'>Welcome to Home Page</h1>

    <form onKeyDown={(e) => {
      if(e.key == 'Enter') {
        e.preventDefault();
      }
    }} onSubmit={handleSubmit(userData)}>
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          placeholder='Enter your first name' 
          {...register('fname', {
            required: {
              value: true,
              message: "This field is required"
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only alphabets are allowed"
            }
          })}
        />
        <br/>
        {errors.fname && <span className='err-msg'>{errors?.fname?.message?.toString()}</span>}
      </div>
      <br/>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          placeholder='Enter your last name' 
          {...register('lname', {
            required: {
              value: true,
              message: "This field is required"
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only alphabets are allowed"
            }
          })}
        />
        <br/>
        {errors.lname && <span className='err-msg'>{errors.lname.message?.toString()}</span>}
      </div>
      <br/>
      <div>
        <label>Age:</label>
        <input 
          type="number" 
          placeholder='Enter your age' 
          {...register('age', {
            required: {
              value: true,
              message: "Age is required"
            },
            min: {
              value: 1,
              message: "Age must be at least 1"
            },
            max: {
              value: 120,
              message: "Age must be less than 120"
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numbers are allowed"
            }
          })}
        />
        <br/>
        {errors.age && <span className='err-msg'>{errors.age.message?.toString()}</span>}
      </div>
      <br/>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          placeholder='Enter your email' 
          {...register('email', {
            required: {
              value: true,
              message: "Email is required"
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format"
            }
          })}
        />
        <br/>
        {errors.email && <span className='err-msg'>{errors.email.message?.toString()}</span>}
      </div>
      <br/>
      <div>
        <label>Mobile Number:</label>
        <input 
          type="text" 
          placeholder='Enter your mobile number' 
          {...register('mobileNum', {
            required: {
              value: true,
              message: "Mobile number is required"
            },
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number"
            }
          })}
        />
        <br/>
        {errors.mobileNum && <span className='err-msg'>{errors.mobileNum.message?.toString()}</span>}
      </div>
      <br/>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
}
