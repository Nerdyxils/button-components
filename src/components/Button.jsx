import React from 'react'
import './Button.css'

const Button = ({styleClass, value, icon, img }) => (
    <button className={`btn ${styleClass}`}>
        {icon && <img className={img} src={icon} alt=''/>}{value}
    </button>
)

export default Button
