import React from "react";
import { useWebSocket } from "../hooks";

export default function App() {
  const { isOpen, webSocket } = useWebSocket();

  React.useEffect(() => {
    if (isOpen) {
      console.log("Here");
      webSocket.send("Hello World!");
    }
  }, [isOpen, webSocket]);

  return <div>fdf</div>;
}
