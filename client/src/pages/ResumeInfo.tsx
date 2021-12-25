import React, { useEffect, useState, } from 'react';
import '../App.css';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';

import {
  Container,
  Col,
  Row
} from 'react-bootstrap'

function Tag() {
  return (
    <div>
      <p style={{
        backgroundColor: 'grey',
        borderRadius: '8px',
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 20
      }}>
        University of Porto
      </p>
    </div>
  )
}

function ResumeInfo() {

  const [text, setText] = useState("");
  const [uploadVisible, setUploadVisible] = useState(true)

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>John Smith</h1>
      <div style={styles.contacts}>
        <p style={styles.email}>
          <Email fontSize="large" style={styles.icon} />johnsmith@gmail.com
        </p>
        <p>
          <PhoneIphone fontSize="large" style={styles.icon} />+351 910450865
        </p>
      </div>
      <div style={styles.universities}>
        <h2 style={styles.subtitle}>Universities: </h2>
        <Tag />
      </div>
      <Container>
        <Row>
          <Col sm={4}>Universities</Col>
          <Col sm={8}><Tag /><Tag /></Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  icon: {
    paddingRight: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 30
  },
  email: {
    paddingRight: 500
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    fontSize: 27
  },
  universities: {
    display: 'flex',
    flexDirection: 'row' as 'row'
  }
}

export default ResumeInfo;
