import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Container, Typography } from '@mui/material';

const Work = () => {
    const [work, setWork] = useState([]);
    const workRef = collection(db, "work");

    useEffect(() => {
        const getWork = async () => {
            const data = await getDocs(workRef);
            setWork(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getWork();
    }, []);

    return (
        <Container>
            <Typography variant="h3" mb="25px">Work Experience</Typography>
            {work.map((wrk) => {
                return (
                    <Container>
                        <Typography variant="h6">{wrk.name}</Typography>
                        <Typography variant="h6">{wrk.role}</Typography>
                        <Typography variant="h6" mb="25px">Years of Employment: {wrk.age}</Typography>
                    </Container>
                )
            })}
        </Container>
    )
}

export default Work