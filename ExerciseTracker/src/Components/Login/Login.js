import axios from 'axios';
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
// import AuthContext from './context/AuthProvider';

function Login() {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [signInData, setSignInData] = useState({
        username: '',
        password: ''
    })

    let navigate = useNavigate()

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [signInData.username, signInData.password])

    function handleChange(event) {
        const { name, value, type } = event.target
        setSignInData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signInData);
        // setUser('');
        // setPwd('');
        // setSuccess(true);
        axios({
            method: 'POST',
            data: {
                username: signInData.username,
                password: signInData.password,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/login",
        }).then((res) => {
            console.log(res.data);
            if (res.data === 'Successfully Authenticated') {
                setSuccess(true);
                navigate('/home')
            }
        })
    }

    return (
        <div className='registrationForm'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        {/* <a href=''>Go to Home</a>  */}
                        <Link to="/">Go to Home</Link>
                    </p>
                </section>
            ) :
                (
                    <section className='section-registration'>
                        <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'}
                            aria-live='assertive'>{errMsg}</p>
                        <h1 className='signIn' ><b>SIGN-IN</b></h1>
                        <form onSubmit={handleSubmit} className='form-registration'>
                            <label htmlFor='username'>Username:</label>
                            <input
                                type='text'
                                id='username'
                                ref={userRef}
                                autoComplete='off'
                                onChange={handleChange}
                                value={signInData.username}
                                name='username'
                                required
                            />
                            <label htmlFor='password'>Password:</label>
                            <input
                                type='password'
                                id='password'
                                onChange={handleChange}
                                value={signInData.password}
                                name='password'
                                required
                            />
                            <button>Sign In</button>
                        </form>

                        <p>
                            Need an Account?<br />
                            <span>
                                {/* <a href='#'>Sign Up</a> */}
                                <Link to="/register">Sign Up</Link>
                            </span>
                        </p>
                    </section>
                )
            }

        </div>
    )
}

export default Login