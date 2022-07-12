import { CanvasRenderingContext2D, loadImage } from 'canvas'
import Graphemer from 'graphemer'
const emojicdn = 'https://emojicdn.elk.sh/{emoji}?style={style}'

type Style = 'whatsapp' | 'twitter' | 'facebook' | 'messenger' | 'joypixels' | 'openmoji' | 'emojidex' | 'lg' | 'htc' | 'mozilla' | 'apple' | 'google' | 'microsoft' | 'samsung'

/**
 * @param context - The canvas context to draw on
 * @param text - The text to draw
 * @param x - The x coordinate to draw the text
 * @param y - The y coordinate to draw the text
 * @param style - The style of the emoji
 */

export const fillText = async (context: CanvasRenderingContext2D, text: string, x: number, y: number, style: Style = 'apple'): Promise<void> => {
  const graphemes = new Graphemer().splitGraphemes(text)
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const measureText = context.measureText(alphabet) as any
  const fontWidth = measureText.width / alphabet.length
  const fontHeight = +measureText.actualBoundingBoxAscent + +measureText.actualBoundingBoxDescent
  let widthWithEmoji = 0
  for (let i = 0; i < graphemes.length; i++) {
    const grapheme = graphemes[i]
    if (grapheme.length === 1) {
      context.fillText(grapheme, x + widthWithEmoji, y)
      widthWithEmoji += context.measureText(grapheme).width
    }
    if (grapheme.length > 1) {
      const emojipath = emojicdn.replace('{emoji}', grapheme).replace('{style}', style)
      const img = await loadImage(encodeURI(emojipath))
      const scale = fontWidth * 1.5 / img.width
      context.drawImage(img, x + widthWithEmoji, y - (fontHeight * 0.9), scale * img.width, scale * img.height)
      widthWithEmoji += fontWidth * 1.5
    }
  }
}
