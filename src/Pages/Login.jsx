import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from '@react-oauth/google';
function Login() {
    // const navigate = useNavigate()
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    //  function handleLogin(e) {
    //     e.preventDefault();

    //     // CHECK LOGIN
    //     if (
    //         email === "abcd" &&
    //         password === "1234"
    //     ) {
    //         localStorage.setItem("login", true);
    //         navigate("/home");
    //     }
    //     else {

    //         alert("Wrong Email or Password");
    //     }
    // }
    // function handleSuccess(response) {
    //     console.log(response);
    //     localStorage.setItem("login", true);
    //     navigate("/home");
    // }

    // function handleError() {
    //     console.log("Login Failed");
    // }
    
  return (
      <div className='container mt-5 pt-5 '>
            <div className=' row d-flex justify-content-center m-auto '>
                <div className='col-sm-6 m-auto '>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <form action="">
                                <div className='container- '>
                                    <h2 className='text-center login'>Login</h2>
                                    <input className='form-control my-3' type="email" placeholder='Enter Your Email' 
                                    // onChange={(e) => setEmail(e.target.value)}
                                     />
                                    <input className='form-control my-3' type="password" placeholder='Enter Your Password'
                                    //  onChange={(e) => setPassword(e.target.value)}
                                      />
                                    <div className='d-flex justify-content-center align-item-center'>
                                        <button className='btn bg-primary my-3'
                                        //  onClick={handleLogin}
                                         >Submit</button>
                                    </div>
                                    {/* <div className='my-3'>
                                        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Login