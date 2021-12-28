import React, { useEffect, useState } from 'react';
import '../App.css';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import BuildIcon from '@material-ui/icons/Build';
import BadgeIcon from '@material-ui/icons/Dns'
import SchoolIcon from '@material-ui/icons/School';
import TagsComponent from "react-tags-component";
import background from '../images/app-wallpaper.png';
import { useLocation } from 'react-router-dom';
import API from '../api/API';

import {
  Button,
  Container,
  Col,
  Row
} from 'react-bootstrap'

type ResumeInfo = {
  name: string,
  email: string,
  phone_number: string,
  designations: Array<string>,
  universities: Array<string>,
  skills: Array<string>
}

function ResumeInfo() {

  const location = useLocation();

  useEffect(() => { 

    const state = location.state;

    const name = (state as ResumeInfo)?.name;
    const email = (state as ResumeInfo)?.email;
    const phone_number = (state as ResumeInfo)?.phone_number;
    const designations = (state as ResumeInfo)?.designations;
    const universities = (state as ResumeInfo)?.universities;
    const skills = (state as ResumeInfo)?.skills;

    setName(name);
    setEmail(email);
    setPhoneNumber(phone_number);
    setDesignations(designations);
    setUniversities(universities);
    setSkills(skills);
  })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [designations, setDesignations] = useState([""])
  const [universities, setUniversities] = useState([""])
  const [skills, setSkills] = useState([""])
  const [jobNoticeText, setJobNoticeText] = useState("")
  const [jobNoticeLink, setJobNoticeLink] = useState("")

  function sendLink() {
     console.log(jobNoticeLink);
     const data = {
       link: jobNoticeLink,
       designations: designations,
       skills: skills
     }
     new API().uploadJobNotice(data).then((res) => {
      console.log(res)
     });
  }

  function sendText() {
    console.log("TBI");
 }

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
                  hideIcon={true}
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
                  hideIcon={true}
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
                  hideIcon={true}
                />
              ))
            }
          </Col>
        </Row>
        <p style={{ ...styles.subtitle, marginTop: 35 }}>Job Notice Text</p>
        <textarea
          value={jobNoticeText} 
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setJobNoticeText(e.currentTarget.value)}
          style={styles.textBox}
        />
        <Button
          variant="secondary"
          size="lg"
          className="w-100 active"
          onClick={sendText}
        >
          Compare
        </Button>
        <p style={{ ...styles.subtitle, marginTop: 35 }}>Job Notice Link</p>
        <input
          value={jobNoticeLink} 
          onChange={(e: React.FormEvent<HTMLInputElement>) => setJobNoticeLink(e.currentTarget.value)}
          style={styles.textInput}
        />
        <Button
          variant="secondary"
          size="lg"
          className="w-100 active"
          onClick={sendLink}
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
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat repeat',
    display: 'flex', 
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundAttachment: 'fixed',
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
  textInput: {
    width: '100%',
    height: 40
  },
}

export default ResumeInfo;
