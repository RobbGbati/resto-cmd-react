import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Cart } from '../features/cart/Cart'
import { Voucher } from '../features/voucher/voucher'
import { Owner } from '../features/owner/Owner'
import { Total } from '../features/total/Total'
import { Menu } from '../features/menu/Menu'
import { Notes } from '../features/notes/Notes'
import { Fidelity } from '../features/fidelity/Fidelity'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cart />
        <Total />
        <Voucher />
        <Menu />
        <Notes />
        <Owner />
        <Fidelity />
      </div>
    </Provider>
  )
}

export default App
