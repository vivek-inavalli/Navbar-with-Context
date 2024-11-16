import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme(isDarkTheme)
      }

      const backgroundContainer = isDarkTheme ? 'dark-bg' : 'light-bg'
      const navbarColorItem = isDarkTheme ? 'dark-color' : 'light-color'
      const iconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const toggleThemeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <>
          <nav className={`navbar ${backgroundContainer}`}>
            <img src={iconUrl} alt="website logo" className="website-logo" />
            <ul className="nav-items-list">
              <Link to="/" className="nav-item">
                <li className={`list-item ${navbarColorItem}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-item">
                <li className={`list-item ${navbarColorItem}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="toggle-btn"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img
                src={toggleThemeIconUrl}
                alt="theme"
                className="toggle-icon"
              />
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
