import React, { useState, useEffect, createContext, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const context = createContext();

export const StateContext = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuntites, settotalQuntites] = useState(0);
  const [qty, setqty] = useState(1);

  const incQty = () => {
    setqty((prevqty) => prevqty + 1);
  };
  const decQty = () => {
    setqty((prevqty) => {
      if (prevqty - 1 < 1) return 1;
      return prevqty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const chackProductInCart = cartItem.find(
      (item) => item._id === product._id
    );

    settotalPrice(
      (prevtotalPrice) => prevtotalPrice + product.price * quantity
    );
    settotalQuntites((prevtotalQuntites) => prevtotalQuntites + quantity);

    if (chackProductInCart) {
      let foundProduct = cartItem.find((item) => item._id == product._id);
      const newcartitems = cartItem.filter((item) => item._id != product._id);
      setcartItem([
        ...newcartitems,
        { ...foundProduct, quantity: foundProduct.quantity + quantity },
      ]);
    } else {
      product.quantity = quantity;
      setcartItem([...cartItem, { ...product }]);
    }
    toast.success(`${quantity} ${product.name} added to the bag`)
  };

  const changeCartProductQuantity = (id, value) => {
    let foundProduct = cartItem.find((item) => item._id == id);
    const newcartitems = cartItem.filter((item) => item._id != id);
    if (value == "inc") {
      settotalPrice((prevtotalPrice) => prevtotalPrice + foundProduct.price);
      settotalQuntites((prevtotalQuntites) => prevtotalQuntites + 1);
      setcartItem([
        ...newcartitems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
    } else if (value == "dec") {
      if (foundProduct.quantity > 1) {
        settotalPrice((prevtotalPrice) => prevtotalPrice - foundProduct.price);
        settotalQuntites((prevtotalQuntites) => prevtotalQuntites - 1);
        setcartItem([
          ...newcartitems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
      }
    }
  };

  const removeCartProducr = (id) => {
    let foundProduct = cartItem.find((item) => item._id == id);
    const newcartitems = cartItem.filter((item) => item._id != id);
    settotalPrice((prevtotalPrice) => prevtotalPrice - foundProduct.price*foundProduct.quantity);
    settotalQuntites((prevtotalQuntites) => prevtotalQuntites - foundProduct.quantity);
    setcartItem([...newcartitems]);
  };

  const buyNow=()=>toast('Sorry! This is a test application', {
    icon: '😿',
  });

  return (
    <context.Provider
      value={{
        cartItem,
        totalPrice,
        totalQuntites,
        qty,
        incQty,
        decQty,
        onAdd,
        changeCartProductQuantity,
        removeCartProducr,
        buyNow,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
