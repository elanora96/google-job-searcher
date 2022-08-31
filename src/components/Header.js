import { Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const Header = (props) => {
  return (
    <Navbar variant="dark" bg="dark" style={{ marginBottom: '1rem' }}>
      <Navbar.Brand>
        <BsSearch /> Google Job Searcher
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
