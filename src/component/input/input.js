import React, { useState } from 'react';
import './input.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function TextBox({
    inputClass,
    inputDivClass,
    inputLabel,
    inputName = "input-box",
    inputValue,
    inputType = "text",
    placeholder = "Enter value",
    inputChange = () => { '' },
    isEditable = true,
    minDate,
    maxDate,
    required = false,
    inputIcons,
    checkboxLabel
}) {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    let inputTag = () => {
        return (
            <div className="input-content" >

                {inputIcons && (
                    <div className="input-icons" style={inputLabel ? { top: '15px' } : { top: '10px' }}>
                        {inputIcons}
                    </div>
                )}

                <div className={`${inputType === 'checkbox' ? 'input-checkbox' : ''}`}>
                    <input
                        style={{ paddingLeft: inputIcons ? '36px' : '', marginTop: inputLabel ? '5px' : '' }}
                        name={inputName}
                        value={inputValue}
                        onChange={inputChange}
                        className={`${inputClass} ${!isEditable ? 'unhovered' : 'input-field'}`}
                        type={showPassword ? 'text' : inputType}
                        placeholder={placeholder}
                        disabled={!isEditable}
                        min={minDate}
                        max={maxDate}
                        required={required}
                    />
                    {checkboxLabel && <label className='input-label'>{checkboxLabel}</label>}
                </div>


                {inputType === 'password' &&
                    <button type='button' className='password-btn' onClick={handleTogglePassword}>
                        {showPassword ? <FaRegEye size={17} /> : <FaRegEyeSlash size={17} />}
                    </button>}

            </div>
        )
    }

    return (
        <div className={`input-container ${inputDivClass ? inputDivClass : ''}`}>

            {inputLabel ? (
                <label className='input-label'>
                    {inputLabel}
                    {inputTag()}
                </label>
            ) : (
                inputTag()
            )}

        </div>
    );
}
