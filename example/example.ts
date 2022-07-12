import { createCanvas } from 'canvas'
import { fillText } from '/src'
import { writeFileSync } from 'fs'

(async () => {
  const canvas = createCanvas(500, 500)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000'
  ctx.font = '50px Arial'
  await fillText(ctx, 'Hello, world!👋🥳', 0, 50, 'whatsapp')
  writeFileSync('example.png', canvas.toBuffer())
})() as any
