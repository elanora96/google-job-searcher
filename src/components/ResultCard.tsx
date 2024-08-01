import { Card, Button } from "react-bootstrap";
import { BsClipboardCheck, BsSearch } from "react-icons/bs";

interface ResultCardProps {
  queryStr: string;
}

export default function ResultCard(props: ResultCardProps) {
  const { queryStr } = props;

  return (
    <Card>
      <Card.Header>Search String</Card.Header>
      <Card.Body>
        <p>{queryStr}</p>
      </Card.Body>
      <Card.Footer style={{ display: "flex", gap: ".5rem" }}>
        <Button
          onClick={() => navigator.clipboard.writeText(queryStr)}
          variant="secondary"
        >
          <BsClipboardCheck /> Copy to Clipboard
        </Button>
        <Button
          onClick={() =>
            window.open(
              `https://www.google.com/search?q=${encodeURIComponent(queryStr)}`,
              "_blank"
            )
          }
        >
          <BsSearch /> Search on Google
        </Button>
      </Card.Footer>
    </Card>
  );
}
