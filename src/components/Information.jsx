import { Box, Typography, useTheme } from "@mui/material"
// @ts-ignore
function Information({title, subTitle}) {
    const theme = useTheme()
  return (
    <Box sx={{mb: 4}}>
        <Typography variant="h5" sx={{color: theme.palette.info.light, fontWeight:"bold", textTransform:"uppercase"}}>
            {title}
        </Typography>
        <Typography variant="body1">
            {subTitle}
        </Typography>
    </Box>
  )
}

export default Information