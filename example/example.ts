import { createCanvas } from 'canvas'
import { fillText, measureText, Style } from './src'
import { writeFileSync } from 'fs'

(async (): Promise<void> => {
  const text = 'Hello, w🌐rld!👋🥳😍'
  const canvas = createCanvas(500, 500)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#eee'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.font = '30px Arial'

  // supported styles
  const styles = ['apple', 'google', 'microsoft', 'samsung', 'whatsapp', 'twitter', 'messenger', 'joypixels', 'openmoji', 'emojidex', 'lg', 'htc', 'mozilla']
  console.time('Execution time')
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i] as Style
    const fontWidth = await measureText(ctx, text, style)
    await fillText(ctx, text, canvas.width / 2 - fontWidth.width / 2, 50 + i * 35, style)
  }
  console.timeEnd('Execution time')
  // save canvas as png
  writeFileSync('example.png', canvas.toBuffer())
})().catch(() => {})
