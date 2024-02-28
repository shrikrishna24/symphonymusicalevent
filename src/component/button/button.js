import React from 'react'
import './button.css'

export default function Button({ btntype, btnName, btnTagClass, btnValue, btnClick = () => { }, isEditable, btnTitle, btnClass = "primary" }) {

    return (
        <div className={
            btnClass === "primary"
                ? "btn-primary"
                : "btn-secondary"
        }>
            <button type={btntype} className={btnTagClass ? btnTagClass : ''} disabled={isEditable} name={btnName} value={btnValue} onClick={btnClick} style={isEditable ? { backgroundColor: '#175398', color: 'white' } : {}}>
                {btnTitle}
            </button>
        </div>
    )
}
