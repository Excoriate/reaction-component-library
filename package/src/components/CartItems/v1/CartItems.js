import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Items = styled.div``;

class CartItems extends Component {
  static propTypes = {
    /**
     * Provided child components to display item data
     */
    components: PropTypes.shape({
      /**
       * CartItem component
       */
      CartItemComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * CartItemDetail component
       */
      CartItemDetailComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Stock warning component
       */
      CartItemStockWarningComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Price component
       */
      CartItemPriceComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * QuantityInput component
       */
      CartItemQuantityInputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * CartItem data
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * The cart item ID
         */
        _id: PropTypes.string,
        /**
         * Array of additional attributes of the chosen item.
         */
        attributes: PropTypes.arrayOf(
          PropTypes.shape({
            /**
             * Attribute label (i.e. "Color").
             */
            label: PropTypes.string,
            /**
             *  Attribute value (i.e. "Red").
             */
            value: PropTypes.string
          })
        ),
        /**
         * Current stock quantity of item
         */
        currentQuantity: PropTypes.number,
        /**
         * Image url of chosen item
         */
        imageUrl: PropTypes.string,
        /**
         * Price object of chosen item
         */
        price: PropTypes.shape({
          /**
           * Chosen items compare at price
           */
          compareAtPrice: PropTypes.string,
          /**
           * Chosen items display price
           */
          displayPrice: PropTypes.string
        }),
        /**
         * Chosen items slug
         */
        productSlug: PropTypes.string,
        /**
         * Chosen items title
         */
        title: PropTypes.string,
        /**
         * Quantity of chosen item in cart
         */
        quantity: PropTypes.number
      })
    ).isRequired,
    /**
     * On cart item quantity change handler
     */
    onChangeCartItemQuantity: PropTypes.func,
    /**
     * On remove item from cart handler
     */
    onRemoveItemFromCart: PropTypes.func
  };

  static defaultProps = {
    components: {
      CartItemComponent: "Cart Item",
      CartItemDetailComponent: "Cart Item Detail",
      CartItemStockWarningComponent: "Cart Item Stock Warning",
      CartItemPriceComponent: "Cart Item Price",
      CartItemQuantityInputComponent: "Cart Item Quantity Input"
    },
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  render() {
    const { items, components: { CartItemComponent, ...components }, ...props } = this.props;
    return (
      <Items>
        {items.map((item) => <CartItemComponent key={item._id} item={item} components={components} {...props} />)}
      </Items>
    );
  }
}

export default CartItems;
