import React from 'react';

import { Row, Col } from 'reactstrap';

import './Letters.css';

const Letters = () => {
    const letterStr = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';

    return (
        <Row>
            <Col md={6} className="letters">
                <Row>
                    {
                        letterStr.split(/,/g).map(letter => (
                            <Col md={1} className="letter">
                                <span>{letter}</span>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    );
};

export default Letters;
