// Ваш компонент Header.jsx
import { NavLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';

const Nav = styled(AppBar)({
  background: '#333',
  margin:"0 0 50px 0",
  // position:"fixed",
});

const Ul = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
  width: '100%',
});

const Li = styled('li')({
  margin: '0 1rem',
});


const Header = () => {
  const theme = useTheme(); // Получаем доступ к теме

  return (
    <Nav position="static">
      <Toolbar>
        <Ul>
          <Li>
            <NavLink to="/client" theme={theme}>Register Client</NavLink>
          </Li>
          <Li>
            <NavLink to="/register" theme={theme}>Register</NavLink>
          </Li>
          <Li>
            <NavLink to="/loginPage" theme={theme}>Login</NavLink>
          </Li>
        </Ul>
      </Toolbar>
    </Nav>
  );
};

export default Header;
