import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import API from '../api/API';
import uploadIcon from '../images/uploadIcon.png';

export default function FileDropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append('filename', file.name);

        await new API().uploadFile(data);
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
      <div {...getRootProps()} style={styles.fileUpload}>
        <input {...getInputProps()} />
        <img src={uploadIcon} alt="uploadIcon" style={styles.img}/>
        <p style={styles.text}>Drag & drop some files here, or click to select files</p>
      </div>
  )
}

const styles = {
  text: {
    color: 'black'
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