import * as React from 'react';
import './App.css';

import CannaledgerForAncillaryCompanies from './components/cannaledger-for-ancillary-companies';
import CannaledgerForLicensedEstablishements from './components/cannaledger-for-licensed-establishments';
import ParticipatingAncillaryCompanies from './components/participating-ancillary-companies';
import ParticipatingLicensedEntities from './components/participating-licensed-entities';

const logo = require('./logo.svg');

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cannaledger</h1>
        </header>
        <h2 className="App-title">
          transparent self-governance for the worldwide cannabis industry
        </h2>
        <p>For Companies</p>
        <p>For Cannabis Patients & Consumers</p>
        <p className="App-intro">
          The cannaledger is an open, distributed blockchain for recording
          actions undertaken by workers in the cannabis industry.
        </p>
        <h1>So what does any of this mean?</h1>
        <p>
          Typically, digital data is hosted on a company's server, this means
          that all the data owned by a company exclusively belongs to them. The
          blockchain is different in that instead of data being hosted in one
          spot, it is hosted in as many places as possible, with the blockchain
          itself taking care of data duplication and redudancy.
        </p>
        <p>
          While all the data is recorded publically, each data point can be
          protected in terms of who gets to access it by proven cryptographic
          mathematics.
        </p>
        <p className="App-intro">
          It is built on top of Hyperledger Sawtooth, and uses state of the art
          consensus algorithms to ensure data integrity and speed as actions get
          recorded to the ledger.
        </p>
        <h1>Interfacing with Cannaledger</h1>
        <p className="App-intro">
          If you're technically inclined, we encourage you to develop your own
          interfaces to the blockchain itself. Otherwise the Cannaledger
          Incorporation offers workplace interfaces available for $10 per
          employee per month.
        </p>
        <CannaledgerForLicensedEstablishements />
        <CannaledgerForAncillaryCompanies />
        <ParticipatingLicensedEntities />
        <ParticipatingAncillaryCompanies />
      </div>
    );
  }
}

export default App;
