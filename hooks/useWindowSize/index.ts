import { useEffect, useState } from "react"

export const useWindowSize = () => {
  const isClient = typeof window === "object"

  const initialSize = {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  }

  const [windowSize, setWindowSize] = useState(initialSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    const getSize = () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    })

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isClient]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}