import { compose } from 'recompose'; //treciuju saliu biblioteka parsisiusta
import Gallery from "../components/Gallery";
import { withGalleryLoading } from '../hocs/withGalleryLoading'
import GalleryLoading from "../components/GalleryLoading"

//const withGalleryCompose = compose(
//    withGalleryLoading
//);

const checkIfGalleryIsLoading = (props) => !props.photoListState.length;

const withGalleryCompose = compose(
    withGalleryLoading(checkIfGalleryIsLoading, GalleryLoading)
)(Gallery);

export default withGalleryCompose; //isexportiname funkcijos rezultata su tuo komponentu, kuri norime modifikuoti
