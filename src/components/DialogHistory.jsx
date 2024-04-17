import {Box} from '@mui/material'
import Avatar from "@mui/material/Avatar";
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
export default function DialogHistory() {
     const {id} = useParams()

    const [info, setInfo] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setInfo(json))
    }, [id]);
    return (
        <>
            <Box minHeight={'800px'} maxWidth={'800px'} bgcolor={'#59524D'} margin={'auto'}>
                <Box padding={'0.5rem 4rem'}>
                    <Avatar />
                    <Link>{info && (
                        <p>{info.name}</p>
                    )}</Link>
                    <p>{new Date().toLocaleTimeString()}</p>
                </Box>
            </Box>
        </>

    )
}