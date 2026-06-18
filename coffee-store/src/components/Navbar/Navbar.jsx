import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><span>O</span>mer's Cafe</h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>Our Menu</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar;