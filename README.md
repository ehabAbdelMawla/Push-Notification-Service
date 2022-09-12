
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ehabAbdelMawla/PushNotification-Service">
    <img src="https://user-images.githubusercontent.com/51888513/189646422-9d94ad96-a184-449c-bb83-8f42ac474904.gif" alt="Logo" width="350" >
  </a>


  <h2 align="center">Push Notification Service</h2>


  <p align="center">
Server Provide A Push Notification Ability To Send Custom Notification To Users 
   
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
        <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
All Application Needs To Notifiy There User With Different Actions.Now You Need To Get Token Of User Device From Firebase And Send It To Server With User Id, Then You Will Send A Title And Payload Of Your Notification With user Id To Send For.

## Built With

 <kbd><img src="https://user-images.githubusercontent.com/51888513/189647690-7afe119c-29e5-4a90-9bf3-1b4e98330057.png" width="20" style="border-radius:5px; margin:5px"/> </kbd> NodeJS <br/>
  <kbd><img src="https://user-images.githubusercontent.com/51888513/189647204-cfcfefbc-8463-463e-b8e1-49d4fb308a62.png" width="18" style="border-radius:5px; margin:5px"/> </kbd> Firebase <br/>

<!-- GETTING STARTED -->
## Getting Started
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/ehabAbdelMawla/PushNotification-Service.git
   ```
   
<!-- USAGE EXAMPLES -->
## Usage
1. Create Firebase Project <br/>
<a href="https://firebase.google.com/docs"> Firebase Docs </a>

2. Download Firebase Admin SDK Configuration File And Update `config.js`<br/>
    ```js
    "type": "Enter Your Value",
    "project_id": "Enter Your Value",
    "private_key_id": "Enter Your Value",
    "private_key": "Enter Your Value",
    "client_email": "Enter Your Value",
    "client_id": "Enter Your Value",
    "auth_uri": "Enter Your Value",
    "token_uri": "Enter Your Value",
    "auth_provider_x509_cert_url": "Enter Your Value",
    "client_x509_cert_url": "Enter Your Value"
     ```
     
3. Subscribe To The Server.
    ```js
    Method : POST,
    Url : "{Server_Url}/subscribe",
    Body : { 
              user : { token:"Client Token" }
           }
    ```

3. Send Notification Request.
    ```js
    Method : POST,
    Url : "{Server_Url}/pushNotification",
    Body : { 
              userId : "UserId",
              payload : {
                    notification:{
                            title: `Title Of Notification`,
                            body: `Main Text Of Notification`,
                            sound: 'default'
                                }
                        }       
           }
    ```

4. Un Subcribe From The Server
    ```js
    Method : DELETE,
    Url : "{Server_Url}/unsubscribe/:userId",
    ```



<!-- CONTACT -->
## Contact
<p align="center">
<a  href="mailto:eabdo1474@gmail.com">
 <img src="https://user-images.githubusercontent.com/51888513/188922645-da22d955-0b02-46d9-8145-564b54316d87.png" width="50"/> 
</a>
<a href="https://www.youtube.com/channel/UCnoe7bD7w2fWYlNzqY3qjLA">
<img src="https://user-images.githubusercontent.com/51888513/188924271-4554ab67-60b6-46db-9d38-b5d284bfc324.png" width="50"/>
</a>
<a href="https://www.linkedin.com/in/ehab-abdel-mawla-9b20aa183">
<img src="https://user-images.githubusercontent.com/51888513/188924356-4578aa1f-26c0-4310-a16d-f4eb3c891b8d.png" width="50"/>
</a>
<a href="https://codepen.io/ehabAbdelMola"><img src="https://user-images.githubusercontent.com/51888513/188924374-5169b372-1eda-4639-95b7-ceacbe31b861.png"   width="50"/> </a>
<a href="https://www.instagram.com/abdoehab4551/"><img src="https://user-images.githubusercontent.com/51888513/188924858-1b4bd316-4259-4f22-be15-0872c31ebc12.png"   width="50"/> </a>

</p>
