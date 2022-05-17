import React, { useState } from 'react'
import styled from '@emotion/styled';
import stylesComponents from '../styles/Components.module.css'
import { StarOne, StarTwo, StarThree, StarFour } from '../icons/stars';

const Table = styled.table`
  width: 100%;
  margin-top: 32px;
`
const HeadTable = styled.th`
  padding: 16px;
  border-bottom: 1px solid var(--tertiary-lighten-two);
  text-align: left;
  color: var(--cuaternary-uno);
  font-size: 12px;
`
const Lines = styled.td`
  padding: 8px;
  border-bottom: 1px solid var(--tertiary-lighten);
  font-size: 14px;
`

export const RecipeTable = ({ view, selected }) => {

    const [recipes, setRecipes] = useState([
        { id: '01', name: 'Melodía de bayas mixtas', reviews: '3', cookedBefore: true },
        { id: '02', name: 'Sopa tailandesa de coliflor al curry rojo', reviews: '2', cookedBefore: true },
        { id: '03', name: 'Berenjena especiada crujiente', reviews: '3', cookedBefore: false },
        { id: '04', name: 'Sopa de calabaza con un toque', reviews: '2', cookedBefore: true },
        { id: '05', name: 'Ensalada de tofu carbonizado, maíz y espárragos', reviews: '4', cookedBefore: true },
        { id: '06', name: 'Pollo al pesto cremoso en una sartén y ñoquis', reviews: '4', cookedBefore: true },
        { id: '07', name: 'Pastel de pollo cremoso', reviews: '3', cookedBefore: true },
        { id: '08', name: 'Pollo y papas a la francesa', reviews: '2', cookedBefore: true },
        { id: '09', name: 'Estofado de ternera y verduras', reviews: '1', cookedBefore: true },
        { id: '10', name: 'Lasaña de calabaza, espinacas y lentejas', reviews: '4', cookedBefore: true },
        { id: '11', name: 'Soothing chicken soup', reviews: '4', cookedBefore: true },
        { id: '12', name: 'Sopa de pollo calmante', reviews: '3', cookedBefore: true },
        { id: '13', name: 'Enchiladas rapidas de carne', reviews: '2', cookedBefore: true },
        { id: '14', name: 'Pollo al disco con champignones', reviews: '3', cookedBefore: true },
        { id: '15', name: 'Horneado de brócoli con queso', reviews: '3', cookedBefore: true },
        { id: '16', name: 'Ragú de pierna de cordero con pappardelle', reviews: '2', cookedBefore: true },
    ])

    const AsignStar = (recipes) => {

        let result

        if (recipes.reviews === '1') {
            result = <StarOne />
        } else if (recipes.reviews === '2') {
            result = <StarTwo />
        } else if (recipes.reviews === '3') {
            result = <StarThree />
        } else {
            result = <StarFour />
        }
        return result;
    }

    const buildTable = () => {
        const filterType = selected.id
        switch (filterType) {
            case '1':
                return recipes
            case '2':
                return recipes.filter(item => item.cookedBefore)
            default:
                return recipes.filter(item => !item.cookedBefore)
        }
    }

    const Switch = ({ recipe }) => {
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
                    <input type='checkbox' className={stylesComponents.input}
                        onChange={() => { changeRecipeState() }} checked={recipe.cookedBefore} />
                    <span className={stylesComponents.slider}></span>
                </label>
            </>
        )
    }

    return (
        <>
            {view ?
                <Table>
                    <thead>
                        <tr>
                            <HeadTable>Nombre de la receta</HeadTable>
                            <HeadTable>Reseñas</HeadTable>
                            <HeadTable>Cocinado antes</HeadTable>
                        </tr>
                    </thead>

                    {buildTable().map((recipe, id) =>
                        <tbody key={id}>
                            <tr>
                                <Lines>{recipe.name}</Lines>
                                <Lines>{AsignStar(recipe)}</Lines>
                                <Lines>
                                    <Switch recipe={recipe} />
                                </Lines>
                            </tr>
                        </tbody>
                    )}
                </Table>
                :
                null}
        </>
    )

}