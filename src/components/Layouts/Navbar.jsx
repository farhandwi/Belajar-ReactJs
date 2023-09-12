/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

function limitedDigit(number) {
  var numberStr = number.toString();
  var split = numberStr.split('.');
  
  if (split.length === 2) {
    var digitDesimal = split[1].length > 2 ? split[1].slice(0, 2) : split[1];
    return parseFloat(split[0] + '.' + digitDesimal).toString();
  } else {
    return numberStr;
  }
}

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-black p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | price : ${limitedDigit(total)}
      </div>
      <Button className="bg-black p-2 px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
