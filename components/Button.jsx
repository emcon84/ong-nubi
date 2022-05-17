import React from 'react'
import styled from '@emotion/styled';

const AsignationColor = props => {

    let BgColor = '';
    let BdColor = '';

    if (props.color === 'success') {
        BgColor = 'var(--success)'
        BdColor = 'var(--success)'
    } else if (props.color === 'disabled') {
        BgColor = 'var(--cuaternary-dos)'
        BdColor = 'var(--cuaternary-dos)'
    } else {
        BgColor = 'transparent'
        BdColor = 'transparent'
    }
    return `
      background-color:${BgColor};
      border-color:${BdColor};`;
}

const ButtonStyled = styled.button`
    ${AsignationColor};
    /* padding: 5px; */
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;
    width: 110px;
    height: 48px;
    border: none;
    margin-top: 16px;
    
`
const H4TextButton = styled.h4`
    font-size: 14px;
    color: var(--white);
    padding-left: 32px;
    padding-right: 32px;
`


export const Button = (props) => {
    return (
        <ButtonStyled color={props.color} type={props.type}{...props}>
            {/* Lugar para a futuro colocar spinner de loadding */}
            {/* {props.loading ? 
            <SpinnerButton />
          : */}
            <>
                {props.iconLeft ? props.iconLeft : ' '}
                <H4TextButton font={props.font} size={props.size} color={props.color} type={props.type}>{props.labelText}</H4TextButton>
                {props.iconRight ? props.iconRight : ''}
            </>
            {/* } */}
        </ButtonStyled>
    );
};

