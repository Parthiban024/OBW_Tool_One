import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useFormik  } from 'formik';
import axios from 'axios';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const[data, setData] = useState({
      
        email:"",
        password:""
        
    });
    const [error, setError] = useState("")
   

    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/auth";
            const { data:res } = await axios.post(url,data);
            localStorage.setItem("token", res.data);
            window.location = "/"
            console.log(res.message);
        } catch (error) {
          if(error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
              ){
                 setError(error.response.data.message)
              }
        }
        
    }

    return (
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Login to Your Account</h1>
                 {/* <input
                 type="email"
                 placeholder='email'
                 name='email'
                 onChange={handleChange}
                 value={data.email}
                 required
                 className={styles.input}
                /> */}
                <div className='form-group mt-4 d-flex justify-content-center'>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
 <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          size="small"
          type="email"
                 name='email'
                 onChange={handleChange}
                 value={data.email}
                 required
                 className={styles.input}
        />
        </div>
        </div>
                 {/* <input
                 type="password"
                 placeholder='password'
                 name='password'
                 onChange={handleChange}
                 value={data.password}
                 required
                 className={styles.input}
                /> */}
                 
                 <div className='form-group mt-4 d-flex justify-content-center'>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
 <div>
        <TextField
          label="Password"
          id="outlined-size-small"
          size="small"
          type="password"
          
          name='password'
          onChange={handleChange}
          value={data.password}
          required
          className={styles.input}
        />
        </div>
        </div>

                {error && <div className={styles.error_msg} >error</div>}
                <button type='submit' className={styles.green_btn}>
                    Sign In
                </button>
              </form> 
            </div>
            <div className={styles.right}>
            <h1>New Here?</h1>
                <Link to = "/signup" >
                  <button type='button' className={styles.white_btn}>
                    Sign Up
                  </button>
                </Link>
              
            </div>
          </div>
        </div>
        
    )
};

export default Login;