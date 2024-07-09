import { productRender } from "./inventory";
import { productSideBar } from "./selectors";
import { products } from "./states";

const initialRender = () => {
     //open product sideBar as soon as the web begin.
     // productSideBar.classList.remove("translate-x-full");
     productRender(products);
};

export default initialRender;