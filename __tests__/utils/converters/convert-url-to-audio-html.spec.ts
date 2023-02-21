import { convertUrlToAudioHTML } from '@converters/convert-url-to-audio-html.js'

test('convertUrlToAudioHTML', () => {
  const result = convertUrlToAudioHTML('hello.mp3')

  expect(result).toBe(`<audio controls src="hello.mp3"></audio>`)
})