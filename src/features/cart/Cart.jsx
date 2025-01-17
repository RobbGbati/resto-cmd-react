import { useSelector } from "react-redux"
import { getProductListQuantity } from "../../app/selector"

export const Cart = () => {
    const list = useSelector(getProductListQuantity)
    // const store = useStore()
    // const [list, setList] = useState(getProductList(store.getState()))

    // useEffect(() => {
    //     store.subscribe(() => setList(getProductList(store.getState())))
    // }, [store])

    // function addItem() {
    //     store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})
    // }

    return (
        <>
            <div className="Selection">
                <h1>Choisir son menu</h1>
                {/* <div className="CartNavBar">
                    <button onClick={() => addItem()}>Ajouter un super crémeux</button>
                </div> */}
                { list &&
                    list.map((item, index) =>
                        <span className="SelectedProduct" key={index}>{item.quantity} x {item.title}</span>
                    )
                }
            </div>
        </>
    )
}
