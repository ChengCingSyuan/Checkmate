import { Box, Stack, Grid, Typography, Button } from './index'

/**
 * ComponentDemo - Demonstrates MUI → Shadcn UI compatibility
 * This component shows how existing MUI props work with our new Shadcn components
 */
export function ComponentDemo() {
  return (
    <Box p="4" maxWidth="800px" mx="auto">
      <Typography variant="h4" gutterBottom>
        MUI → Shadcn UI Compatibility Demo
      </Typography>

      <Stack spacing="4">
        {/* Typography Examples */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Typography Components
          </Typography>
          <Stack direction="row" spacing="2">
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="body1">Body 1 text</Typography>
            <Typography variant="body2">Body 2 text</Typography>
          </Stack>
        </Box>

        {/* Stack Examples */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Stack Components (MUI props)
          </Typography>
          <Stack direction="row" spacing="2">
            <Button muiVariant="contained" color="primary">
              Stack Button 1
            </Button>
            <Button variant="outline">
              Stack Button 2
            </Button>
            <Button variant="ghost">
              Stack Button 3
            </Button>
          </Stack>

          <Stack direction="column" spacing="2" mt="2">
            <Typography>Vertical stack item 1</Typography>
            <Typography>Vertical stack item 2</Typography>
            <Typography>Vertical stack item 3</Typography>
          </Stack>
        </Box>

        {/* Grid Examples */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Grid Components (MUI props)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Box p="2" bgcolor="primary.main" color="white" borderRadius="1">
                Grid Item 1
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box p="2" bgcolor="secondary.main" color="white" borderRadius="1">
                Grid Item 2
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p="2" bgcolor="success.main" color="white" borderRadius="1">
                Grid Item 3
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Button Examples - Full MUI Compatibility */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Button Components (Full MUI Prop Compatibility)
          </Typography>

          {/* MUI contained variants */}
          <Stack direction="row" spacing="2" mb="2">
            <Button muiVariant="contained" color="primary">
              Primary
            </Button>
            <Button muiVariant="contained" color="secondary">
              Secondary
            </Button>
            <Button muiVariant="primary" color="inherit">
              Inherit
            </Button>
            <Button muiVariant="contained" disabled>
              Disabled
            </Button>
          </Stack>

          {/* MUI outlined variants */}
          <Stack direction="row" spacing="2" mb="2">
            <Button muiVariant="outlined" color="primary">
              Outlined Primary
            </Button>
            <Button muiVariant="outlined" color="secondary">
              Outlined Secondary
            </Button>
            <Button muiVariant="outlined" color="error">
              Outlined Error
            </Button>
          </Stack>

          {/* MUI text variants */}
          <Stack direction="row" spacing="2" mb="2">
            <Button muiVariant="text" color="primary">
              Text Primary
            </Button>
            <Button muiVariant="text" color="secondary">
              Text Secondary
            </Button>
            <Button muiVariant="text" color="error">
              Text Error
            </Button>
          </Stack>

          {/* Sizes */}
          <Stack direction="row" spacing="2" mb="2">
            <Button muiSize="small" muiVariant="contained">
              Small
            </Button>
            <Button muiSize="medium" muiVariant="contained">
              Medium
            </Button>
            <Button muiSize="large" muiVariant="contained">
              Large
            </Button>
          </Stack>

          {/* Loading and Icons */}
          <Stack direction="row" spacing="2" mb="2">
            <Button muiVariant="contained" loading>
              Loading
            </Button>
            <Button muiVariant="outlined" startIcon="🚀">
              With Start Icon
            </Button>
            <Button muiVariant="text" endIcon="⭐">
              With End Icon
            </Button>
          </Stack>

          {/* Full Width */}
          <Button muiVariant="contained" fullWidth>
            Full Width Button
          </Button>
        </Box>

        {/* Custom styling with sx prop */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Custom Styling (sx prop + CSS)
          </Typography>
          <Box
            sx={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              borderRadius: 3,
              border: 0,
              color: 'white',
              height: 48,
              padding: '0 30px',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}
          >
            Custom styled Box with sx prop
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}