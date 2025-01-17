// import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getProductList, getTotalOrder } from "../../app/selector"

export const Total = () => {
    // const store = useStore()
    // const [list, setList] = useState(getProductList(store.getState()))
    // const total = getTotalOrder(store.getState())
    const list = useSelector(getProductList)
    const total = useSelector(getTotalOrder)

    // useEffect(() => {
    //     store.subscribe(() => setList(getProductList(store.getState())))
    // }, [store])

    return <div className="TotalCommand">
        { list.length === 0 ? <div>Aucun produit sélectionné</div> :
            <div>Total de commande = {total} €</div>
        }
    </div>

}