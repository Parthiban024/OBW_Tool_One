import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image_1 from '../images/image _1.png'
import login_image from '../images/login_image.png';
import Rectangle_1 from '../images/Rectangle _1.png';
import Rectangle_6 from '../images/Rectangle _6.png';
import Login_image_2 from '../images/Login_image_2.svg';


const Signup = () => {
    const[data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:"",

        //yup validation
});
 
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({ currentTarget:input }) => {
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/users";
            const { data:res } = await axios.post(url,data);
            navigate("/login")
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
        // <div className={styles.signup_container}>
        //   <div className={styles.signup_form_container}>
        //     <div className={styles.left}>
        //         <h1>Welcome Back</h1>
        //         <Link to = "/login" >
        //           <button type='button' className={styles.white_btn}>
        //             Sign in
        //           </button>
        //         </Link>
        //     </div>
        //     <div className={styles.right}>
        //       <form className={styles.form_container} onSubmit={handleSubmit}>
        //         <h1>Create Account</h1>
        //         <input
        //          type="text"
        //          placeholder='Full Name'
        //          name='name'
        //          onChange={handleChange}
        //          value={data.name}
        //          required
        //          className={styles.input}
        //         />
        //          <input
        //          type="email"
        //          placeholder='email'
        //          name='email'
        //          onChange={handleChange}
        //          value={data.email}
        //          required
        //          className={styles.input}
        //         />
        //          <input
        //          type="password"
        //          placeholder='password'
        //          name='password'
        //          onChange={handleChange}
        //          value={data.password}
        //          required
        //          className={styles.input}
        //         />
        //            <input
        //          type="password"
        //          placeholder='confirmpassword'
        //          name='confirmpassword'
        //          onChange={handleChange}
        //          value={data.password}
        //          required
        //          className={styles.input}
        //         />
        //         {error && <div className={styles.error_msg} >error</div>}
        //         <button type='submit' className={styles.green_btn}>
        //             Sign Up
        //         </button>
        //       </form>
        //     </div>
        //   </div>
        // </div>
        

        
       <div className='row'>
       <div className='col-1'></div>
       <div className='col-5 mt-5'>
       <img className='obw_logo' src={Rectangle_1} alt="BigCo Inc. logo" />
       <img className='Login_image_2' src={Rectangle_6} alt="BigCo Inc. logo" />
       </div>
       <div className='col-5 mt-5'>
     <div className='container input_login'>
      <div className=' d-flex justify-content-center'>
      <i className="fas fa-light fa-user color_2"></i>
      
      {/* <FontAwesomeIcon icon="fas fa-duotone fa-user" className='color' /> */}
      </div>
      <div>
       <form autoComplete='off' onSubmit={handleSubmit}>
         <div autoComplete='off' className='login_form'>
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
           label="Full Name"
           id="outlined-size-small"
           size="small"
           className='email_login'
           type="text"
           name='name'
           onChange={handleChange}
           value={data.name}
           required
         />
         </div>
         </div>
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
           className='email_login'
           type="email"
           name='email'
           onChange={handleChange}
           value={data.email}
           required
         />
         </div>
         </div>
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
           className='email_login'
           type='password' 
           name='password'
           onChange={handleChange}
           value={data.password}
           required
         />
         </div>
         </div>
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
           label="Confrim Password"
           id="outlined-size-small"
           size="small"
           className='email_login'
           type='password' 
           name='confirmpassword'
           onChange={handleChange}
           value={data.confirmpassword}
           required
         />
         </div>
         </div>
         </div>
<div className='d-flex justify-content-center'>
  {error && <div className='d-flex justify-content-center error mt-2'>error</div>}
  </div>
               <div className='d-flex justify-content-center'>
               <button type='submit' className='btn btn-primary mt-4 log_btn mb-3'>
                  Sign Up
              </button>
              </div>
       </form>
       </div>
       <div className='d-flex justify-content-center log_fgtpwd'>
       <p className='d-flex justify-content-center'>Already have an account?</p>&nbsp;
              <Link to = "/login" className=''>
                {/* <button type='button' className='btn btn-primary mt-2 log_btn mb-3'> */}
              <parent href='#'className=' mb-3'>Sign In</parent>
                  
               {/* </button> */}
               </Link>
              
            </div>
 </div> 
 </div>
 <div className='col-1'></div>
 </div>
    )
};

export default Signup;