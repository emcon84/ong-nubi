import React, { useState } from 'react'
import styled from '@emotion/styled';
import styles from '../styles/Home.module.css'
import { IoIosSearch } from 'react-icons/io'
import { Ratio, RatioSelect } from '../icons/ratios';
import { ArrowDown } from '../icons/arrowDown';
import { ArrowUp } from '../icons/arrowUp';

const Input = styled.input`
    background-color: var(--cuaternary);
    border-radius: 0 8px 8px 0;  
    border: none;
    height: 6vh;
    padding: 8px;
    width: 40vw;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
`
const IconSearch = styled(IoIosSearch)`
    align-items: center;
    background-color: var(--cuaternary);
    border-radius: 8px 0 0 8px;   
    display: flex;
    padding-left: 16px;
    height: 6vh;
`
const DivFilter = styled.div`
    align-items: center;
    background-color: var(--tertiary-lighten);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    margin-left: 10%;
    padding: 16px;
    width: 300px;
`
const DivFilterDown = styled.div`
    background-color: var(--white);
    border-radius: 16px;
    box-shadow: 0px 4px 20px rgba(30, 54, 70, 0.5);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 8px;
    position: absolute;
    top: 19%;
    width: 300px;
    z-index: 1;
`
const ArrowUpOpt = styled(ArrowUp)`
  cursor: pointer; 
`
const ArrowDownOpt = styled(ArrowDown)`
  cursor: pointer; 
`
const DivOptionsFilters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
`
const Strong = styled.strong` 
  margin-right: 8px;
  margin-left: 8px ;
`

export const FilterSearchBar = ({ setView, selected, setSelected }) => {

    const [showOptions, setShowOptions] = useState(false);

    const ListFilter = [
        { id: '1', tipo: 'Todos' },
        { id: '2', tipo: 'Activos' },
        { id: '3', tipo: 'Inactivos' },
    ];

    return (
        <>
            <IconSearch size={48} />
            <Input type="text" placeholder="Buscador.." />
            <DivFilter>
                <div style={{ marginRight: '8px' }}>Cocido antes:
                    {selected ? <Strong>{selected.tipo} </Strong> : <Strong>Todos </Strong>}
                    {showOptions ?
                        <ArrowUpOpt onClick={() => setShowOptions(false)} />
                        :
                        <ArrowDownOpt onClick={() => setShowOptions(true)} />}
                </div>
                <DivFilterDown className={!showOptions ? `${styles.hidden}` : `${styles.show}`}>
                    {ListFilter.map((filter, id) =>
                        <DivOptionsFilters key={id} onClick={() => {
                            setSelected(filter)
                            setView(false)
                        }}>{filter.tipo} {selected && filter.id === selected.id ? <RatioSelect /> : <Ratio />}
                        </DivOptionsFilters>
                    )}
                </DivFilterDown>
            </DivFilter>
        </>
    )
}

