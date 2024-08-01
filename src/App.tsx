import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container } from "react-bootstrap";
import { Header, ResultCard, CustomInput } from "./components";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { CheckboxesState } from "./types/index";

export default function App() {
  const initialData = {
    sites: ["lever.co", "greenhouse.io", "jobs.ashbyhq.com", "app.dover.io"],
    roles: ["engineer", "developer"],
    contains: ["react"],
    excludes: ["staff", "senior", "sr", "principal", "lead", "c++"],
  };

  const [sites, setSites] = useState(initialData.sites);
  const [roles, setRoles] = useState(initialData.roles);
  const [contains, setContains] = useState(initialData.contains);
  const [excludes, setExcludes] = useState(initialData.excludes);
  const [after, setAfter] = useState([
    DateTime.now().minus({ months: 1 }).toSQLDate(),
  ]);
  const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
    Sites: true,
    Roles: true,
    Contains: true,
    Excludes: true,
    After: true,
  });

  const [queryStr, setQueryStr] = useState("");

  useEffect(() => {
    const queryStrArr = new Array<string>();
    for (const [key, val] of Object.entries(checkboxes)) {
      if (!val) continue;
      switch (key) {
        case "Sites":
          queryStrArr.push(sites.map((site) => `site:${site}`).join(" | "));
          break;
        case "Roles":
          queryStrArr.push(`(${roles.join(" | ")})`);
          break;
        case "Contains":
          queryStrArr.push(contains.map((token) => `"${token}"`).join(" "));
          break;
        case "Excludes":
          queryStrArr.push(
            excludes
              .map(
                (token) =>
                  `-${/^[A-Za-z]+$/.test(token) ? token : `"${token}"`}`
              )
              .join(" ")
          );
          break;
        case "After":
          queryStrArr.push(`after:${after}`);
          break;
      }
    }

    setQueryStr(queryStrArr.join(" "));
  }, [sites, roles, contains, excludes, after, checkboxes]);

  return (
    <div className="App">
      <Header repo_url="https://github.com/elanora96/google-job-searcher" />
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <Form
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Form.Text>Enter multiple values as comma seperated lists</Form.Text>
          <CustomInput
            label="Sites"
            state={sites}
            stateFunction={setSites}
            type="text"
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
          />
          <CustomInput
            label="Roles"
            state={roles}
            stateFunction={setRoles}
            type="text"
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
          />
          <CustomInput
            label="Contains"
            state={contains}
            stateFunction={setContains}
            type="text"
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
          />
          <CustomInput
            label="Excludes"
            state={excludes}
            stateFunction={setExcludes}
            type="text"
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
          />
          <CustomInput
            label="After"
            state={after}
            stateFunction={setAfter}
            type="date"
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
          />
        </Form>
        <ResultCard queryStr={queryStr} />
      </Container>
    </div>
  );
}
