import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
 
    return(
<>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.current==='dark'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.current}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.current}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.current}`} to="/about">About</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>

  <button type="button" onClick={props.toggleTheme} className={`btn btn-${props.current} text-${props.current==='dark'?'light':'dark'}`}>Enable {props.current} mode</button>

  </div>


</nav>

    </>
    );
}
Navbar.propTypes={
  title: PropTypes.string
};
Navbar.defaultProps={
  title: 'Anything'

};