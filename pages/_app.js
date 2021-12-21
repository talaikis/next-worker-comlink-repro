import React, { useEffect, useRef, useCallback } from 'react'
import * as ComLink from 'comlink'

export default function App ({ Component, pageProps, err }) {
  const workerRef = useRef()
  const apiRef = useRef()

  useEffect(() => {
    workerRef.current = new Worker(new URL('../worker.js', import.meta.url))
    apiRef.current = ComLink.wrap(workerRef.current)
    return () => {
      workerRef.current.terminate()
    }
  }, [])

  const logout = useCallback(async () => {
    workerRef.current?.logout()
  }, [])

  return <Component {...pageProps} err={err} />
}
