import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, List } from 'react-bootstrap-icons';

// CSS
import './NavBar.css';

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div>
      <header>
        <div className="title">
          <h2>
            <Link to="/">Cinemania</Link>
          </h2>
        </div>
        <nav className={`navbar ${menuIsOpen ? 'open' : ''}`}>
            <List 
                className="menu-icon"
                onClick={toggleMenu}
            />
            <ul className={`navbar-links ${menuIsOpen ? 'hidden' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Filmes</Link></li>
                <li><Link to="/series">Séries</Link></li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Buscar filme ou série"
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                    />
                      <button type="submit"><Search /></button>
                  </form>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar;
