import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Signup.css'
import axios from 'axios'
// import { Navigate, Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    // let navigate = Navigate();

    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        matchPassword: '',
    })

    function handleChange(event) {
        const { name, value, type } = event.target
        setRegisterData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }


    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(registerData.username));
    }, [registerData.username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(registerData.password));
        setValidMatch(registerData.password === registerData.matchPassword);
    }, [registerData.password, registerData.matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [registerData.username, registerData.password, registerData.matchPassword])

    function handleSubmit(event) {
        event.preventDefault();
        console.log(registerData)
        axios({
            method: 'POST',
            data: {
                username: registerData.username,
                password: registerData.password,
            },
            withCredentials: true,
            url: 'http://localhost:4000/users/register',
        }).then((res) => {
            console.log(res);
            if (res.data === 'User Created') {
                // navigate('login')
                setSuccess(true)
            }
        })
    }

    return (
        <div className='registrationForm'>
            {/* This will navigate to sign in page, to be editted */}
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        {/* <a href="#">Sign In</a> */}
                        <Link to="/login">Sign In</Link>
                    </p>
                </section>
            ) : (
                <section className='section-registation'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='register'><b>REGISTER</b></h1>
                    <form onSubmit={handleSubmit} className='form-registration'>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !registerData.username ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={handleChange}
                            value={registerData.username}
                            name='username'
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && registerData.username && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !registerData.password ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            value={registerData.password}
                            name='password'
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && registerData.matchPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !registerData.matchPassword ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={handleChange}
                            value={registerData.matchPassword}
                            name='matchPassword'
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/* <a href="#">Sign In</a> */}
                            <Link to="/login">Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default Register