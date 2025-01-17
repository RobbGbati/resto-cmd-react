const IMAGES = {
    "Double Cantal": "public/DoubleCantal.svg",
    "Super Crémeux": "public/SuperCremeux.svg",
    "Poulet Croquant": "public/PouletCroquant.svg",
}

export const ProductCard = ({product, unavailable, onSelect}) => {

    return <div className="ProductCard" onClick={!unavailable ? onSelect : () => {}}>
        <img src={IMAGES[product.title]} alt={product.title} />
        {product.title} {product.price}€
        {unavailable && <span className="ProductUnavailable">Indisponible</span>}
    </div>
}
