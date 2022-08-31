import { Navbar, Container } from 'react-bootstrap';
import { BsSearch, BsGithub } from 'react-icons/bs';

const Header = (props) => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>
          <BsSearch /> Google Job Searcher
        </Navbar.Brand>
        <Container style={{ display: 'flex', justifyContent: 'right' }}>
          <a
            style={{ textDecoration: 'none' }}
            href="https://github.com/burk96/google-job-searcher"
          >
            <BsGithub />
          </a>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Header;
