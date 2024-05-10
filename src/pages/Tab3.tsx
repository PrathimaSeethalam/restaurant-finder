import { IonContent, IonHeader, IonPage, IonTitle,IonToast, IonToolbar, IonSelect,IonSelectOption , IonCard, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const toastMessage = 'Action completed!';
  const handleDoneClick = () => {
    setShowToast(true);
  };
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goal Set</IonTitle>
        </IonToolbar>
        <IonToast
       
        trigger="open-toast"
        duration={1000}
        message="Goals set!!!, go to restaurant finder"
        className="custom-toast"
        buttons={[
          {
            text: 'Dismiss',
            role: 'cancel',
          },
        ]}
      ></IonToast>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Calories supplement" labelPlacement="floating" fill="outline" style={{ backgroundColor: 'var(--ion-color-primary-shade)'}}>
        <IonSelectOption value="apple">1000</IonSelectOption>
        <IonSelectOption value="banana">1500</IonSelectOption>
        <IonSelectOption value="orange">2000</IonSelectOption>
        <IonSelectOption value="orange">2500</IonSelectOption>
      </IonSelect>
      </IonCard>
      <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Protien supplement" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">30 grams</IonSelectOption>
        <IonSelectOption value="banana">40 grams</IonSelectOption>
        <IonSelectOption value="orange">50 grams</IonSelectOption>
        <IonSelectOption value="orange">60 grams</IonSelectOption><IonSelectOption value="orange">70 grams</IonSelectOption>
        <IonSelectOption value="orange">80 grams</IonSelectOption>
      </IonSelect>
      </IonCard>
      <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Fat supplement" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">250 mg</IonSelectOption>
        <IonSelectOption value="banana">300 mg</IonSelectOption>
        <IonSelectOption value="orange">400 mg</IonSelectOption>
        <IonSelectOption value="orange">500 mg</IonSelectOption>
        <IonSelectOption value="orange">600 mg</IonSelectOption>
        <IonSelectOption value="orange">700 mg</IonSelectOption>
      </IonSelect>
      </IonCard>
      <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Fiber supplement" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">25 grams</IonSelectOption>
        <IonSelectOption value="banana">35 grams</IonSelectOption>
        <IonSelectOption value="orange">45 grams</IonSelectOption>
        <IonSelectOption value="orange">55 grams</IonSelectOption>
        <IonSelectOption value="orange">65 grams</IonSelectOption>
      </IonSelect>
      </IonCard>
      <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Collagen supplement" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">3 grams</IonSelectOption>
        <IonSelectOption value="banana">5 grams</IonSelectOption>
        <IonSelectOption value="orange">7 grams</IonSelectOption>
        <IonSelectOption value="orange">9 grams</IonSelectOption>
      </IonSelect>
      </IonCard>
      <IonCard style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
      <IonSelect label="Omega-3 Fatty Acids supplement" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">1 gram</IonSelectOption>
        <IonSelectOption value="banana">5 grams</IonSelectOption>
        <IonSelectOption value="orange">10 grams</IonSelectOption>
      </IonSelect>
      </IonCard>
      <div className="button-container">
      <IonButton  id="open-toast">Done</IonButton>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
