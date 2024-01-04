/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "utama.html"],
  theme: {
    extend: {
      fontFamily: {
        utama: ['Montserrat', 'sans-serif']
      },
      colors: {
        kuning: ["#FFCB2D"],
        abu: ["#6B645D"],
        putih: ["#F2F2F2"],
        hitam: ["#252525"],
        mrh: ["#ff6969"],
        abu: ["#E9E9E9"]
      }
    },
  },
  plugins: [],
}

