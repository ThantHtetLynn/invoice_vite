import {
  newProductName,
  newProductPrice,
  productCartTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./states";

export const addNewProductBtnHandler = () => {
  //  console.log("add new product");
  const createId = uuidv4();
  productGroup.append(
    createProductCart(
      createId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );
  productSelect.append(
    new Option(`${newProductName.value} - ${newProductPrice.valueAsNumber}`, createId)
  );

  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });

  console.log(products);

  newProductName.value = null;
  newProductPrice.value = null;
};

export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productGroup.append(createProductCart(id, name, price));
    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};

export const createProductCart = (id, name, price) => {
  const productCart = productCartTemplate.content.cloneNode(true);
  const productName = productCart.querySelector(".product-name");
  const productPrice = productCart.querySelector(".product-price");
  const currentProductCart = productCart.querySelector(".product-card");

  currentProductCart.id = id;

  productName.innerText = name;
  productPrice.innerText = price;

  return productCart;
};
