import React from 'react';

import Item from '../Item/Item.js';

class ItemList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map(item => {
                        return <Item item={item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}

module.exports = ItemList;