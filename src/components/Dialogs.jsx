import { Box } from "@mui/material";
import DialogsBar from "./DialogsBar.jsx";
import DialogList from "./DialogList.jsx";


export default function Dialogs() {
    return (
        <>

            <Box minHeight={'800px'} maxWidth={'800px'} margin={'0.5rem auto'}
                 backgroundColor={'#363330'} borderRadius={'10px'} >

                <DialogsBar />
                <DialogList />

            </Box>


        </>
    )
}