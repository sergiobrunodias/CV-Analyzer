import React, { useEffect, useState, } from 'react';
import '../App.css';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import BuildIcon from '@material-ui/icons/Build';
import BadgeIcon from '@material-ui/icons/Dns'
import SchoolIcon from '@material-ui/icons/School';
import TagsComponent from "react-tags-component";

import {
  Button,
  Container,
  Col,
  Row
} from 'react-bootstrap'

function ResumeInfo() {

  const [text, setText] = useState("");
  const [uploadVisible, setUploadVisible] = useState(true)
  const [jobNoticeText, setJobNoticeText] = useState("")

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>John Smith</h1>
      <div style={styles.contacts}>
        <p style={styles.email}>
          <Email style={styles.icon} />johnsmith@gmail.com
        </p>
        <p>
          <PhoneIphone style={styles.icon} />+351 910450865
        </p>
      </div>

      <Container>
        <Row style={styles.tagSection}>
          <Col sm={4}>
            <p style={styles.subtitle}>
              <BadgeIcon style={styles.icon} /> Designations
            </p>
          </Col>
          <Col sm={8}>
            {
              ["Software Engineer", "Assistant Professor"].map(el => (
                <TagsComponent
                  textLabel={el}
                  colorTextLabel={"#000000"}
                  backgroundTags={"#FFFFFF"}
                  hideShadowTags={true}
                />
              ))
            }
          </Col>
        </Row>
        <Row style={styles.tagSection}>
          <Col sm={4}>
            <p style={styles.subtitle}>
              <SchoolIcon style={styles.icon} /> Universities
            </p>
          </Col>
          <Col sm={8}>
            {
              ["University of Porto", "University of Porto", "University of Porto", "University of Porto", "University of Porto", "University of Porto", "University of Porto", "University of Porto"].map(el => (
                <TagsComponent
                  textLabel={el}
                  colorTextLabel={"#000000"}
                  backgroundTags={"#FFFFFF"}
                  hideShadowTags={true}
                />
              ))
            }
          </Col>
        </Row>
        <Row style={styles.tagSection}>
          <Col sm={4}>
            <p style={styles.subtitle}>
              <BuildIcon style={styles.icon} /> Skills
            </p>
          </Col>
          <Col sm={8}>
            {
              ["Docker", "C++", "C", "Java", "JavaScript", "CSS", "HTML"].map(el => (
                <TagsComponent
                  textLabel={el}
                  colorTextLabel={"#000000"}
                  backgroundTags={"#FFFFFF"}
                  hideShadowTags={true}
                />
              ))
            }
          </Col>
        </Row>
        <p style={{ ...styles.subtitle, marginTop: 50 }}>Job Notice</p>
        <input
          type="text"
          value={jobNoticeText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setJobNoticeText(e.currentTarget.value)}
          style={styles.textBox}
        />
        <Button
          variant="secondary"
          size="lg"
          className="w-100"
          onChange={() => true}
        >
          Compare
        </Button>
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
    paddingTop: 60,
    paddingBottom: 200
  },
  icon: {
    marginRight: 8,
    fontSize: 40
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
    fontSize: 27,
    marginTop: 20
  },
  tagSection: {
    marginTop: 50
  },
  textBox: {
    width: '100%',
    height: 180
  },
}

export default ResumeInfo;
