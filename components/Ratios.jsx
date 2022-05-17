import React from 'react'
import styled from '@emotion/styled'
import { RatioRecipe, RatioRecipeSelect } from '../icons/ratios'



const SectionRatios = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`
const DivRatios = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Text = styled.p`
    font-size: 14px;
    margin: 8px;

`

export const Ratios = () => {
    return (
        <SectionRatios>
            <DivRatios>
                <RatioRecipe />
                <Text>1</Text>
            </DivRatios>

            <DivRatios>
                <RatioRecipe />
                <Text>2</Text>
            </DivRatios>

            <DivRatios>
                <RatioRecipeSelect />
                <Text>3</Text>
            </DivRatios>

            <DivRatios>
                <RatioRecipe />
                <Text>4</Text>
            </DivRatios>

        </SectionRatios>
    )
}
