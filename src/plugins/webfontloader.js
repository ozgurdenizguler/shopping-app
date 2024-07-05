export function loadFonts() {
  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap', 'Material+Icons'],
    },
  })
}
