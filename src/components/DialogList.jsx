import {useEffect, useState} from "react";
import {Box} from '@mui/material'
import Avatar from "@mui/material/Avatar";
import {Link} from 'react-router-dom'



export default function DialogList() {
    const [message, setMessage] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setMessage(json))
    }, [])

    console.log(message)



    return (
        <>
            {message.map((user) => (
                <Link key={user.id} to={`/mail/${user.id}`}>
                    <Box padding='16px' height='80px' borderBottom='1px solid #000'
                         display='flex' alignItems='center' justifyContent='space-between' bgcolor='#363330'>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Box>
                                <Avatar src={"/static/images/avatar/1.jpg"} />
                            </Box>
                            <Box color={'#fff'} >
                                <p>{user.name}</p>
                                <p>{user.address.zipcode.slice(0, 5)}</p>
                            </Box>
                        </Box>
                        <Box color={'#fff'}>
                            <p>{new Date().toLocaleTimeString().slice()}</p>
                        </Box>
                    </Box>
                </Link>
            ))}
        </>
    )
}