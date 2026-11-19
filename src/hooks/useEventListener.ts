import { useEffect, useRef } from "react";

type CallbackType<T extends Event> = (event: T) => void;
type TargetType = Window | Document | HTMLElement

export function useEventListener<T extends Event>(
  eventName: string,
  callback: CallbackType<T>,
  target: TargetType = window
): void {

  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const handleEvent = (event: T): void => {
      callbackRef.current(event)
    }

    target.addEventListener(eventName, handleEvent as EventListener)

    return () => {
      target.removeEventListener(
        eventName,
        handleEvent as EventListener
      )
    }
  }, [target, eventName])
}