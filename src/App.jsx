/* 
1)INICIALIZO UN HOOK CON UN ARRAY VACIO
2)RECIBO DEL FORMULARIO (TASKFORM) A TRAVES DE LA PROPIEDAD HANDLEADDITEM Y LA REENVIO
3)AGREGO LA NUEVA TAREA AL HOOK Y LA REENVIO A LA LISTA DE TAREAS (TASKLIST) MEDIANTE LAS PROPIEDADES DEL HOOK
*/
import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

const LOCALKEY = 'listApp.items';

export function App() {
  const [list, setList] = useState([]);
  const getPrevStore = async () => {
    const getlocalStore = await JSON.parse(localStorage.getItem(LOCALKEY));
    if (getlocalStore.length > 0) {
      setList(getlocalStore);
    }
    else {
      return;
    }
  };

  useEffect(() => {
    getPrevStore();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALKEY, JSON.stringify(list));
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