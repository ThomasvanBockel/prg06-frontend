import {useEffect, useState} from 'react'
import Card from './Card.jsx'
import Limit from './Limit.jsx'
import Pagination from './Pagination.jsx'


function Home() {
    const [items, setItems] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [query, setQuery] = useState(`http://145.24.237.40:8002/plants`);


    const handleLimitSubmit = (data) => {
        console.log(data.limit);
        setQuery(`http://145.24.237.40:8002/plants?limit=${data.limit}`);
    };

    const handleNewPage = (url) => {
        setQuery(url);
    };


    const loadSpots = async () => {
        try {
            console.log({query})
            const result = await fetch(query, {
                headers: {
                    'Accept': 'application/json'
                }

            })
            const data = await result.json()
            if (!result.ok) {
                throw Error(data.message)
            }
            setItems(data.items);
            setPagination(data.pagination)
            console.log(pagination._links?.next)
            console.log(data)

            console.log("NEXT TYPE:", typeof pagination._links?.next);
            console.log("PREV TYPE:", typeof pagination._links?.previous);
        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        loadSpots()
    }, [query]);

    return (
        <>
            <Limit onLimitSubmit={handleLimitSubmit}/>

            {items.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                />
            ))}

            {pagination && (

                <Pagination
                    newPage={handleNewPage}
                    next={pagination._links?.next ?? null}
                    previous={pagination._links?.previous ?? null}
                />
            )}

        </>
    );
}

export default Home;