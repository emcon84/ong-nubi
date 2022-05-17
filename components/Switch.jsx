import React from 'react'
import stylesComponents from '../styles/Components.module.css'

export const Switch = ({ recipe }) => {
    const changeRecipeState = () => {
        setRecipes(recipes.map(item => {
            if (item.id === recipe.id) {
                item.cookedBefore = !item.cookedBefore
            }
            return item
        }))
    }

    return (
        <>
            <label className={stylesComponents.switch}>
                <input type='checkbox' className={stylesComponents.input} />
                <span className={stylesComponents.slider}></span>
            </label>
        </>
    )
}
