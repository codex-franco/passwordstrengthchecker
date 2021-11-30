import React from "react"
import "./passwordStrength.css"

const PasswordStrength = ({ strength }) => {

    
    const level = () => {
        if (strength.score === 0) {
            return 'very weak'
        } else if (strength.score === 1) {
            return 'weak'
        } else if (strength.score === 2) {
            return 'medium'
        } else if (strength.score === 3) {
            return 'strong'
        } else if (strength.score === 4) {
            return 'very strong'
        } else return 'very weak'
    }

    return (
        <div className="strength">
            <div className="meter">
                <progress 
                className={`meter-progress strength-${level()}`}
                value={strength.score}
                max="4"
                />
            </div>
            <br /><br />
            {
                strength.guessTimeString && (
                    <div className="details">
                        <strong>Your password is {level()}!</strong>
                        <br/><br/>
                        <p>It will take {strength.guessTimeString} to guess your password. {strength.warning}</p>
                        {
                            strength.suggestions && (
                                <p>{strength.suggestions}</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default PasswordStrength