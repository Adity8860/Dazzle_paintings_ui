module.exports = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'bounce': 'bounce 2s infinite',
        'count': 'count 2s ease-out forwards',
        'delay-200': 'fadeIn 1s ease-in 200ms',
        'delay-400': 'fadeIn 1s ease-in 400ms',
        'delay-600': 'fadeIn 1s ease-in 600ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        count: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
}