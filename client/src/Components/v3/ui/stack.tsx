import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Box, type BoxProps } from './box'

// MUI Stack component interface
export interface StackProps extends Omit<BoxProps, 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent'> {
  // MUI specific props
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  spacing?: number | string
  divider?: React.ReactNode
  useFlexGap?: boolean
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({
    className,
    direction = 'column',
    spacing = 0,
    divider,
    useFlexGap = false,
    children,
    ...props
  }, ref) => {
    // Map MUI direction to CSS flex-direction
    const flexDirection = direction
    const flexWrap = direction === 'row' || direction === 'row-reverse' ? 'wrap' : undefined

    // Handle spacing
    let gapStyle: React.CSSProperties = {}
    let childrenArray = React.Children.toArray(children)

    if (!useFlexGap && spacing !== 0) {
      // When not using flex gap, we need to add margins to children
      const spacingValue = typeof spacing === 'number' ? `${spacing}px` : spacing

      childrenArray = childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          const isLast = index === childrenArray.length - 1
          const marginStyle: React.CSSProperties = {}

          if (direction === 'row' || direction === 'row-reverse') {
            marginStyle.marginRight = isLast ? 0 : spacingValue
          } else {
            marginStyle.marginBottom = isLast ? 0 : spacingValue
          }

          return React.cloneElement(child, {
            key: child.key || index,
            ...child.props,
            style: {
              ...child.props.style,
              ...marginStyle,
            }
          })
        }
        return child
      })
    } else if (useFlexGap && spacing !== 0) {
      // Use CSS gap when available
      gapStyle.gap = typeof spacing === 'number' ? `${spacing}px` : spacing
    }

    // Insert dividers between children if provided
    if (divider) {
      const childrenWithDividers: React.ReactElement[] = []
      childrenArray.forEach((child, index) => {
        if (React.isValidElement(child)) {
          childrenWithDividers.push(child)
          if (index < childrenArray.length - 1) {
            childrenWithDividers.push(React.cloneElement(divider as React.ReactElement, { key: `divider-${index}` }))
          }
        }
      })
      childrenArray = childrenWithDividers
    }

    // Build Tailwind classes
    const classes = [
      'flex',
      direction === 'row' && 'flex-row',
      direction === 'row-reverse' && 'flex-row-reverse',
      direction === 'column' && 'flex-col',
      direction === 'column-reverse' && 'flex-col-reverse',
      flexWrap && 'flex-wrap',
    ].filter(Boolean).join(' ')

    return (
      <Box
        ref={ref}
        className={cn(classes, className)}
        style={gapStyle}
        flexDirection={flexDirection}
        {...props}
      >
        {childrenArray}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'

export { Stack }