export const theme = {
  colors: {
    primary: '#2196F3',
    secondary: '#9C27B0',
    accent: '#FF9500',
    background: {
      primary: '#0A0F1C',
      secondary: '#111827',
      card: 'rgba(17, 24, 39, 0.7)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
      accent: '#FF9500'
    }
  },
  typography: {
    fontFamily: {
      body: "'Inter', sans-serif",
      heading: "'Space Grotesk', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    DEFAULT: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out'
  },
  effects: {
    glassmorphism: 'backdrop-filter: blur(10px)',
    textGradient: `
      background: linear-gradient(135deg, #2196F3 0%, #9C27B0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
    cardHover: `
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    `
  }
}; 