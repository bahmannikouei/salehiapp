import React from "react";


const Ul =() => {

    const obst = ['Apfel' , 'Bananen' , 'Orangen' , 'Erdbeere'];

    return (
        <div>
            <h1>Obst Liste</h1>
            <ul>
                {obst.map((obst,index) => (
                    <li keyA={index}>Name: {index} {obst}</li>
                ))}
            </ul>
            <a href="https://www.google.com" target="_blank" salehi="true">Google Website</a>
            <h1>h1</h1>
            <h2>h2</h2>
        </div>
    );
}

export default Ul;