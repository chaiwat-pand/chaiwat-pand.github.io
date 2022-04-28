import React, { useState, useEffect } from 'react'
import './Activity.css'
import Timer from '../Timer/Timer'
import axios from 'axios';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

import running from '../../Images/running.png'
import swimming from '../../Images/swimming.png'
import walking from '../../Images/walk.png'
import weight from '../../Images/weight.png'
import biking from '../../Images/bike.png'
import batminton from '../../Images/batminton.png'
import jumping from '../../Images/jump.png'

function Activity() {
    const ACITIVITIES_TYPE = [
        { label: 'Running', actSrc: running },
        { label: 'Batminton', actSrc: batminton },
        { label: 'Bike', actSrc: biking },
        { label: 'Jumping', actSrc: jumping },
        { label: 'Swimming', actSrc: swimming },
        { label: 'Walking', actSrc: walking },
        { label: 'Weight', actSrc: weight },
    ]

    const [slideAct, setSlideAct] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [form, setForm] = useState({
        activityName: '',
        timestamp: '',
        hr: 0,
        mn: 0,
        calories: 0,
        description: '',
        duration: 0,
    })

    function handleChange(event) {
        const { name, value, type } = event.target
        setForm(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function next() {
        if (slideAct === (ACITIVITIES_TYPE.length - 1)) {
            setSlideAct(0)
        } else {
            const nextSide = slideAct + 1
            setSlideAct(nextSide)
        }
    }

    function previous() {
        if (slideAct === 0) {
            setSlideAct(ACITIVITIES_TYPE.length - 1)
        } else {
            const nextSide = slideAct - 1
            setSlideAct(nextSide)
        }
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    function Finish() {
        const hrTimer = Math.floor(seconds / 3600);
        const mnTimer = (Math.floor(seconds / 60)) % 60;
        const todayDate = new Date()
        const convertdate = (date) => {
            const arrayDate = todayDate.toLocaleDateString().split('/')
            const sufferDate = [arrayDate[2],
            (arrayDate[0] < 10 ? '0' : '') + arrayDate[0],
            (arrayDate[1] < 10 ? '0' : '') + arrayDate[1],]
            return sufferDate.join('-')
        }
        const newDate = convertdate(todayDate)
        console.log(newDate)
        setForm({
            ...form,
            activityName: ACITIVITIES_TYPE[slideAct].label,
            timestamp: newDate
        });
        setSeconds(0)
        setIsActive(false)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(form)
    }

    function record(event) {
        form.duration = Number(form.hr * 60) + Number(form.mn)
        axios({
            method: 'POST',
            data: {
                activityName: form.activityName,
                timestamp: form.timestamp,
                duration: form.duration,
                calories: form.calories,
                description: form.description,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/me/records",
        }).then((res) => {
            console.log(res);
            setForm({
                activityName: '',
                timestamp: '',
                hr: 0,
                mn: 0,
                calories: 0,
                description: '',
                duration: 0
            })
        })
    }

    return (
        <div className='box-right'>

            <div className="mainActivityPage">
                <div className='duration'>
                    <Timer seconds={seconds} setIsActive={setIsActive} isActive={isActive} setSeconds={setSeconds} />
                    <div className='divTree'>

                        <section className='slider'>
                            <img src='../../Images/arrow-left-color.png' className='s-select left-arrow' onClick={previous} alt='left' />
                            <img src={ACITIVITIES_TYPE[slideAct].actSrc} alt='no internet' className='image' />
                            <img src='../../Images/arrow-right-color.png' className='s-select right-arrow' onClick={next} alt='right' />
                        </section>

                        <div className='button-record'>
                            <button className='button' onClick={Finish}>
                                RECORD
                            </button>
                        </div>

                    </div>
                </div>

                <div className='activityForm'>
                    <h2>Your Activity </h2>
                    <form className='typeInput' onSubmit={handleSubmit}>
                        <div>
                            <div className='form-actType'>
                                <label>Activity&nbsp;&nbsp;</label>
                                <input type="text" value={form.activityName} name="activityName" onChange={handleChange} required />
                            </div>

                            <div className='form-date'>
                                <label>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="date" value={form.timestamp} name="date" onChange={handleChange} required />
                            </div>
                            <br />

                            <div>
                                <label id='duration'>Duration</label> <br />
                                <input type="number" value={form.hr} name="hr" onChange={handleChange} min={0} max={24} required></input>
                                <label>&nbsp;Hour&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="number" value={form.mn} name="mn" onChange={handleChange} min={0} max={59} required></input>
                                <label>&nbsp;Minute</label>
                            </div>

                            <div>
                                <label>Burnt&nbsp;&nbsp;</label>
                                <input type="number" value={form.calories} name="calories" onChange={handleChange} min={0} max={9999} />
                                <label>&nbsp;&nbsp;Calorie(s)</label>
                            </div>

                            <div>
                                <label >Description: </label> <br />
                                <textarea name="description" cols="20" rows="3" value={form.description} onChange={handleChange}></textarea>
                            </div>

                            <button type="submit" onClick={record} className="button">Submit</button>

                        </div>

                    </form>
                </div>

            </div>

        </div >
    )
}
export default Activity;