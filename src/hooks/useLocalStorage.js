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
    if(state.length > 0)
      localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}