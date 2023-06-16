import React from 'react'
import { useNavigate, useNavigation } from 'react-router'

function LoginPage() {
    const navigate = useNavigate()
    const moveToHome = () => {
        navigate('/homes')
        console.log("hellow")
    }
    return (
        <div>
            Login Page<br />
            <button onClick={moveToHome}>Home Page </button>
        </div>

    )
}
export default LoginPage