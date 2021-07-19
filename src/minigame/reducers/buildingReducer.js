
import { BUILD } from "../constants";

const buildingReducer = (state, action) => {

    switch (action.type) {
        case BUILD:
            return (
                state.map(building => {
                    if (building.shortName === action.payload.shortName) {
                        action.payload.setGold(gold => gold - building.goldNeeded[building.level]);
                        action.payload.setFood(food => food - building.foodNeeded[building.level]);
                        action.payload.setWood(wood => wood - building.woodNeeded[building.level]);
                        action.payload.setStone(stone => stone - building.stoneNeeded[building.level]);
                        return { ...building, level: (building.level + 1) }; //changes value in array
                    } else {
                        return building;
                    }
                }))

        default: return state;
    }
}



export default buildingReducer;