import React, { useState } from "react"
import passwordService from "../../services/password"
import PasswordStrength from "../PasswordStrength/PasswordStrength"
import "./password.css"

const Password = () => {

    const [password, setPassword] = useState('')
    const [strength, setStrength] = useState({ score: 0 })

    const handleChange = async (event) => {
        event.preventDefault()
        setPassword(event.target.value)
        try {
            if (password.length > 0) {
                const response = await passwordService.create(password)
                setStrength(response)
            } else {
                setStrength({ score: 0 })
            }
        } catch(error) {
            console.log('there seems to be a problem contacting the password strength checker API')
        }
    }

    return (
        <div className="App">
            <p className="question">Is your password strong enough?</p>
            <input 
            value={password}
            onChange={handleChange}
            />
            <PasswordStrength strength={strength}/>
        </div>
    )
}

export default Password