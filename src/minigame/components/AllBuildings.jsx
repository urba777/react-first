import allBuildings from "../buildings/allBuildings";
import Building from "./Building";
import { v4 as uuidv4 } from 'uuid';

const AllBuildings = ({allBuildings, ...props}) => {

    return (
        <>
            {allBuildings.map(building =>
                <Building
                    building={building}
                    {...props}
                />
            )}
        </>
    )
}

export default AllBuildings;