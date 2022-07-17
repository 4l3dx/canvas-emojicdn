/**
 * It takes a string and returns an array of strings
 * @param {string} text - string - the text to be segmented
 * @returns An array of strings.
 */
export const splitter = (text: string): string[] => {
  const segmenter = new Intl.Segmenter().segment(text)
  const array = Array.from(segmenter).map(s => s.segment)
  return array
}
