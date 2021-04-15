import React, { useEffect, useState } from 'react';

const ZooBox2 = ({ zooList, listColor }) => { //propsas is HocsUniversalus


    useEffect(() => {

    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {zooList.map(animal =>
                    <tr key={animal.id}>
                        <td>{animal.id}</td>
                        <td style={{color: listColor}}>{animal.name}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default ZooBox2;