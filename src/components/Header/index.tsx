import { useContext } from 'react'
import './styles.css'
import { ContextCartCount } from '../../utils/context-cart'

export default function Header() {

    const { contextCartCount } = useContext(ContextCartCount)

    return (
        <header className="container-header" >
            <nav className="container">
                <h1>DSFilter</h1>
                <p>{contextCartCount} produto(s)</p>
            </nav>
        </header>

    )
}
