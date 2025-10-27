import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// MUI Button variants mapping to Shadcn UI
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // MUI variant mapping
      muiVariant: {
        // MUI contained → Shadcn default
        contained: 'bg-primary text-primary-foreground hover:bg-primary/90',

        // MUI outlined → Shadcn outline
        outlined: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',

        // MUI text → Shadcn ghost
        text: 'hover:bg-accent hover:text-accent-foreground',

        // MUI primary → Shadcn default (accent color)
        primary: 'bg-accent text-accent-foreground hover:bg-accent/90',

        // MUI secondary → Shadcn secondary
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',

        // MUI error → Shadcn destructive
        error: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },

      // Shadcn variants
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },

      // MUI size mapping
      muiSize: {
        small: 'h-8 px-3 text-xs',
        medium: 'h-10 px-4 py-2',
        large: 'h-12 px-8 text-base',
      },

      // Shadcn sizes
      size: {
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
      },

      // MUI color props (when variant is not 'contained')
      color: {
        primary: 'text-primary hover:bg-primary hover:text-primary-foreground',
        secondary: 'text-secondary hover:bg-secondary hover:text-secondary-foreground',
        error: 'text-destructive hover:bg-destructive hover:text-destructive-foreground',
        warning: 'text-yellow-600 hover:bg-yellow-600 hover:text-white',
        info: 'text-blue-600 hover:bg-blue-600 hover:text-white',
        success: 'text-green-600 hover:bg-green-600 hover:text-white',
        inherit: 'text-inherit hover:bg-gray-100 hover:text-gray-900',
      },

      // Loading state
      loading: {
        true: 'pointer-events-none opacity-70',
        false: '',
      },

      // Full width
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      loading: false,
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'muiVariant' | 'muiSize'> {
  // MUI specific props
  muiVariant?: 'text' | 'outlined' | 'contained' | 'primary' | 'secondary' | 'error'
  muiSize?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'
  disabled?: boolean
  disableElevation?: boolean
  disableFocusRipple?: boolean
  fullWidth?: boolean
  href?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  loadingPosition?: 'start' | 'end' | 'center'
  component?: React.ElementType
  sx?: object
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      muiVariant,
      muiSize,
      color,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = true,
      fullWidth = false,
      href,
      startIcon,
      endIcon,
      loading = false,
      loadingPosition = 'start',
      component,
      sx,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the component to render
    const Component = component || (href ? 'a' : 'button')

    // Build the loading indicator
    const LoadingIndicator = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )

    // Build the button content with icons and loading state
    const buildContent = () => {
      const showLoading = loading && loadingPosition === 'center'
      const showStartLoading = loading && loadingPosition === 'start'
      const showEndLoading = loading && loadingPosition === 'end'

      return (
        <>
          {showStartLoading && <LoadingIndicator />}
          {!showStartLoading && startIcon && <span className="button-start-icon">{startIcon}</span>}
          {showLoading ? (
            <span className="opacity-0">{children}</span>
          ) : (
            children
          )}
          {showEndLoading && <LoadingIndicator />}
          {!showEndLoading && endIcon && <span className="button-end-icon">{endIcon}</span>}
        </>
      )
    }

    // Build the variant props for cva
    const variantProps: any = {
      variant: variant || 'default',
      size: size || 'default',
      fullWidth,
      loading,
    }

    // Add MUI variant if provided
    if (muiVariant) {
      variantProps.muiVariant = muiVariant
    }

    // Add MUI size if provided
    if (muiSize) {
      variantProps.muiSize = muiSize
    }

    // Add color prop for text/outlined variants
    if (color && (muiVariant === 'text' || muiVariant === 'outlined')) {
      variantProps.color = color
    }

    // Build final classes
    const buttonClasses = cn(
      buttonVariants(variantProps),
      className
    )

    // Build styles for sx prop
    const finalStyles = { ...sx }

    return (
      <Component
        className={buttonClasses}
        ref={ref}
        disabled={disabled || loading}
        href={href}
        style={finalStyles}
        {...props}
      >
        {buildContent()}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }