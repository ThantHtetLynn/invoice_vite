import { productSideBar } from "./selectors";

export const manageInventoryBtnHandler = () => {
    // console.log("U clicked manage inventory btn.");
    console.log(productSideBar.classList.remove("translate-x-full"));
    console.log(productSideBar.classList.add("duration-300"));

};

export const closeSideBarBtnHandler = () => {
    console.log(productSideBar.classList.add("translate-x-full"));
 
};

