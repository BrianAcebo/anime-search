module.exports = {
  mode: 'jit', // Just in time compiler
  purge: ['./src/**/*.svelte'], // Removes unnecessary css not in final product
  theme: {
    extends: {},
    colors: {
      'dark-blue': '#312E81',
      'dark': '#1E293B',
      'gray': '#334155',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    }
  },
  daisyui: {
    themes: [],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [
    require('daisyui')
  ]
}
