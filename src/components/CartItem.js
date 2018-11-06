import React, { Component } from 'react';
import * as msg from './../constants/Messages';

class CartItem extends Component {

    render() {
        var {item} = this.props;
        var {quantity} = item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity(item.product,item.quantity - 1) }>
                            <a href="#a">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity(item.product,item.quantity + 1) }>>
                            <a href="#a">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price,item.quantity)}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick = { () => this.onDelete(item.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onDelete = (product) => {
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(msg.MSG_DELETED_CART_PRODUCT);
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(msg.MSG_UPDATED_CART);
        }
    }
}

export default CartItem;
