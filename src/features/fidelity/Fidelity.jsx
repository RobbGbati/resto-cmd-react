import { useGetFidelityQuery } from "../../services/api.service"

export const Fidelity = () => {

    const { data: fidelity, isLoading } = useGetFidelityQuery()

    return !isLoading &&  
    <div className="FidelityPoints">
        <h2>Vos points de fidélité sont à {fidelity?.amount} points</h2>

    </div>
}