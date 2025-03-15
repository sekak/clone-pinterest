import express from 'express'
import userRouter from './routes/user.router.js'
import boardRouter from './routes/board.router.js'
import pinRouter from './routes/pin.router.js'
import commentRouter from './routes/comment.route.js'
import connectDB from './utils/connectDB.js'

const app = express()


app.use('/users', userRouter)
app.use('/boards', boardRouter)
app.use('/pins', pinRouter)
app.use('/comments', commentRouter)


app.listen(3000, () => {
    connectDB()
    console.log('Server is running on http://localhost:3000')
})