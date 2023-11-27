/* 
1)INICIALIZO UN HOOK CON UN ARRAY VACIO
2)RECIBO DEL FORMULARIO (TASKFORM) A TRAVES DE LA PROPIEDAD HANDLEADDITEM Y LA REENVIO
3)AGREGO LA NUEVA TAREA AL HOOK Y LA REENVIO A LA LISTA DE TAREAS (TASKLIST) MEDIANTE LAS PROPIEDADES DEL HOOK
*/
import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

const KEY = 'listApp.items';

export function App() {
  const [list, setList] = useState([]);

  useEffect(() => {

    const getPrevStore = async () => {
      const getlocalStore = await JSON.parse(localStorage.getItem(KEY));
      if (getlocalStore.length > 0) {
        setList(getlocalStore);
      }
      else {
        return;
      }
    }
    getPrevStore();
  }, []);

  useEffect(() => {

    const putActualStore = async () => {
      const itemsSaved = await localStorage.setItem(KEY, JSON.stringify(list));
      console.log(itemsSaved);
    }
    putActualStore();
  }, [list]);

  const handleAddItem = (newItem) => {
    setList([...list, newItem]);
  };
  return (
    <Fragment>
      <TaskForm handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </Fragment>
  );
};