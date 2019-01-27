import { observable, action, computed } from 'mobx'

class Item {
    @observable name
    @observable price = 0
    @observable quantity = 1
    constructor(name) {
        this.name = name
    }
}

class Inventory {
    @observable items = []
    @observable length
    @action addItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item) {
            item.quantity++
        }
        else {
            let newItem = new Item(name)
            this.items.push(newItem)
        }
    }
    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        item.quantity--
        if (item.quantity === 0) {
            let index = this.items.findIndex(i => i.name === name)
            this.items.splice(index, 1)
        }
    }
    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }

    @computed get numItems() {
        let counter = 0
        this.items.forEach(i => counter += i.quantity)
        return counter
    }

}

let agora = new Inventory()


export default agora