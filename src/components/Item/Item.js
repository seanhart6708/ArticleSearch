import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.item.name}</h4>
                <img src={this.props.item.imageEntitites.thumbnailImage}/>
                <p>{this.props.item.salePrice} dollars</p>
            </div>
        )
    }
}