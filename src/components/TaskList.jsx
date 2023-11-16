/*
Componente de Lista de Tareas (TaskList):
Este componente deberá mostrar la lista de tareas.
Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
Cada tarea debe representarse mediante un componente TaskItem 
*/
import { Fragment } from 'react';
import { TaskItem } from './TaskItem';

export function TaskList(props) {

  const { list, setList } = props; // NO ES UN HOOK, SON LAS PROPIEDADES DEL COMPONENTE
  // LA LINEA ANTERIOR SIRVE PARA TRABAJAR CON LAS PROPS DEL PROPIO COMPONENTE
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map(item => ({ ...item, done: item.id === name ? checked : item.done }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => ( // MAP DE TASKSITEMS MOSTRADOS EN TASKLIST
    <TaskItem key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <Fragment>
      {list.length ? chk : null}
      {list.length ? (<p><button onClick={onClickRemoveItem}> ELIMINAR LAS TAREAS YA REALIZADAS </button></p>) : 'SIN TAREAS POR EL MOMENTO'}
    </Fragment>
  );
}