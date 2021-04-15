import React from "react"

export const withGalleryLoading = (checkFunction, GalleryLoading) => (Component) => (props) => 
    //returniname atsakyma priklausomai ar tuscias masyvas ar ne
    checkFunction(props)
        ? <GalleryLoading/>
        : <Component {...props} />
