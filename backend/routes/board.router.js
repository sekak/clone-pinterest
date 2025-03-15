import express from 'express'
import { test } from '../controlles/board.controlles.js'

const router = express.Router()

router.get('/test', test)

export default router