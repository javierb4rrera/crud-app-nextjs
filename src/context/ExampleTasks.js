import { v4 as uuid } from 'uuid'

function generateTareasEjemplo(numeroTareas) {
  let tareasEjemplo = []
  for(i = 0; i < numeroTareas; i++) {
    tareasEjemplo.push({
      id: uuid(),
      title: `Tarea ${i+1}`,
      description: `Descripción de la tarea ${i+1}`
    })
  }
  return tareasEjemplo
}

export default generateTareasEjemplo
