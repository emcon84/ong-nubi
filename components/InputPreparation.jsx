import React from 'react'
import stylesComponents from '../styles/Components.module.css'


export const InputPreparation = (props) => {
    return (
        <>
            <div id="floatContainer" class={stylesComponents.floatContainerPreparation}>
                <label for="floatField" className={stylesComponents.label}>{props.label}</label>
                <textarea id="floatField" type="text" placeholder={props.placeholder} />
            </div>
        </>
    )
}
