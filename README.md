# CANVAS WITH EMOJICDN
## Installation

```bash
npm install canvas-emojicnd
```

## Usage

```typescript
import { createCanvas } from 'canvas'
import { fillText } from 'canvas-emojicnd'
(async () => {
  const canvas = createCanvas(500, 500)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000'
  ctx.font = '50px Arial'
  await fillText(ctx, 'Hello, world!👋🥳', 0, 50, 'whatsapp')
})()
```
Supported emoji styles: 

* `apple`
* `google`
* `microsoft`
* `samsung`
* `whatsapp`
* `twitter`
* `facebook`
* `messenger`
* `joypixels`
* `openmoji`
* `emojidex`
* `lg`
* `htc`
* `mozilla`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)


