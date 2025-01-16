import { useEffect } from "react"

export const useSubscription = <T,>(tableName: string, cb: (data: T) => void) => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws')
    
    ws.onopen = () => {
      console.log('Connected to WebSocket');
      ws.send(JSON.stringify({ type: 'subscribe', tableName }))
    }

    ws.onmessage = (event) => {
      cb(JSON.parse(event.data))
    }

    ws.onclose = () => {
      console.log('Disconnected from WebSocket')
    }

    return () => {
      ws.close()
    }
  }, [])
}