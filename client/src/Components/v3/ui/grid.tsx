import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Box, type BoxProps } from './box'

// MUI Grid component interface
export interface GridProps extends Omit<BoxProps, 'display'> {
  // MUI specific props
  container?: boolean
  item?: boolean
  spacing?: number
  rowSpacing?: number
  columnSpacing?: number
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
  xs?: number | 'auto'
  sm?: number | 'auto'
  md?: number | 'auto'
  lg?: number | 'auto'
  xl?: number | 'auto'
  xsOffset?: number
  smOffset?: number
  mdOffset?: number
  lgOffset?: number
  xlOffset?: number
  zeroMinWidth?: boolean
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({
    className,
    container = false,
    item = false,
    spacing = 0,
    rowSpacing,
    columnSpacing,
    direction = 'row',
    wrap = 'wrap',
    justifyContent,
    alignItems,
    alignContent,
    xs,
    sm,
    md,
    lg,
    xl,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    zeroMinWidth = false,
    children,
    ...props
  }, ref) => {
    // Build Tailwind classes
    const classes = []

    if (container) {
      classes.push('grid')

      // Handle spacing for container
      const gap = rowSpacing !== undefined ? rowSpacing : spacing
      if (gap > 0) {
        classes.push(`gap-${gap}`)
      }

      // Handle column spacing if different from row spacing
      if (columnSpacing !== undefined && columnSpacing !== spacing) {
        classes.push(`gap-x-${columnSpacing}`)
        if (rowSpacing !== undefined) {
          classes.push(`gap-y-${rowSpacing}`)
        }
      }

      // Grid template columns based on breakpoints
      if (xs) classes.push(`grid-cols-${xs}`)
      if (sm) classes.push(`sm:grid-cols-${sm}`)
      if (md) classes.push(`md:grid-cols-${md}`)
      if (lg) classes.push(`lg:grid-cols-${lg}`)
      if (xl) classes.push(`xl:grid-cols-${xl}`)
    }

    if (item) {
      // Item-specific styles
      if (xs && typeof xs === 'number') classes.push(`col-span-${xs}`)
      if (sm && typeof sm === 'number') classes.push(`sm:col-span-${sm}`)
      if (md && typeof md === 'number') classes.push(`md:col-span-${md}`)
      if (lg && typeof lg === 'number') classes.push(`lg:col-span-${lg}`)
      if (xl && typeof xl === 'number') classes.push(`xl:col-span-${xl}`)

      // Offsets
      if (xsOffset) classes.push(`col-start-${xsOffset + 1}`)
      if (smOffset) classes.push(`sm:col-start-${smOffset + 1}`)
      if (mdOffset) classes.push(`md:col-start-${mdOffset + 1}`)
      if (lgOffset) classes.push(`lg:col-start-${lgOffset + 1}`)
      if (xlOffset) classes.push(`xl:col-start-${xlOffset + 1}`)
    }

    return (
      <Box
        ref={ref}
        className={cn(classes, className)}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Grid.displayName = 'Grid'

export { Grid }