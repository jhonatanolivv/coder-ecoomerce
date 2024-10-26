import { CartIcon } from '../../components/cart-icon/cart-icon';
import './navigation.scss';

export function Navigation() {
    return (
        <>
        <div className="navigation">
            <div className='logo-container'>
                <h1>Coder E-Commerce</h1>
            </div>
            <div className="nav-links-container">
                <a href="#" className="nav-link">SHOP</a>  
                <a href="#" className="nav-link">LOGIN</a>
                <CartIcon />  
            </div>
        </div>
        </>
    )
} 