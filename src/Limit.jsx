import {Link} from "react-router";
import {useState} from "react";

function Limit({onLimitSubmit}) {

    const [limitData, setLimitData] = useState({
        limit: ''
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setLimitData({
            ...limitData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onLimitSubmit(limitData)


    }
    return (
        <>
            <form className="flex flex-row items-center justify-center" onSubmit={handleSubmit}>
                <label className="text-sm font-medium text-gray-700" htmlFor="limit">Limiet</label>
                <input
                    className="border border-black bg-white text-black px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    type="text"
                    id="limit"
                    name="limit"
                    value={limitData.limit}
                    onChange={handleInputChange}

                />
                <button className="bg-white border border-black text-black px-4 py-2 rounded">toevoegen</button>
            </form>

        </>
    );
}

export default Limit;