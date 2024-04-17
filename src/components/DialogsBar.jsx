import {TextField, Button, Box, ThemeProvider} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {createTheme} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: '#59524D'
    }
  }
})
export default function DialogsBar() {
  return (
    <ThemeProvider theme={theme}>
        <Box padding='0.625rem 0rem' maxWidth={'800px'} margin={"auto"}  display={"flex"} gap={'50px'}
             alignItems={"center"} justifyContent={"center"} borderBottom={'1px solid #000'}>
            <TextField
              sx={{ width: "500px", bgcolor: "gray", borderRadius: '0.5rem' }}
              label="Поиск по сообщениям"
              size="small"
              variant="outlined"
            ></TextField>
            <Button
              variant="contained"
              sx={{ textTransform: "none", background: "gray" }}
            >
              Написать
            </Button>
            <SettingsIcon fontSize="large" bgcolor="gray" />
        </Box>
    </ThemeProvider>
  );
}
