/*
Componente de Tarea (TaskItem):
Este componente deberá representar individualmente una tarea.
Mostrará el nombre de la tarea y un botón para completarla.
Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada).
*/
import { Fragment } from 'react';
import '../App.css';

export function TaskItem(props) {

  const { data: { id, task, done }, onChange } = props; // NO ES UN HOOK, SON LAS PROPIEDADES DEL COMPONENTE (data y onchange)

  return (
    <Fragment>
      <label id='label'>
        <input
          name={id}
          type='checkbox'
          defaultChecked={done}
          onChange={onChange}
        />
        <h3>{task}</h3>
      </label>
    </Fragment>
  );
};