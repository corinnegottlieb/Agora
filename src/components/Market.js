import React, { Component } from 'react'
import Item from './Item';
import { inject, observer } from 'mobx-react';

@inject("Inventory")
@observer
class Market extends Component {
    addItem = (e) => {
        if (e.which === 13) {
            this.props.Inventory.addItem(e.target.value)
            e.target.value = ""
        }
    }
    render() {
        return (
            <div>
                <div>{this.props.Inventory.numItems}</div>
                <input type="text" onKeyDown={this.addItem}></input>
                {this.props.Inventory.items.map(i =>
                    <Item i={i} />)}
            </div>
        )
    }
}

export default Market