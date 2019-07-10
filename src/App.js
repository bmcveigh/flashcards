import React from 'react';

import { Container } from 'reactstrap';
import Letters from "./components/Letters/Letters";

function App() {
  return (
    <div className="App">
        <Container fluid={true}>
            <Letters />
        </Container>
    </div>
  );
}

export default App;
