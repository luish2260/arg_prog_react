/* 
1)INICIALIZO UN HOOK CON UN ARRAY VACIO
2)RECIBO DEL FORMULARIO (TASKFORM) A TRAVES DE LA PROPIEDAD HANDLEADDITEM Y LA REENVIO
3)AGREGO LA NUEVA TAREA AL HOOK Y LA REENVIO A LA LISTA DE TAREAS (TASKLIST) MEDIANTE LAS PROPIEDADES DEL HOOK
*/
import { Fragment, useState } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export function App() {
  const [list, setList] = useState([]);
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