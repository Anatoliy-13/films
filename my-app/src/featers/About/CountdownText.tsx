import { Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";


export default function CountdownText() {
  const [countdown, setCountdown] = useState(9);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((value) => value - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current)
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalRef.current);
    }
  }, [countdown]);

   return (
    <Typography variant="h4" align="center" sx={{ mb: 2 }}>
      Coming soon: {countdown}.
    </Typography>
   )
}