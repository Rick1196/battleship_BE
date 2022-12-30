require("dotenv").config();
const { app, server, io } = require("./config/server");
const config = require("./config/config");
const authenticationRoute = require("./routes/authentication/routes");
app.use("/authentication", authenticationRoute);

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("disconnection", () => {
  console.log("user disconnected");
});

server.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
