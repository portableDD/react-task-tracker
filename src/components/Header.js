import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const Location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        {Location.pathname === "/" && <Button 
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? "Close" : "Add"}  
          onClick ={onAdd} 
        />}
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propsTypes= {
    title: PropTypes.string
}

// const headingStyle = {
//     color : "red",
//     backgroudColor : "black"
// }

export default Header