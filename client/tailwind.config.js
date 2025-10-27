/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Import existing CSS variables for seamless migration
      colors: {
        // Map to existing MUI theme colors
        primary: 'var(--color-primary, #000000)',
        secondary: 'var(--color-secondary, #666666)',
        accent: 'var(--color-accent, #3b82f6)',
        error: 'var(--color-error, #ef4444)',
        warning: 'var(--color-warning, #f59e0b)',
        success: 'var(--color-success, #10b981)',
        info: 'var(--color-info, #3b82f6)',

        // Background colors
        background: {
          primary: 'var(--color-bg-primary, #ffffff)',
          secondary: 'var(--color-bg-secondary, #f3f4f6)',
          tertiary: 'var(--color-bg-tertiary, #e5e7eb)',
        },

        // Text colors
        text: {
          primary: 'var(--color-text-primary, #111827)',
          secondary: 'var(--color-text-secondary, #6b7280)',
          tertiary: 'var(--color-text-tertiary, #9ca3af)',
        }
      },

      // Map to existing spacing system
      spacing: {
        // Use existing CSS variables for smooth transition
        '1': 'var(--env-var-spacing-1, 12px)',
        '1-plus': 'var(--env-var-spacing-1-plus, 16px)',
        '1-minus': 'var(--env-var-spacing-1-minus, 10px)',
        '2': 'var(--env-var-spacing-2, 24px)',
        '3': 'var(--env-var-spacing-3, 32px)',  // Will be removed later
        '4': 'var(--env-var-spacing-4, 40px)',  // Will be removed later
        '5': 'var(--env-var-spacing-5, 65px)',  // Will be removed later

        // Layout variables
        'nav-bar': 'var(--env-var-nav-bar-height, 70px)',
        'side-bar': 'var(--env-var-side-bar-width, 250px)',
        'side-bar-collapsed': 'var(--env-var-side-bar-collapsed-width, 64px)',
      },

      // Map to existing font sizes
      fontSize: {
        'xs': ['var(--env-var-font-size-small, 11px)', { lineHeight: '1.5' }],
        'sm': ['var(--env-var-font-size-small-plus, 12px)', { lineHeight: '1.5' }],
        'base': ['var(--env-var-font-size-medium, 13px)', { lineHeight: '1.5' }],
        'lg': ['var(--env-var-font-size-medium-plus, 14px)', { lineHeight: '1.5' }],
        'xl': ['var(--env-var-font-size-large, 16px)', { lineHeight: '1.5' }],
        '2xl': ['var(--env-var-font-size-large-plus, 22px)', { lineHeight: '1.5' }],
        '3xl': ['var(--env-var-font-size-xlarge, 30px)', { lineHeight: '1.5' }],
      },

      // Map to existing radius system
      borderRadius: {
        '1': 'var(--env-var-radius-1, 4px)', // Will be removed later
        '2': 'var(--env-var-radius-2, 8px)',
      },

      // Map to existing dimensions
      maxWidth: {
        '1': 'var(--env-var-width-1, 100vw)',  // Will be removed later
        '2': 'var(--env-var-width-2, 360px)',
        '3': 'var(--env-var-width-3, 250px)', // Will be removed later
        '4': 'var(--env-var-width-4, 100px)',
      },

      // Map to existing heights
      minHeight: {
        '1': 'var(--env-var-height-1, 100vh)', // Will be removed later
        '2': 'var(--env-var-height-2, 34px)',
      },

      // Box shadow system
      boxShadow: {
        '1': 'var(--env-var-shadow-1, 0px 4px 24px -4px rgba(16, 24, 40, 0.08), 0px 3px 3px -3px rgba(16, 24, 40, 0.03))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}