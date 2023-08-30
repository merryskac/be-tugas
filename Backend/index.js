import Express  from 'express';
import taskRouter from './src/routes/task.route.js';
// import { Server } from 'socket-io'
// import http from 'http'


const app = Express();
app.use(Express.json())
// const server = http.createServer(app)
// const io = new Server(server)



app.use(taskRouter)

// io.on("connection", (socket)=>{
//   socket.on("message", (data)=>{
//     console.log(data)
//   })
// })

app.listen(4000, ()=>{
  console.log('connected to server')
})
