import { ZooBoxWithCompose, CityBoxWithCompose } from '../hocs/universalusHocsai/withCompose'; //MODIFIKUOTAS
import ZooBox from './ZooBox' //NERA MODIFIKUOTAS

// UNIVERSALŪS HOC'AI, kad keli komponentai naudotų TIK tuos pačius
//***************HOC START ************************/
//cia rasau del to, kad butu patogiau keisti viska, siaip turetu tokia informacija ateiti is serverio :)
const zooList = [{ id: 37, name: 'Arklys' }, { id: 45, name: 'Karvė ' }, { id: 123, name: 'Gyvatė ' }]; //masyve yra objektai, kiekvienas objektas turi ID ir name
//const zooList = null; // Error'a padarome
//const zooList = []; //padarome tuscia masyva

//const cityList = [{ id: 37, name: 'Klaipeda', country: 'Lithuania' }, { id: 45, name: 'Hurghada', country: 'Egypt' }];
const cityList = [];
//const cityList = null;



const HocsUniversalus = () => {

    return (
        <>
            <ZooBoxWithCompose zooList={zooList} errorColor={'red'} emptyColor={'orange'} />
            <div className='tarpas'></div> 
            <CityBoxWithCompose cityList={cityList} errorColor={'red'} emptyColor={'orange'} />
        </>
    )

}

export default HocsUniversalus;