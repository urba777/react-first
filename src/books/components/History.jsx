//useHistory VIDEO 2021.05.05 1:55:00
import { useHistory } from 'react-router-dom';

const History = () => {

    const history = useHistory();

    const changeHistory = () => {
        history.replace('/'); //arba .push
        console.log('yes', history)
    }

    return (
        <button className="myButton" onClick={changeHistory}>Change History</button>
    )
}

export default History;