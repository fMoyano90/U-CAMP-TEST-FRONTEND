export const ProductCard = (product) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <p>
        <b>{product.title}</b>
        <br /> <span>{product.condition}</span>
      </p>
      <div className='container-image'>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <p>
        Precio: $ {product.price} <small>({product.currency_id})</small>
      </p>
      <p>
        Cantidad disponible:&nbsp;
        {product.available_quantity === 0
          ? "Producto agotado"
          : product.available_quantity}
      </p>
    </div>
  );
};
