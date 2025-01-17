// import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { isVoucherAvailable } from "../../app/selector";
import { cartSlice } from "../cart/cartSlice";

export const Voucher = () => {
    const avalaible = useSelector(isVoucherAvailable)
    // const store = useStore()
    // const [avalaible, setAvalaible] = useState(isVoucherAvailable(store.getState()))

    // useEffect(() => {
    //     store.subscribe(() => setAvalaible(isVoucherAvailable(store.getState())))
    // })

    function applyVouchcer() {
        cartSlice.actions.applyVoucher({price: 2})
        // store.dispatch({type: 'APPLY_VOUCHER', payload: { price: 2}})
    }

    return <div className="Voucher">
        {avalaible && <button onClick={() => applyVouchcer()}>Appliquer ma promo Super crémeux à  2€</button>}
    </div>
}