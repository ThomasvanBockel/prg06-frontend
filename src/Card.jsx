import {Link} from "react-router";

function Card({id, name, type, description}) {

    return (
        <>
            <li className="border-blue-600 border border-solid text-center w-2/5 flex-col bg-blue-100 text-black ">
                <h1>{name}</h1>
                <p>{description ?? ""}</p>
                <p>{type}</p>

                <Link to={`/plants/${id}`}>Details</Link>
            </li>
        </>
    );
}

export default Card;