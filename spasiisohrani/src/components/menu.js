import React from 'react';
import MenuItem from './menuItem';


const Menu = ({ MenuList, click }) => {
    return (
        <div className="Menu" >
            {MenuList.map((item, id) => <MenuItem title={item.title} Icon={item.Icon} click={() => click(id)} />)}
        </div>
    );
};

export default Menu;