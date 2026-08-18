# QR Code Generator

A simple and elegant web-based QR code generator that allows you to convert text, URLs, or any information into QR codes instantly.

## Features

- **Easy to Use**: Simply enter text or a URL and generate a QR code with one click
- **Instant Generation**: Real-time QR code generation on the canvas
- **Download**: Save generated QR codes as PNG files
- **Modern UI**: Clean, glassmorphic design with gradient background
- **Responsive**: Works seamlessly on different screen sizes
- **No Backend Required**: Fully client-side application

## How to Use

1. Open `index.html` in your web browser
2. Enter text, URL, or any information in the input field
3. Click the "Generate QR" button
4. The QR code will appear on the canvas
5. Click "Download PNG" to save the QR code to your device

## Technical Details

- **Library**: Uses [qrcode-generator](https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.5.2/qrcode.min.js) for QR code generation
- **Technologies**: HTML5, CSS3, JavaScript
- **Error Correction Level**: M (Medium - can correct ~15% of errors)

## Files

- `index.html` - Main HTML structure
- `script.js` - QR code generation logic and event handlers
- `style.css` - Modern styling with glassmorphic effects

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Canvas API
- ES6 JavaScript

## Live Demo

https://qr-code-generator-ecru-xi.vercel.app/