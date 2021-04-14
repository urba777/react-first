import GalleryLoading from "../components/GalleryLoading"
import React from "react"

export const withGalleryLoading = (Component) => (props) => 
    //returniname atsakyma priklausomai ar tuscias masyvas ar ne
    !props.photoListState.length
        ? <GalleryLoading/>
        : <Component {...props} />
