import { CanvasRenderingContext2D, loadImage } from 'canvas'
import { Style } from './types'
import { splitter } from './utils/splitter'

/**
 * @param {CanvasRenderingContext2D} context - The context of the canvas you're drawing on.
 * @param {string} text - The text to fill.
 * @param {number} x - x coordinate of the text.
 * @param {number} y - y coordinate of the text.
 * @param {Style} style - The style of the emoji.
 */
export const strokeText = async (context: CanvasRenderingContext2D, text: string, x: number, y: number, style: Style = 'apple'): Promise<void> => {
  const segments = splitter(text)
  const match = /\d+/.exec(context.font)
  const fontSize = match !== null ? parseInt(match[0]) : 0
  const padding = fontSize * 0.15
  // TODO: implement maxWidth
  let width = 0
  for (const segment of segments) {
    if (segment.length === 1) {
      context.strokeText(segment, x + width, y)
      width += context.measureText(segment).width
    }
    if (segment.length > 1) {
      const url = encodeURI(`https://emojicdn.elk.sh/${segment}?style=${style}`)
      const img = await loadImage(url).catch(e => {})
      if (img !== undefined) {
        const scale = fontSize * 1.1
        context.drawImage(img, x + width + padding, y - scale * 0.9, scale, scale)
        width += fontSize + padding * 2
      }
    }
  }
}
