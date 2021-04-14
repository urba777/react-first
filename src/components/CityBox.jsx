import React, { useEffect, useState } from 'react';
//HOCS UNIVERSALAUS KOMPONENTAS
const CityBox = ({ list }) => {


    useEffect(() => {

    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Country</th>
                    <th>Name</th>
                </tr>
                {list.map(city =>
                    <tr key={city.id}>
                        <td>{city.id}</td>
                        <td>{city.country}</td>
                        <td>{city.name}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default CityBox;