import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../components/Layout'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styles from '../styles/Home.module.css'
import Plus from '../icons/plus';
import Food from '../assets/img/Rectangle_271.png'
import styled from '@emotion/styled';

import { FilterSearchBar } from '../components/FilterSearchBar';
import { RecipeTable } from '../components/RecipeTable';
import { VscChromeClose } from 'react-icons/vsc'
import { InputFloatLabel } from '../components/InputFloatLabel';
import { InputThree } from '../components/InputThree';
import { TrashIcon } from '../icons/trash';
import { PlusCircle } from '../icons/plusCircle';
import { InputPreparation } from '../components/InputPreparation';
import { Ratios } from '../components/Ratios';
import { Switch } from '../components/Switch';
import { Button } from '../components/Button';

/**CSS with styled components */

const H1 = styled.h1`
  font-size: 32px;
  margin: 0;
`
const DivImage = styled.div`
  background-image: url(${Food.src});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
const Form = styled.form`
  display: flex;
  flex-direction: row;
`
const DivRecipe = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;

`
const DivNewRecipe = styled.div`
    width: 90%; 
    margin-left: 20px;
    margin-top: ${props => props.newrecipe ? '32px' : ''};
    display: ${props => props.button ? 'flex' : ''};
    justify-content: ${props => props.button ? 'flex-end' : ''};
`
const Text = styled.p`
  font-weight: bold; 
  font-size: 14px;
`

/**End CSS with styled componentes */


export default function Home() {

  const [view, setView] = useState(true);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [selected, setSelected] = useState({ id: '1', tipo: 'Todos' })

  useEffect(() => {
    setTimeout(() => {
      setView(true)
    }, 100)
  }, [view])


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DivRecipe style={{ display: 'flex' }} onClick={toggleDrawer('right', false)}>
        <h2>Nueva receta</h2>
        <VscChromeClose size={24} />
      </DivRecipe>
      <DivNewRecipe>
        <Text>Nombre de la receta</Text>
        <InputFloatLabel
          label={'Titulo*'}
          placeholder={'P.ej. Olla caliente de carne y arroz en olla de cocción lenta'}
        />
      </DivNewRecipe>
      <DivNewRecipe newrecipe>
        <Text>Ingredientes</Text>
        <InputThree
          number='1'
          iconRight={<TrashIcon />}
          placeholder={'Tipo de Ingrediente'}
        />
        <InputThree
          number='2'
          iconRight={<PlusCircle />}
          placeholder={'Tipo de Ingrediente'}
        />
      </DivNewRecipe>
      <DivNewRecipe newrecipe>
        <Text>Preparacion</Text>
        <InputPreparation
          label={'Preparación'}
          placeholder={'Escribe los pasos...'}
        />
      </DivNewRecipe>
      <DivNewRecipe newrecipe>
        <Text>Reseñas</Text>
        <Ratios />
      </DivNewRecipe>
      <DivNewRecipe newrecipe>
        <Switch />
      </DivNewRecipe>
      <DivNewRecipe button>
        <Button color='disabled' labelText={'Crear'} />
      </DivNewRecipe>
    </Box>
  );

  return (
    <Layout title='Home - Ong Nubi' description='Pagina principal'>
      <div className={styles.contentGridDos}>
        <section>
          <DivImage />
        </section>
        <section className={styles.sectionPrincipal}>
          <H1>Recetas de Cocina</H1>
          <Form>
            <FilterSearchBar setView={setView} selected={selected} setSelected={setSelected} />
          </Form>
          <RecipeTable view={view} selected={selected} />
        </section>
      </div>

      <div className={styles.plusbutton} onClick={toggleDrawer('right', true)}>
        <Plus />
        <Fragment>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>

        </Fragment>
      </div>
    </Layout>
  )
}



