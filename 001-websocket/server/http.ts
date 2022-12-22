Bun.serve({
  port: 1337,

  websocket: {
    open(ws) {
      console.log("WebSocket opened");

      // const status = ws.send("This is a test");

      // if (status === 0) {
      //   console.log("Message was dropped");
      // } else if (status === -1) {
      //   console.log("Backpressure was applied");
      // } else {
      //   console.log(`Message sent! ${status} bytes sent`);
      // }
    },

    message(ws, message) {
      console.log("Messg: ", message);
    },
  },

  async fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }

    return new Response("Regular HTTP response", { status: 200 });
  },

  async error(error) {
    return new Response(`Uh oh!!\n ${error.toString()}`, { status: 500 });
  },
});
