import React from "react";

const Modal = ({selectImg, setSelectedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    return(
        <div className ="backdrop" onClick={handleClick} >
            <img src={selectImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal;
