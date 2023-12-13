/* 
Componente de Formulario (TaskForm):
Este componente contendrá un formulario para agregar nuevas tareas.
Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva task a
la lista principal.
1)INICIALIZO UN HOOK CON UN STRING VACIO
2)CAPTURO EL DATO QUE INGRESA EL USUARIO MEDIANTE EL INPUT
3)EL VALOR CAPTURADO POR EL INPUT SE ALMACENA EN HANDLESUBMIT, SE ASIGNA A HANDLEADDITEM Y POR ULTIMO SE VUELVE A PONER TASK COMO STRING VACIO
*/
import { Fragment, useState } from 'react';

export function TaskForm(props) {

  const { handleAddItem } = props; // NO ES UN HOOK, SON LAS PROPIEDADES DEL COMPONENTE

  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddItem({ done: false, id: new Date().getTime().toString(), task });
    setTask('');
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button disabled={task.trim().length > 0 ? '' : 'disabled'}> Agregar </button>
      </form>
    </Fragment>
  );
};