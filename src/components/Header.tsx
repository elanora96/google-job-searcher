import { Navbar, Container } from "react-bootstrap";
import { BsSearch, BsGithub } from "react-icons/bs";

interface HeaderProps {
  repo_url: string;
}

export default function Header(props: HeaderProps) {
  const { repo_url } = props;
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>
          <BsSearch /> Google Job Searcher
        </Navbar.Brand>
        <Container style={{ display: "flex", justifyContent: "right" }}>
          <a style={{ textDecoration: "none", color: "white" }} href={repo_url}>
            <BsGithub />
          </a>
        </Container>
      </Container>
    </Navbar>
  );
}
