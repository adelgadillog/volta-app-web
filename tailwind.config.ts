import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volta: {
          primary: '#E65100',
          secondary: '#FF6D00',
          tertiary: '#BF360C',
          surface: '#FFF8F6',
          background: '#FFF3EE',
          'surface-variant': '#FFE0D0',
          'on-primary': '#FFFFFF',
          'on-surface': '#1A1010',
          'text-muted': '#9E6B5A',
          error: '#B3261E',
          success: '#2E7D32',
          gamification: {
            bronze: '#CD7F32',
            'bronze-light': '#F5DEB3',
            silver: '#C0C0C0',
            'silver-light': '#E8E8E8',
            gold: '#FFD700',
            'gold-light': '#FFF9C4',
            platinum: '#E5E4E2',
            'platinum-light': '#F5F5F5',
          },
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
