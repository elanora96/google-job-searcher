import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container } from 'react-bootstrap';
import { Header, ResultCard, CustomInput } from './components';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const App = () => {
  const initialData = {
    sites: ['lever.co', 'greenhouse.io', 'jobs.ashbyhq.com', 'app.dover.io'],
    roles: ['engineer', 'developer'],
    contains: ['react'],
    excludes: ['staff', 'senior', 'sr', 'principal', 'lead', 'c++'],
  };

  const [sites, setSites] = useState(initialData.sites);
  const [roles, setRoles] = useState(initialData.roles);
  const [contains, setContains] = useState(initialData.contains);
  const [excludes, setExcludes] = useState(initialData.excludes);
  const [after, setAfter] = useState(
    DateTime.now().minus({ months: 1 }).toSQLDate()
  );
  const [checkboxs, setCheckboxs] = useState({
    Sites: true,
    Roles: true,
    Contains: true,
    Excludes: true,
    After: true,
  });

  const [queryStr, setQueryStr] = useState('');

  useEffect(() => {
    const sitesStr = checkboxs['Sites']
      ? sites.map((e) => `site:${e}`).join(' | ')
      : '';
    const rolesStr = checkboxs['Roles'] ? `(${roles.join(' | ')})` : '';
    const containsStr = checkboxs['Contains']
      ? contains.map((e) => `"${e}"`).join(' ')
      : '';
    const excludesStr = checkboxs['Excludes']
      ? excludes
          .map((e) => `-${/^[A-Za-z]+$/.test(e) ? e : `"${e}"`}`)
          .join(' ')
      : '';
    const afterStr = checkboxs['After'] ? `after:${after}` : '';

    setQueryStr(
      [sitesStr, rolesStr, containsStr, excludesStr, afterStr].join(' ')
    );
  }, [sites, roles, contains, excludes, after, checkboxs]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Form>
          <Form.Text>Enter multiple values as comma seperated lists</Form.Text>
          <CustomInput
            label="Sites"
            state={sites}
            stateFunction={setSites}
            type="text"
            checkboxs={checkboxs}
            setCheckboxs={setCheckboxs}
          />
          <CustomInput
            label="Roles"
            state={roles}
            stateFunction={setRoles}
            type="text"
            checkboxs={checkboxs}
            setCheckboxs={setCheckboxs}
          />
          <CustomInput
            label="Contains"
            state={contains}
            stateFunction={setContains}
            type="text"
            checkboxs={checkboxs}
            setCheckboxs={setCheckboxs}
          />
          <CustomInput
            label="Excludes"
            state={excludes}
            stateFunction={setExcludes}
            type="text"
            checkboxs={checkboxs}
            setCheckboxs={setCheckboxs}
          />
          <CustomInput
            label="After"
            state={after}
            stateFunction={setAfter}
            type="text"
            checkboxs={checkboxs}
            setCheckboxs={setCheckboxs}
          />
        </Form>
        <ResultCard queryStr={queryStr} />
      </Container>
    </div>
  );
};

export default App;
