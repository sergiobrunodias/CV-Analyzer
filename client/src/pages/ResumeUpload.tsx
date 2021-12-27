import { useState, useEffect } from 'react';
import logo from '../images/resume.svg';
import '../App.css';
import FileDropZone from '../components/FileDropZone';
import API from '../api/API';
import { useNavigate } from 'react-router-dom';

function ResumeUpload() {

    const [text, setText] = useState("");

    const navigate = useNavigate();

    const sendFileToServer = async (data: any) => {
        new API().uploadFile(data).then((response) => {
            console.log(response)
            navigate("/info", { state: response.data });
        })
    }

    useEffect(() => {
        const data = {url: "ola", text: "Ola"};
        new API().uploadJobNotice(data);
    });

    return (
        <div className="App">
            <header className="App-header">
                <p style={styles.title}>
                    Upload your cv and a job offer <br />
                    To check if you are suited for the job!
                </p>
                <img src={logo} className="App-logo" alt="logo" style={{ height: 100, width: 100 }} />
                <p>
                    {text}
                </p>
                <FileDropZone onDataExtract={sendFileToServer} />
            </header>
        </div>
    );
}

const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: 30
    }
}

export default ResumeUpload;
