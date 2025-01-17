import { useDispatch, useSelector } from "react-redux"
import * as ProductList from "../../common/models"
import { ProductCard } from "../../common/components/ProductCard";
import { addProductThunk } from "../cart/cartSlice";
import { getUnavailableProducts } from "../../app/selector";
import { useEffect } from "react";
import { getUnavailableThunk } from "./menuSlice";



export const Menu = () => {
    const dispatch = useDispatch();
    const unavailableProducts = ['Double Cantal'] //useSelector(getUnavailableProducts)

    useEffect(() => {
        dispatch(getUnavailableThunk())
    }, [])

    return <div className="Menu">
        {
            Object.values(ProductList).map(
                product => <ProductCard key={product.title} 
                    product={product} 
                    onSelect={() => dispatch(addProductThunk(product))}
                    unavailable={unavailableProducts?.includes(product.title)} />
            )
        }
    </div>
}