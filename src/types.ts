/**
 * Style of the emoji.
 */
export type Style = 'facebook' | 'messenger' | 'whatsapp' | 'twitter' | 'joypixels' | 'openmoji' | 'emojidex' | 'lg' | 'htc' | 'mozilla' | 'apple' | 'google' | 'microsoft' | 'samsung'

/**
 * Text metrics for measureText function.
 */
export interface TextMetrics {
  width: number
  actualBoundingBoxLeft: number
  actualBoundingBoxRight: number
  actualBoundingBoxAscent: number
  actualBoundingBoxDescent: number
  emHeightAscent: number
  emHeightDescent: number
  alphabeticBaseline: number
}
