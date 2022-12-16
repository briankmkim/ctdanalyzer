import ReactDOM from "react-dom";
import * as React from 'react';
import { useState } from "react";
import "./styles.css";
//import "./connect.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import companyLogo from './overall_logo.png'

//var Delete3 = require("./delete3.js")
const uri = "mongodb+srv://torres:JhVfIiXumlgNhuWN@cluster0.o4mrikn.mongodb.net/?retryWrites=true&w=majority";
/*
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
*/

function App() {



  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  function entepriseButton()  {
    //Show Enteprise threats
  };

  function mobileButton() {
    //Show Mobile threats
  };

  function icsButton() {
    //Show ICS threats
  };

  // Check boxes for each threat type
  const [attackPattern, setAttackPattern] = React.useState(true);
  const [campaign, setCampaign] = React.useState(true);
  const [courseOfAction, setCourseOfAction] = React.useState(true);
  const [identity, setIdentity] = React.useState(true);
  const [intrusionSet, setIntrusionSet] = React.useState(true);
  const [malware, setMalware] = React.useState(true);
  const [markingDefinition, setMarkingDefinition] = React.useState(true);
  const [relationship, setRelationship] = React.useState(true);
  const [tool, setTool] = React.useState(true);
  const [xMitreDataComponent, setXMitreDataComponent] = React.useState(true);
  const [xMitreDataSource, setXMitreDataSource] = React.useState(true);
  const [xMitreMatrix, setXMitreMatrix] = React.useState(true);
  const [xMitreTactic, setXMitreTactic] = React.useState(true);

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



  /*

  async function whatever(client, resultsLimit) {
    const cursor = client
      .db('enterprise-attack')
      .collection('attack-pattern')
      .find()
      .limit(resultsLimit);
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} item(s):`);
      results.forEach((result, i) => {
        //date = new Date(result.last_review).toDateString();
  
        console.log();
        //console.log(`${i + 1}. name: ${result.name}`);
        console.log(`   _id: ${result._id}`);
        console.log(`   name: ${result.File
        }`);
        //console.log(`   bathrooms: ${result.bathrooms}`);
        /*
        console.log(
          `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
        );
        
      });
    }
  }
  */


 // const data = [];

  //data.push(whatever(client,3))

  //whatever(client, 3);



  
  function createData(
    object_id: string,
    attack_pattern: number,
    campaign: number,
    course_of_action: number,
    identity: number,
  ) {
    return { object_id, attack_pattern, campaign, course_of_action, identity };
  }
  
  //DATA GOES HERE

  /*
  function threatData(name, description, date, detection) {
    this.name = objects_name;
    this.description = objects_description;
    this.date = objecs_created;
    this.detection = objects_x_mitre_detection;
  }
*/
  const resul = new String(getName(5));
  //whatever(client, 20);
  const rows = [

    createData(resul[0], 159, 6.0, 24, 4.0),
    createData(resul[1], 237, 9.0, 37, 4.3),
    createData(resul[2], 262, 16.0, 24, 6.0),
    createData(resul[3], 305, 3.7, 67, 4.3),
    createData(resul[4], 356, 16.0, 49, 3.9),
  ];

  function BasicTable() {
    return (
      <div>
      <label>Threats: </label>
      <button onClick={entepriseButton}>Enteprise</button>{' '}
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Object ID</TableCell>
              <TableCell align="right">Attack-Pattern</TableCell>
              <TableCell align="right">Campaign&nbsp;</TableCell>
              <TableCell align="right">Course-Of-Action&nbsp;</TableCell>
              <TableCell align="right">Identity&nbsp;</TableCell>
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
                <TableCell align="right">{row.attack_pattern}</TableCell>
                <TableCell align="right">{row.campaign}</TableCell>
                <TableCell align="right">{row.course_of_action}</TableCell>
                <TableCell align="right">{row.identity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }
  
  return (
  <div> <img src={companyLogo} class="center" alt="Overall Logo"/>
    <div className="app">
      <div className="login-form">
        {isSubmitted ?  BasicTable() : renderForm}
      </div>
    </div>
  </div> 
  );
}

export async function getName(limit){
  const MongoClient = require('mongodb').MongoClient;
  const client = new MongoClient(uri, { useNewUrlParser: true });
const cursor = client
.db('enterprise_attack')
.collection('attack_pattern')
.find()
.limit(limit);

const names = new Array(limit);
const results = await cursor.toArray();
if (results.length > 0) {
  results.forEach((result, i) => {
      names.push(result.objects_name);
  });
}
return names;
}

export default App;