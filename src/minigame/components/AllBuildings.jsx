import Building from "./Building";
// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ViewBuilding from "./ViewBuilding";
import WorkerAllBuildingsPage from "./WorkerAllBuildingsPage";

const AllBuildings = ({ allBuildings, ...props }) => {

    document.title = 'Resource Game';
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <div className="buildings">
                            {<WorkerAllBuildingsPage {...props}/>}
                            {allBuildings.map(building =>
                                <ViewBuilding key={building.id}
                                    building={building}
                                    {...props}
                                />
                            )}
                        </div>
                    </Route>

                    <Route exact path='/building/:id'> {/* su parametru id parodysime tik viena norima preke su useParams() */}
                        <Building
                            allBuildings={allBuildings}
                            {...props}
                        />
                    </Route>

                    <Route path='*'> {/* cia gali buti bet kas bet tik su SWITCH*/}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ textAlign: 'center', color: 'red' }}>404 PAGE NOT FOUND</h3> {/* jei nebus atitikmens, ismes sita */}
                            <Link to='/'>
                                <button style={{ border: 'none' }} className="myButton">MAIN PAGE</button>
                            </Link>
                        </div>
                    </Route>

                </Switch>
            </Router>
        </>
    )
}

export default AllBuildings;