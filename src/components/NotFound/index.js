// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const isDarkTheme = {value}
      const textColor = isDarkTheme ? 'light' : 'dark'
      const notFoundDescription = isDarkTheme ? 'light' : 'dark'
      const backgroundContainer = isDarkTheme
        ? 'bg-dark-container'
        : 'bg-light-container'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${backgroundContainer}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={`not-found-heading ${textColor}`}>Lost Your Way?</h1>
            <p className={`not-found-description ${notFoundDescription}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound