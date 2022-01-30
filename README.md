# CV-Analyzer

## Installation guide

This software is dockerized, meaning that you can run it by executing the command `docker-compose up` in the root folder. 
The client dependencies might need to be installed separately, for example using `docker-compose run client npm install`.

If you don't have Docker installed, you may download it and follow the instructions from the [official page](https://docs.docker.com/engine/install).

After all the containers are up, one should wait until the API is ready to accept connections (it will print a message on the console by that time) before trying to submit requests on the client-side. 

## User manual

![home-page](https://user-images.githubusercontent.com/47751859/151697550-632468f0-bf84-4179-9a62-8a3e52436cba.png)

This is the home page of the application, where it is possible to upload a resume to have it analyzed. At the bottom of the page, the user can find a large upload area. In order to upload a file, the user may either click inside it and select the file from the local file explorer or drag and drop the file inside the area. Regardless of the chosen alternative, a loading animation is displayed, indicating that the CV is being parsed and analyzed. Last, it is also worth noting that the supported file formats include PDF, DOC, DOCX, and TXT. 

### Resume details

![resume-info-1](https://user-images.githubusercontent.com/47751859/151697554-f74543da-c3d9-4182-a502-ad2ed6431e71.png)

After uploading the resume in the Upload page, the respective file is sent to the server, in which many processing steps take place before responding with all the information that it managed to successfully extract. 

Hereafter, the resume details, such as name, contacts, designations, education, skills, and languages, are displayed in the client interface. The user can then verify if all the important details of their resume were properly examined by AI. 

### Match with job notice

![resume-info](https://user-images.githubusercontent.com/47751859/151697556-0e4d6176-b71b-4016-9142-d29c51c5a4f3.png)

Besides looking through a resume file, the application is able to compare the extracted details against a real job notice. 

There are two forms available at the end of the page for this purpose. The user may either provide a URL to the job notice or simply type or paste the job notice content in a text area. We decided to make this alternative available since a few websites will not allow to fetch information outside a browser. 

Once the match request is sent, the server will parse the job notice and compare the most relevant information with the candidate's resume. The matched designations, skills, and languages will then be highlighted with a green color in the client interface.
