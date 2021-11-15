import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import API from '../api/API';

export default function FileDropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result?.toString();

        if (typeof binaryStr === 'string') {
          console.log("Sending request to Flask...");
          new API().uploadFile(binaryStr);
        }

      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
    </div>
  )
}