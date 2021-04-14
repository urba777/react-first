import { compose } from 'recompose'; //treciuju saliu biblioteka parsisiusta
import Gallery from "../components/Gallery";
import {withGalleryLoading} from '../hocs/withGalleryLoading'

const withGalleryCompose = compose(
    withGalleryLoading
);

export default withGalleryCompose(Gallery); //isexportiname funkcijos rezultata su tuo komponentu, kuri norime modifikuoti

