import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadIcon from '../images/uploadIcon.png';
import { CSpinner } from '@coreui/react';

type fileDropZoneProps = {
  onDataExtract: Function
}

export default function FileDropZone({ onDataExtract }: fileDropZoneProps) {
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('File reading was aborted!')
      reader.onerror = () => console.log('File reading has failed!')
      reader.onload = async () => {
        setLoading(true);
        const data = new FormData();
        data.append('file', file);
        data.append('filename', file.name);

        await onDataExtract(data)
      }
      reader.readAsArrayBuffer(file)
    })

  }, [onDataExtract])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} style={styles.fileUpload}>
      <input {...getInputProps()} />
      <img src={uploadIcon} alt="uploadIcon" style={styles.img} />
      <p style={styles.text}>Drag & drop some files here, or click to select files</p>
      {loading && (
        <CSpinner color='primary' />
      )}
    </div>
  )
}

const styles = {
  text: {
    color: 'black',
    marginTop: '0.2em',
    fontStyle: 'italic'
  },
  fileUpload: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
    border: 1,
    borderStyle: 'solid',
    borderWidth: 8,
    borderColor: '#4682B4'
  },
  img: {
    marginBottom: 0
  }
}