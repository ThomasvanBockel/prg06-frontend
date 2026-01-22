import {useEffect, useState} from 'react'
import Card from './Card.jsx'

function Home() {
    const [items, setItems] = useState([]);


    const loadSpots = async () => {
        try {
            const result = await fetch('http://145.24.237.40:8002/plants', {
                headers: {
                    'Accept': 'application/json'
                }

            })
            const data = await result.json()
            if (!result.ok) {
                throw Error(data.message)
            }
            setItems(data.items);
            console.log(data)

        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        loadSpots()
    }, []);

    return (
        <>
            {items.map((item) => (

                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                />
            ))}
        </>
    );
}

export default Home;