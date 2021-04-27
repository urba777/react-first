import { memo } from "react";
// memo yra HOC, i kuri galime suwrappinti savo komponenta
export const Plane = ({ number, time }) => {
    console.log('PLANE RENDER (memo)');
    return (
        <div className='box'>
            <h1>Number: {number}</h1>
            <h1>Time: {time}</h1>
        </div>
    );
}



//memo i kuri iwrapintas Plane komponentas
export const MemoPlane = memo(Plane);

