module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'display': ['Oswald', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      'indie_flower': ['Indie Flower', 'monospace'] 
    },
    extend: {
      boxShadow: {
        'image': 'inset 0px 0px 64px 47px #00032c'
      },
      colors: {
        'mck_black': '#00021f',
        'mck_black_light': '#00032c',
        'mck_aqua': '#08FDD8',
      },
    },
  },
  plugins: [],
};
