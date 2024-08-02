const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  // Aca estoy escuchando cuando el cliente lo emite
  // El 2do param dentro del callback "callback", al lado de payload, hace referencia
  // al callback que se definio en el js linea 36 aprox con param "id"
  socket.on("enviar-mensaje", (payload, callback) => {
    // Es cuando el servidor de sockets lo envia

    const id = 123;
    callback({ id, fecha: new Date().getTime() });

    //.broadcast permite dar un mensaje a todos los clientes
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
