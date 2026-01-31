import {Link} from "react-router";

function Card({id, name, type, description}) {

    return (
        <>
            <li className="border-black border border-solid text-center  flex-col  text-black p-2">
                <h1>{name}</h1>
                <p>{description ?? ""}</p>
                <p>{type}</p>

                <Link className="bg-white border border-black text-black px-2 py-1 rounded"
                      to={`/plants/${id}`}>Details</Link>
            </li>
        </>
    );
}

export default Card;