import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { BsClipboardCheck, BsSearch } from 'react-icons/bs';

const ResultCard = (props) => {
  const { queryStr } = props;

  return (
    <Card>
      <Card.Header>Search String</Card.Header>
      <Card.Body>
        <p>{queryStr}</p>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup>
          <Button
            onClick={() => navigator.clipboard.writeText(queryStr)}
            variant="secondary"
          >
            <BsClipboardCheck /> Copy to Clipboard
          </Button>
          <Button
            onClick={() =>
              window.open(
                `https://www.google.com/search?q=${encodeURIComponent(
                  queryStr
                )}`,
                '_blank'
              )
            }
          >
            <BsSearch /> Search on Google
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ResultCard;
