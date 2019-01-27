import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';


@inject("Inventory")
@observer
class Item extends Component {
    buyItem = (e) => {
        this.props.Inventory.buyItem(e.target.value)
    }

    updatePrice = (e) => {
        let name = e.target.getAttribute("name")
        let price = prompt("Please enter updated price")
        this.props.Inventory.changePrice(name, price)
    }

    render() {
        return (<div><li onDoubleClick={this.updatePrice} name={this.props.i.name}>We have {this.props.i.quantity} {this.props.i.name} available at ${this.props.i.price} per item </li>
            <button value={this.props.i.name} onClick={this.buyItem}>Buy</button>
        </div>)
    }
}

export default Item