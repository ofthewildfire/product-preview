import React, { Fragment } from 'react'
import mobileImage from "../assets/images/image-product-mobile.jpg";
import desktopImage from "../assets/images/image-product-desktop.jpg";

function Picture() {
  return (
    <>
<picture>
    <source srcset={desktopImage} media="(min-width: 660px)" />
   <img src={mobileImage} alt="Picture of a bottle of Chanel perfume" />
</picture>
    </>
  )
}

export default Picture