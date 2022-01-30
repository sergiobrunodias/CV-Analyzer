import logo from '../images/resume.svg';
import '../App.css';
import FileDropZone from '../components/FileDropZone';
import API from '../api/API';
import { useNavigate } from 'react-router-dom';
import background from '../images/app-wallpaper-home.png';

function ResumeUpload() {
    const navigate = useNavigate();

    const sendFileToServer = async (data: FormData) => {
        new API().uploadFile(data).then((response) => {
            navigate("/info", { state: response.data });
        })
    }

    return (
        <div className="App" >
            <header className="App-header" style={styles.page}>
                <p style={styles.title} className="shadow p-3 rounded w-100">
                    Upload your CV and a job offer <br />
                    To check if you are suited for the job! 
                </p>
                <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
                <FileDropZone onDataExtract={sendFileToServer} />
            </header>
        </div>
    );
}

const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Tahoma'
    },
    logo: {
        height: 220, 
        width: 220,
        marginTop: '3.2em',
        marginBottom: '3.2em' 
    },
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
        backgroundAttachment: 'fixed'
      },
}

export default ResumeUpload;
