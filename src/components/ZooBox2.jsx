import React, { useEffect, useState } from 'react';

const ZooBox2 = ({ list }) => { //propsas is HocsUniversalus


    useEffect(() => {

    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {list.map(animal =>
                    <tr key={animal.id}>
                        <td>{animal.id}</td>
                        <td>{animal.name}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default ZooBox2;