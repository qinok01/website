/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js}","./src/components/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      inter: ['Inter', 'sans-serif']
    },

    extend: {animation: {
      fade: 'fadeIn 1s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0.8 },
        to: { opacity: 1 },
      },
    },},
  },
  plugins: [],
}

