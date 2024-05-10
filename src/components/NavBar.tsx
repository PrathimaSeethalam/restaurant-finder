import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom'; // for navigation links
import './NavBar.css'; 

function NavBar() {
  return (
   
      <IonToolbar style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }} className="custom-navbar">
    {/* <img src="path/to/your/logo.png" alt="App Logo" className="logo" /> Add logo image */}
        <IonTitle>My Restaurant App</IonTitle>
        <IonButtons slot="end"> {/* Buttons on right side */}
          <IonButton>
            <Link to="/">
              Home
            </Link>
          </IonButton>
          <IonButton>
            <Link to="/about">
              About
            </Link>
          </IonButton>
          <IonButton>
            Login <IonIcon name="log-in-outline" slot="end"></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
   
  );
}

export default NavBar;