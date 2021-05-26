import { useContext } from "react";
import Types from "../contexts/Types";

const BooksTypeSelector = ({ handleTypeSelect, typeSelectValue }) => {

    const types = useContext(Types);

    [].concat(types).sort((a, b) => a.title > b.title ? 1 : -1);

    return (
        <div className='selectorBox'>
            <select onChange={handleTypeSelect} value={typeSelectValue}>
                <option value='0'>Select type / All books</option>
                {
                    types.sort((a, b) => a.title > b.title ? 1 : -1).map((type) =>
                        <option key={type.id} value={type.id}>{type.title}</option>)
                }
            </select>
        </div>
    )
}

export default BooksTypeSelector;