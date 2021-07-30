import React, {useEffect, useState} from "react";
const Backend=()=>{
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="App">
        <header className="App-header">
            <h1>Suprice Surplice the king is back...</h1>
            <p>{!data ? "Loading..." : data}</p>
        </header>
        </div>
);
}

export default  Backend;