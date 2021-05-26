import { useContext } from "react";
import Types from "../contexts/Types";
import Loading from "./Loading";

const BookType = ({ bookType }) => {

    const types = useContext(Types);
    const getType = types.filter(type => type.id === bookType);

    if (getType.length) {
        return (
            <div className='cat'>{getType[0].title}</div>
        );
    } else {
        return (
            <Loading />
        );
    }
}

export default BookType;