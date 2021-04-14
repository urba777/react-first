import React, { useEffect, useState } from 'react';

const ZooBox = ({ zooList }) => {


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
                        <td>{animal.name}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default ZooBox;