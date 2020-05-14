import { useRef } from 'react'

export const useFocus = () => {
  const elementRef = useRef<any>()
  const setFocus = () => {
    const focused = elementRef.current && elementRef.current.focus()
    return focused
  }

  return [elementRef, setFocus]
}
