import React from 'react'
import styled from '@emotion/styled'
import stylesComponents from '../styles/Components.module.css'

const Div = styled.div`
    width: 90%;
    margin-left: 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const InputThree = (props) => {
    return (
        <Div>
            <div>{props.number}</div>
            <div id="floatContainer" class={stylesComponents.floatContainerThree}>
                <input id="floatField" type="text" placeholder={props.placeholder} />
            </div>
            <div>{props.iconRight}</div>
        </Div>
    )
}
