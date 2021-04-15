import { ZooBoxWithCompose, CityBoxWithCompose } from '../hocs/universalusHocsai/withCompose'; //MODIFIKUOTAS
import ZooBox from './ZooBox' //NERA MODIFIKUOTAS

//import withZooBoxEmpty from '../hocs/withZooBoxEmpty';
//import withZooBoxError from '../hocs/withZooBoxError';


//***************HOC START ************************/
//cia rasau del to, kad butu patogiau keisti viska, siaip turetu tokia informacija ateiti is serverio :)
const zooList = [{ id: 37, name: 'Arklys' }, { id: 45, name: 'Karvė ' }]; //masyve yra objektai, kiekvienas objektas turi ID ir name
//const zooList = null; // Error'a padarome
//const zooList = []; //padarome tuscia masyva

const cityList = [{ id: 37, name: 'Klaipeda', country: 'Lithuania' }, { id: 45, name: 'Hurghada', country: 'Egypt' }];
//const cityList = [];
//const cityList = null;


//*******     HOCsu uzrasymo pirmasis variantas 
//(pirmiau pasitikriname ar isvis yra ZooBox3 (ar egzistuoja masyvas), paskui tik ZooBox2 ir tik paskui ZooBox)
//const ZooBox2 = withZooBoxEmpty(ZooBox);
//const ZooBox3 = withZooBoxError(ZooBox2); 
//ir returne App() nurodyti <ZooBox3 zooList={zooList}/>

//*******     HOCsu uzrasymo antrasis variantas:
//sukuriame viena konstanta tik, cia geresnis variantas negu pirmas, kad daug nereiketu rasyti
//const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox))

//*******     HOCsu uzrasymo treciasis variantas panaudojant biblioteka recompose:   
//const withZooBoxFinal = compose(
//  withZooBoxError, //erroras. kad nera tokio masyvo
//  withZooBoxEmpty //empty warningas
//);
//const ZooBoxFinal = withZooBoxFinal(ZooBox);
//BET compose sukureme withZooBoxCompose.jsx



//***************HOC END ************************/


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