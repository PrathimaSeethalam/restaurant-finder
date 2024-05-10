import React from 'react';
import { IonHeader, IonToolbar,IonGrid,IonRow,IonCol, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/react';
import { Link } from 'react-router-dom'; // for navigation links
import './NavBar.css'; 

function Restaurant({name,description,img}) {
  return (
    <IonCard style={{maxWidth: "100%", backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>Ratings: ⭐⭐⭐⭐⭐ </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      <IonGrid>
        <IonRow>
          <img style={{width:"100%"}} src={img}/>
        </IonRow>
        <br></br>
        <IonRow>
        Dishes: Yukhoe, Galbi Jjim, Bibimbap
        </IonRow>
        <br></br>
        <IonRow>
          {description} 
        </IonRow>
      </IonGrid>
        </IonCardContent>
    </IonCard>
  );
}

export default Restaurant;