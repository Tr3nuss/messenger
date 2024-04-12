import { axios } from "axios";
import { useState, useEffect } from "react";

export default function DialogItem() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setMessage(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {message.map((item) => (
        <Box key={item.id}>

        </Box>
      ))}
    </>
  );
}
