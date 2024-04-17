import {Box, Button, createTheme, ThemeProvider} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings.js";
import Avatar from "@mui/material/Avatar";



export default function DialogBar() {
    return (
        <>
            <Box padding='0.625rem 0rem' maxWidth={'800px'} margin={"auto"}  display={"flex"} gap={'50px'}
                 alignItems={"center"} justifyContent={"center"} borderBottom={'1px solid #000'} bgcolor={'#59524D'}>
                <Box>Назад</Box>
               <Box>
                   <Avatar />

               </Box>
                <SettingsIcon fontSize="large" bgcolor="gray" />
            </Box>
        </>
    )
}