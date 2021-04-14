import { useEffect, useState } from "react";
import Gallery from "../hocs/withGalleryCompose";
import API from '../shared/picsumphotos'; //is cia paimamas json'u URL

const GalleryHocs = () => {

    const [photoListState, setPhotoListState] = useState([]);
    const [userErrorState, setUserErrorState] = useState(''); //Gallery ERROR state

    const handleAscending = () => {
        let copyImages = [...photoListState];
        copyImages.sort((a, b) => a.author.localeCompare(b.author));
        setPhotoListState(copyImages);
    };

    const handleDescending = () => {
        let copyImages = [...photoListState];
        copyImages.sort((a, b) => b.author.localeCompare(a.author));
        setPhotoListState(copyImages);
    };

    const handleRandom = () => {
        let copyImages = [...photoListState];
        for (var i = copyImages.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copyImages[i];
            copyImages[i] = copyImages[j];
            copyImages[j] = temp;
        }
        setPhotoListState(copyImages);
    };

    useEffect(() => {
        API.get('v2/list') //padarant klaidinga nuoroda atsiras error'as
            .then(response => {
                console.log(response.data); //Ataskymas iš serverio. Data skiltyje parodys visą info masyvo
                setPhotoListState(response.data); //F12 response
                setUserErrorState('');
            })
            .catch(error => {
                setUserErrorState('Error while getting gallery list information');
                console.log('Error status: ' + error.response.status); //F12 response
            })
    }, []) //Tam, kad į serverį kreiptųsi tik viena kartą MOUNT metu -> [tuščias masyvas]

    return (
        <Gallery
            photoListState={photoListState}
            handleAscending={handleAscending}
            handleDescending={handleDescending}
            handleRandom={handleRandom}
            userErrorState={userErrorState}
        />
    )

}

export default GalleryHocs;