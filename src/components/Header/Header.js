import { Toolbar } from '@mui/material'

import Logo from '../../assets/logo.png';
import './Header.css';
import ButtonComponent from '../common/ButtonComponent';

const Header = (props) => {
  
  return (
    <div className="main-header">
      <Toolbar>
        <div className="main-box">
          <img src={Logo} alt="logo" width={64} height={20} />
          <h3>Lead Time Analytics - {props.title}</h3>
          {/* <Button sx={{ color: "#fff" }} onClick={props.handleLogout}>
            Logout
          </Button> */}
          <ButtonComponent
            props={{
              variant: 'outlined',
              size: 'medium',
              color: 'success',
              text: 'Logout',
              onClick: props.handleLogout,
            }}
           />
        </div>
      </Toolbar>
    </div>
  );
}

export default Header