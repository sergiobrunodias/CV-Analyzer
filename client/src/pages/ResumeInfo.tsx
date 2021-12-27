import React, { useEffect, useState } from 'react';
import '../App.css';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import BuildIcon from '@material-ui/icons/Build';
import BadgeIcon from '@material-ui/icons/Dns'
import SchoolIcon from '@material-ui/icons/School';
import TagsComponent from "react-tags-component";
import background from '../images/app-wallpaper.png';

import {
  Button,
  Container,
  Col,
  Row
} from 'react-bootstrap'

function ResumeInfo() {

  useEffect(() => {
    
  })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [designations, setDesignations] = useState([""])
  const [universities, setUniversities] = useState([""])
  const [skills, setSkills] = useState([""])
  const [jobNoticeText, setJobNoticeText] = useState("")


  return (
    <div style={styles.page}>
      <h1 style={styles.title}>{name}</h1>
      <div style={styles.contacts}>
        <p style={styles.email}>
          <Email style={styles.icon} /> {email}
        </p>
        <p>
          <PhoneIphone style={styles.icon} />{phoneNumber}
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
              designations.map(el => (
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
              universities.map(el => (
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
              skills.map(el => (
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
        <p style={{ ...styles.subtitle, marginTop: 35 }}>Job Notice</p>
        <textarea
          value={jobNoticeText} 
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setJobNoticeText(e.currentTarget.value)}
          style={styles.textBox}
        />
        <Button
          variant="secondary"
          size="lg"
          className="w-100 active"
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
    backgroundImage: `url(${background})`,
    display: 'flex', 
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingTop: 40,
    paddingBottom: 60
  },
  icon: {
    marginRight: 8,
    fontSize: 40
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45
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
