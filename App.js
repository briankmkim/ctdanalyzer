import ReactDOM from "react-dom";
import * as React from 'react';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

//import "./delete3.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import companyLogo from './overall_logo.png'

//import Navbar from "./components/navbar";
import EnterpriseRecords from "./components/enterpriseRecords";
import MobileRecords from "./components/mobileRecords";
import ICSRecords from "./components/icsRecords";
//import Edit from "./components/edit";
//import Create from "./components/create";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enteprise, setEnteprisePage] = useState(false);
  const [ics, setICSPage] = useState(false);
  const [mobile, setMobilePage] = useState(false);

  // User Login info
  const database = [
    {
      username: "janet",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="title">Sign In</div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  /*function threatData() {
  }

  function threatData(name, description, date, detection) {
    this.name = objects_name;
    this.description = objects_description;
    this.date = objecs_created;
    this.detection = objects_x_mitre_detection;
  }*/

  // Check boxes for each threat type
  const [attackPattern, setAttackPattern] = React.useState(false);
  const [campaign, setCampaign] = React.useState(false);
  const [courseOfAction, setCourseOfAction] = React.useState(false);
  const [identity, setIdentity] = React.useState(false);
  const [intrusionSet, setIntrusionSet] = React.useState(false);
  const [malware, setMalware] = React.useState(false);
  const [markingDefinition, setMarkingDefinition] = React.useState(false);
  const [relationship, setRelationship] = React.useState(false);
  const [tool, setTool] = React.useState(false);
  const [xMitreDataComponent, setXMitreDataComponent] = React.useState(false);
  const [xMitreDataSource, setXMitreDataSource] = React.useState(false);
  const [xMitreMatrix, setXMitreMatrix] = React.useState(false);
  const [xMitreTactic, setXMitreTactic] = React.useState(false);

  const attackPatternCheck = () => {
    setAttackPattern(!attackPattern);
  };

  const campaignCheck = () => {
    setCampaign(!campaign);
  };

  const courseOfActionCheck = () => {
    setCourseOfAction(!courseOfAction);
  };

  const identityCheck = () => {
    setIdentity(!identity);
  };

  const intrusionSetCheck = () => {
    setIntrusionSet(!intrusionSet);
  };

  const malwareCheck = () => {
    setMalware(!malware);
  };

  const markingDefinitionCheck = () => {
    setMarkingDefinition(!markingDefinition);
  };

  const relationshipCheck = () => {
    setRelationship(!relationship);
  };

  const toolCheck = () => {
    setTool(!tool);
  };

  const xMitreDataComponentCheck = () => {
    setXMitreDataComponent(!xMitreDataComponent);
  };

  const xMitreDataSourceCheck = () => {
    setXMitreDataSource(!xMitreDataSource);
  };

  const xMitreMatrixCheck = () => {
    setXMitreMatrix(!xMitreMatrix);
  };

  const xMitreTacticCheck = () => {
    setXMitreTactic(!xMitreTactic);
  };

  
  function createData(
    //object_id: string,
    objects_name: string,
    objects_description: string,
    objects_created: string,
    objects_x_mitre_detection: string
    //attack_pattern: number,
    //campaign: number,
    //course_of_action: number,
    //identity: number,
  ) {
    return { objects_name, objects_description, objects_created, objects_x_mitre_detection};//, attack_pattern, campaign, course_of_action, identity };
  }

  /*const rows = [
    createData('attack-pattern--00d0b012-8a03-410e-95de-5826bf542de6'),
    createData('attack-pattern--00f90846-cbd1-4fc5-9233-df5c2bf2a662'),
    createData('attack-pattern--0a3ead4e-6d47-4ccb-854c-a6a4f9d96b22'),
    createData('attack-pattern--0a241b6c-7bb2-48f9-98f7-128145b4d27f'),
    createData('attack-pattern--0a5231ec-41af-4a35-83d0-6bdf11f28c65'),
  ];

  const extraRows = [
    createData('more info on attack-pattern--00d0b012-8a03-410e-95de-5826bf542de6', 159, 6.0, 24, 4.0),
    createData('more info on attack-pattern--00f90846-cbd1-4fc5-9233-df5c2bf2a662', 237, 9.0, 37, 4.3),
    createData('more info on attack-pattern--0a3ead4e-6d47-4ccb-854c-a6a4f9d96b22', 262, 16.0, 24, 6.0),
    createData('more info on attack-pattern--0a241b6c-7bb2-48f9-98f7-128145b4d27f', 305, 3.7, 67, 4.3),
    createData('more info on attack-pattern--0a5231ec-41af-4a35-83d0-6bdf11f28c65', 356, 16.0, 49, 3.9),
  ];*/

  function enterpriseButton()  {
    setEnteprisePage(!enteprise);
    /*return (
      "location.href='https://google.com';"
    );*/
  };

  function mobileButton() {
    setMobilePage(!mobile);
  };

  function icsButton() {
    setICSPage(!ics);
  };

    const BasicTable = (
      <div>
      <label>Threats: </label>
      <button onClick={enterpriseButton}>Enterprise</button>{' '}
      <button onClick={mobileButton}>Mobile</button>{' '}
      <button onClick={icsButton}>ICS</button>{' '}

      <p></p>
      <label>Filters: </label>
      <label> <input type="checkbox" checked={attackPattern} onChange={attackPatternCheck}/>attack-pattern</label>
      <label> <input type="checkbox" checked={campaign} onChange={campaignCheck}/>campaign</label>
      <label> <input type="checkbox" checked={courseOfAction} onChange={courseOfActionCheck}/>course-of-action</label>
      <label> <input type="checkbox" checked={identity} onChange={identityCheck}/>identity</label>
      <label> <input type="checkbox" checked={intrusionSet} onChange={intrusionSetCheck}/>intrusion-set</label>
      <label> <input type="checkbox" checked={malware} onChange={malwareCheck}/>malware</label>
      <label> <input type="checkbox" checked={markingDefinition} onChange={markingDefinitionCheck}/>marking-definition</label>
      <label> <input type="checkbox" checked={relationship} onChange={relationshipCheck}/>relationship</label>
      <label> <input type="checkbox" checked={tool} onChange={toolCheck}/>tool</label>
      <label> <input type="checkbox" checked={xMitreDataComponent} onChange={xMitreDataComponentCheck}/>x-mitre-data-component</label>
      <label> <input type="checkbox" checked={xMitreDataSource} onChange={xMitreDataSourceCheck}/>x-mitre-data-source</label>
      <label> <input type="checkbox" checked={xMitreMatrix} onChange={xMitreMatrixCheck}/>x-mitre-matrix</label>
      <label> <input type="checkbox" checked={xMitreTactic} onChange={xMitreTacticCheck}/>x-mitre-tactic</label>
      </div>
    );

  function enteprisePage() {
    const rows = [
      createData('attack-pattern--00d0b012-8a03-410e-95de-5826bf542de6'),
      createData('attack-pattern--00f90846-cbd1-4fc5-9233-df5c2bf2a662'),
      createData('attack-pattern--0a3ead4e-6d47-4ccb-854c-a6a4f9d96b22'),
      createData('attack-pattern--0a241b6c-7bb2-48f9-98f7-128145b4d27f'),
      createData('attack-pattern--0a5231ec-41af-4a35-83d0-6bdf11f28c65'),
    ];
    return (
      <div>
        <label>Showing Threat: Enteprise </label>
        <Routes>
        <Route exact path="/" element={<EnterpriseRecords />} />
        </Routes>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>X-MITRE Detection</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.object_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.object_id}
                </TableCell>
                <TableCell align="right">{ <button >Show More</button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
    }

  function mobilePage() {
      const rows = [
        createData('attack-pattern--0bcc4ec1-a897-49a9-a9ff-c00df1d1209d'),
        createData('attack-pattern--0c71033e-401e-4b97-9309-7a7c95e43a5d'),
        createData('attack-pattern--0cdd66ad-26ac-4338-a764-4972a1e17ee3'),
        createData('attack-pattern--0d4e3bbb-7af5-4c88-a215-0c0906bc1e8d'),
        createData('attack-pattern--0d95940f-9583-4e0f-824c-a42c1be47fad'),
      ];
        return (
          <div>
            <label>Showing Threat: Mobile </label>
            <Routes>
            <Route exact path="/" element={<MobileRecords />} />
            </Routes>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>X-MITRE Detection</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.object_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.object_id}
                </TableCell>
                <TableCell align="right">{ <button >Show More</button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
          </div>
        );
        }

    function icsPage() {
          const rows = [
            createData('attack-pattern--0fe075d5-beac-4d02-b93e-0f874997db72'),
            createData('attack-pattern--1af9e3fd-2bcc-414d-adbd-fe3b95c02ca1'),
            createData('attack-pattern--1b22b676-9347-4c55-9a35-ef0dc653db5b'),
            createData('attack-pattern--1c478716-71d9-46a4-9a53-fa5d576adb60'),
            createData('attack-pattern--2aa406ed-81c3-4c1d-ba83-cfbee5a2847a'),
          ];
            return (
              <div>
                <label>Showing Threat: ICS </label>
                <Routes>
                <Route exact path="/" element={<ICSRecords />} />
                </Routes>
                <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Date Created</TableCell>
                    <TableCell>X-MITRE Detection</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.object_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.object_id}
                      </TableCell>
                      <TableCell align="right">{ <button >Show More</button>}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              </div>
            );
            }  

    function NothingPage() {
      return (
        <div>
        </div>
      );
      }

    function MoreInfoPage() {
      return (
      <div>
        <label>getMoreInfo()</label>
      </div>
      );
    }

  return (
  <div> <img src={companyLogo} class="center" alt="Overall Logo"/>
    <div className="app">
      <div className="login-form">
        {isSubmitted ?  BasicTable : renderForm}
      </div>
      {enteprise ? enteprisePage() : NothingPage()}
      {mobile ? mobilePage() : NothingPage()}
      {ics ? icsPage() : NothingPage()}
    </div>
  </div> 
  );
}

export default App;