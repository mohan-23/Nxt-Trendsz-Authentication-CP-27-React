import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <ul className="link-items">
      <li className="item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="item">
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </li>
      <li className="item">
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </li>
      <button type="button" className="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
