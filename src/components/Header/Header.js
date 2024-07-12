import { Toolbar } from '@mui/material'

import Logo from '../../assets/logo.png';
import './Header.css';

const Header = (props) => {
  
  return (
    <div className="main-header">
      <Toolbar>
        <div className="main-box">
          <img src={Logo} alt="logo" width={64} height={20} />
          <h3>Lead Time Analytics - {props.title}</h3>
          <p onClick={props.handleLogout} style={{cursor: 'pointer', color: '#fff'}}>Logout</p>
        </div>
      </Toolbar>
    </div>
  );
}

export default Header