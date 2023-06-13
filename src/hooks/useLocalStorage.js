import { useState, useEffect } from "react"

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    const value = localStorage.getItem(key)
    const tasks = JSON.parse(value)
    if(tasks) {
      setState(tasks)
    }
  }, [])

  useEffect(() => {
    // problema: si el array de tareas está vacío, no se guarda en localStorage
    // por tanto, siempre habrá un elemento en localStorage
    // if(state.legth > 0)
    if(state)
      localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}