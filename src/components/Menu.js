import './Menu.css';

function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <a href="/" className="menu-item-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="menu-item-link">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="menu-item-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
