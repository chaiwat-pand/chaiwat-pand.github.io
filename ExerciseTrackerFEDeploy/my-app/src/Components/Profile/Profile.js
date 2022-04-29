import React, { useEffect, useState } from 'react'
import '../EditProfile/EditProfile.css'
import '../DataProfile/DataProfile.css'
import profileImg from '../../Images/PROFILE.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Profile() {
    const [toEditUserInfo, setToEditUserInfo] = useState(false)

    const [profileData, setProfileData] = useState({
        displayName: '',
        aboutMe: '',
        favorite: '',
        caloriesGoal: '',
        durationGoal: ''
    })

    const [data, setData] = useState(null)

    function handleChange(event) {
        const { name, value, type } = event.target
        setProfileData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleEditUserInfo(event) {
        setToEditUserInfo(prevState => !prevState)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(profileData)
    }

    function editProfileAPI() {
        axios({
            method: 'PUT',
            data: {
                favorite: profileData.favorite,
                aboutMe: profileData.aboutMe,
                displayName: profileData.displayName,
                // durationGoal: profileData.durationGoal,
                // caloriesGoal: profileData.caloriesGoal,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/edit",
        }).then((res) => {
            console.log(res)
        })
    }

    const editProfileData = () => {
        editProfileAPI();
    };

    let navigate = useNavigate()
    function logOut() {
        console.log(profileData)
        axios({
            method: "DELETE",
            withCredentials: true,
            url: "http://localhost:4000/users/logout",
        }).then((res) => {
            console.log(res)
        });
        navigate('/login')
    }

    useEffect(() => {
        let isMounted = true;
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/users/me",
        }).then((res) => {
            setProfileData(res.data)
        })
    }, [data])

    return (
        <div className='profile'>
            <div>
                <img src={profileImg} alt='profile-pic' className='pro-pic' />
            </div>

            {toEditUserInfo ?
                <form onSubmit={handleSubmit}>
                    <div className='data-profile-edit'>

                        <input
                            type='text'
                            className='editProfileUserName'
                            placeholder='Profile Name'
                            name='displayName'
                            value={profileData.displayName}
                            onChange={handleChange}
                            autoComplete="off"
                        />

                        <div className='data-profile-user'>
                            <textarea
                                type='text'
                                className='editProfile'
                                placeholder='Fun Fact'
                                name='aboutMe'
                                value={profileData.aboutMe}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='data-profile-user'>
                            <textarea
                                type='text'
                                className='editProfile'
                                placeholder='Favorite Sport'
                                name='favorite'
                                value={profileData.favorite}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <button className='edit-profile' onClick={editProfileAPI}>Save</button>
                </form>
                :
                <div className="data-profile">

                    {profileData.displayName}

                    <div className="data-profile-user">
                        {profileData.aboutMe}
                        <br />

                    </div>

                    <div className="data-profile-user">
                        {profileData.favorite}
                        <br />

                    </div>

                </div>}

            <button type="button" className="edit-profile" onClick={handleEditUserInfo}>
                {toEditUserInfo ? 'Done' : 'Edit'}
            </button>

            <button type="button" onClick={logOut} className="edit-profile">
                Logout
            </button>

        </div>
    )

}

export default Profile;