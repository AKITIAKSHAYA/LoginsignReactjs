import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';

function Login(){
    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return(
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 w-25'>
            <h2>Sign-In</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <center><button type='submit' className= 'btn btn-success w-50 rounded-0' ><Link to={'/home'}>Login</Link></button><br/></center>
                    <div className="mt-2">
                        New customer?
                        <Link to={'/signup'} className='text-danger'>Create your account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;