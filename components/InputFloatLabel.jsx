import React from 'react'
import stylesComponents from '../styles/Components.module.css'


export const InputFloatLabel = (props) => {
    return (
        <>
            <div id="floatContainer" class={stylesComponents.floatContainer}>
                <label for="floatField" className={stylesComponents.label}>{props.label}</label>
                <input id="floatField" type="text" placeholder={props.placeholder} />
            </div>
        </>
    )
}

