import { useEffect, useState } from "react"
import { useStore } from "react-redux"

export const Owner = () => {
    const store = useStore()
    const [owner, setOwner] = useState(store.getState().owner)

    useEffect(() => store.subscribe(() => setOwner(store.getState().owner)))

    function updateOwner(event) {
        event.preventDefault();
        const firstName = event.currentTarget.firstName.value;
        store.dispatch({type: 'UPDATE_FIRSTNAME', payload: firstName})
    }

    return <div className="OwnerForm">
        <form onSubmit={updateOwner}>
            <h2>Propriétaire du restaurant</h2>
            {owner?.firstName ? <div className="label">Le propriétaire du restaurant est {owner.firstName}</div> : <div>Le propriétaire n&apos; a pas été configuré</div>
            }
            <label>
                Prénom du propriétaire
            </label>
                <input type="text" name="firstName" />
            <button type="submit">Configurer le propriétaire</button>
        </form>
    </div>
}