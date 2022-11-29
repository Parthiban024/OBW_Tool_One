import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useFormik  } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import axios from 'axios';
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


const Forget = () => {
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
            const { data:res } = await axios.post( url, data );
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

       <div className='row'>
       <div className='col-1'></div>
       <div className='col-5 mt-5'>
       <img className='obw_logo' src={Rectangle_1} alt="BigCo Inc. logo" />
       <img className='Login_image_2' src={Login_image_2} alt="BigCo Inc. logo" />
       </div>
       <div className='col-5 mt-5'>
     <div className='container input_login'>
      <div className=' d-flex justify-content-center'>
      <i className="fas fa-light fa-user color_3"></i>
      
      {/* <FontAwesomeIcon icon="fas fa-duotone fa-user" className='color' /> */}
      </div>
      <div>
       <div autoComplete='off' onSubmit={handleSubmit}>
         <div className='login_form'>
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
         </div>

  {error && <div className='d-flex justify-content-center' >error</div>}
               <div className='d-flex justify-content-center'>
                <Link to = "/main">
               <button type='submit' className='btn btn-primary mt-4 log_btn mb-3'>
                  Reset
              </button>
              </Link>
              </div>
       </div>
       </div>
       <div className='d-flex justify-content-center log_fgtpwd'>
       <p className='d-flex justify-content-center'>Back to Homepage</p>&nbsp;
              <Link to = "/login" className=''>
                {/* <button type='button' className='btn btn-primary mt-2 log_btn mb-3'> */}
              <parent href='#'className=' mb-3 get_new'>Click here</parent>
                  
               {/* </button> */}
               </Link>
              
            </div>
 </div> 
 </div>
 <div className='col-1'></div>
 </div>
    )

    
};

export default Forget;