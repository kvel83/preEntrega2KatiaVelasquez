export let products = [];
export const getProducts = async() => {
    try {
	    let products = await fetch("products.json");
      products = await products.json();
      return products;
    } catch (error) {
        console.log("error al cargar los datos")
    }
};

export const getProductById = async(productId) => {
  await getProducts();
  let product = products?.find(prod => prod.id === productId);
  if (product){
    return product
  }else{
    console.log("producto no encontrado");
    return null;
  }
};

export const getProductsByCategory = async(category) => {
  await getProducts(); // Esperar a que los productos se carguen antes de continuar
  const productsByCategory = products.filter((product) => product.cat === category);
  if (productsByCategory.length > 0) {
    return productsByCategory;
  } else {
    console.log(`No se encontraron productos para la categoría: ${category}`);
    return [];
  }
}