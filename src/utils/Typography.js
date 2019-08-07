import Typography from 'typography'
import fairyGates from 'typography-theme-fairy-gates'

fairyGates.overrideThemeStyles = ({ rhythm }, options) => ({
    'h2,h3': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(2),
    }
  })
  
  const typography = new Typography(sternGroveTheme)