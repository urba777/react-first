import React, { useEffect, useState } from 'react';
const CityBox = ({ cityList, listColor }) => {


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
                {cityList.map(city =>
                    <tr key={city.id}>
                        <td>{city.id}</td>
                        <td>{city.country}</td>
                        <td style={{color: listColor}}>{city.name}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default CityBox;