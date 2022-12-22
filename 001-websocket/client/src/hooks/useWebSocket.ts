import React from "react";

export default function useWebSocket() {
  const [webSocket] = React.useState(new WebSocket("ws://localhost:1337"));

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    webSocket.onopen = (event) => {
      console.log("WebSocket is connected!");
      setIsOpen(true);
    };

    webSocket.onclose = (event) => {
      console.log("WebSocket is disconnected!");
      setIsOpen(false);
    };

    webSocket.onerror = (message) => {
      console.log("WebSocket is disconnected!");
      setIsOpen(false);
    };
  }, [webSocket]);

  return { isOpen, webSocket } as const;
}
