import { CanvasRenderingContext2D, loadImage } from 'canvas'
import { Style, TextMetrics } from './types'
import { splitter } from './utils/splitter'
/**
 * @param {CanvasRenderingContext2D} context - CanvasRenderingContext2D - The context of the canvas you're drawing on.
 * @param {string} text - The text to measure.
 * @returns {TextMetrics} - The text metrics.
 */
export const measureText = async (context: CanvasRenderingContext2D, text: string, style: Style): Promise<TextMetrics> => {
  const segments = splitter(text)
  const match = /\d+/.exec(context.font)
  const fontSize = match !== null ? parseInt(match[0]) : 0
  let width = 0

  const padding = fontSize * 0.15

  for (const segment of segments) {
    if (segment.length === 1) {
      width += context.measureText(segment).width
    }
    if (segment.length > 1) {
      const url = encodeURI(`https://emojicdn.elk.sh/${segment}?style=${style}`)
      const img = await loadImage(url).catch(() => {})
      if (img !== undefined) {
        width += fontSize + padding * 2
      }
    }
  }
  const measure = context.measureText(text) as unknown as TextMetrics
  const metrics = { ...measure }
  metrics.width = width
  return metrics
}
