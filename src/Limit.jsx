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
            <form onSubmit={handleSubmit}>
                <label htmlFor="limit">Limiet</label>
                <input
                    type="text"
                    id="limit"
                    name="limit"
                    value={limitData.limit}
                    onChange={handleInputChange}
                    className="border"
                />
                <button>toevoegen</button>
            </form>

        </>
    );
}

export default Limit;