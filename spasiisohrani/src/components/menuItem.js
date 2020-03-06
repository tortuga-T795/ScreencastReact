import React from 'react'

const MenuItem = ({ title, Icon, click }) => {
    return (
        <div className="MenuItem" onClick={click} >
            <img className="ImgItem" src={Icon} alt="icon" />
            <div className="Title">
                {title}
            </div>
        </div>
    );
};

export default MenuItem;