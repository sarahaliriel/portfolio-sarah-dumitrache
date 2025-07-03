module.exports = {
  darkMode: "class", // ESSENCIAL para funcionar com ThemeContext
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        salmao: "#EAB897",
        marromescuro: "#49321F",
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #49321F, #EAB897, #49321F)',
        'gradient-footer': 'linear-gradient(90deg, #49321F, #EAB897, #49321F)',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
