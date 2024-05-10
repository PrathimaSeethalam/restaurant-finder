import { IonContent, IonHeader, IonPage, IonTitle,IonList,IonSegment, IonModal, IonTabButton,IonSegmentButton, IonToolbar, IonCard, IonCardContent, IonItem,IonLabel,IonButton,IonButtons, IonIcon, IonCol, IonGrid, IonRow, IonCardHeader,IonCardTitle, IonCardSubtitle } from '@ionic/react';
import Restaurant from '../components/Restaurant';
import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // for navigation links
import { logoIonic,cloudUpload, logInOutline, cardOutline, personAddOutline, heartCircleOutline } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';

import './Tab1.css';

const Tab1: React.FC = () => {
  const [image,setImage] = useState<any>("");
  const [buttonStatus,setButtonStatus] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [applicationLog,setApplicationLog] = useState<any>("application log");
  const takePicture = async () => {
    console.log('in take picture');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  setImage(image.webPath);
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    console.log(image);
  }
  function log(stuffToLog:any){
    console.log('\n' + stuffToLog + '\n');
    setApplicationLog('\n' + applicationLog + '\n' + stuffToLog +'\n');
  }
  function iconClicked(){
    log('\non icon clicked\n');
  }
  function onLoginClicked(){
    log('\non login clicked\n');
  }
  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
     log(' Current position: ' +  'latitude: ' + coordinates.coords.latitude + ' and ' + 'longitude: ' + coordinates.coords.longitude);
    console.log('Current position: ' +  'latitude: ' + coordinates.coords.latitude + ' and ' + 'longitude: ' + coordinates.coords.longitude);
    log('Current position is: latitude: 40.7287435 and longitude: -74.06467');
  };
  
  return (
    <IonPage>
      <IonHeader  style={{ backgroundColor: 'var( --ion-header-background-color )' }}>
        <IonToolbar style={{ backgroundColor: 'var( --ion-toolbar-background )' }}>
        <IonTitle onClick={() => {
  // Your click event handler code goes here
  log("Restaurant app title clicked!");
}}>Diety</IonTitle>
          {/* <span><IonIcon icon={heartCircleOutline} size="large"></IonIcon></span> */}

          <IonButtons slot="end"> 
          <IonButton onClick={() => {
  // Your click event handler code goes here
  log("Home link clicked!");
}}>
            <Link to="/tab1">
              Home
            </Link>
          </IonButton>
          <IonButton onClick={() => {
  // Your click event handler code goes here
  log("About link clicked!");
}}>
            <Link to="/tab3">
              Goals
            </Link>
          </IonButton>
          <IonTabButton onClick={() => {
  // Your click event handler code goes here
  log("login link clicked!");
}} tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={personAddOutline} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          {/* <IonButton onClick={() => {
  // Your click event handler code goes here
  log("login link clicked!");
}}>
            Login <IonIcon name="log-in-outline" slot="end"></IonIcon>
          </IonButton> */}
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <IonContent fullscreen style={{ backgroundColor:"var(--ion-content-background-color)"}}>
        
      <IonItem>
      <IonSegment value="default" className="custom-segment">
        <IonSegmentButton  style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
          <IonLabel>Find Your Favorite Food spots!!!</IonLabel>
        </IonSegmentButton>
        <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Collect Coupons!!
        </IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Coupons</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" style={{background: 'var(--background)'}}>
          <img src="https://t3.ftcdn.net/jpg/02/52/38/80/240_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"/>
       <IonCard>
       <IonList style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
          {/* {coupons.map((coupon) => ( */}
            <IonItem style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
              <IonLabel>
              <h2>15% OFF above $50</h2>
                <p>Coupon code : TYUN8908</p>
              </IonLabel>
              <IonButton disabled={false}>
                Collect
              </IonButton>
              <IonIcon icon={cardOutline} ios="add-circle" md="add-circle-outline" slot="end" />
            </IonItem>
            <IonItem style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
              <IonLabel>
                <h2>25% OFF</h2>
                <p>Coupon code : TYUN5677</p>
              </IonLabel>
              <IonButton disabled={false}>
                Collect
              </IonButton>
              <IonIcon icon={cardOutline} ios="add-circle" md="add-circle-outline" slot="end" />
            </IonItem>
            <IonItem>
              <IonLabel>
              <h2>25% OFF</h2>
                <p>Coupon code : TYUN89055</p>
              </IonLabel>
              <IonButton disabled={false}>
                Collect
              </IonButton>
              <IonIcon icon={cardOutline} ios="add-circle" md="add-circle-outline" slot="end" />
            </IonItem>
          {/* ))} */}
        </IonList>
       </IonCard>
       <IonCardTitle>
 Application log
 </IonCardTitle>
 <IonCard>
        <IonCardContent className='spacedOut'>
        
         <pre>
         {applicationLog}
         </pre>
         
        </IonCardContent>
       </IonCard>
          </IonContent>
        </IonModal>
        </IonSegment>
      </IonItem>

      <IonItem>
      <IonSegment value="default" className="custom-segment">
        <IonSegmentButton value="segment" onClick={() => { takePicture()}} style={{backgroundColor: 'var(--ion-color-primary-shade)'}}>
          <IonLabel className='centered-content' onClick={printCurrentPosition}>
          Upload Food Picture  &nbsp; &nbsp;
          
          {/* <IonIcon icon={logoIonic} size="large"></IonIcon> */}
          <IonIcon onClick={iconClicked} icon={cloudUpload} size="large"></IonIcon>
          </IonLabel>
        </IonSegmentButton>
        </IonSegment>
        
      </IonItem>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
     
      <IonGrid>
        <IonRow>
          <IonCol style={{maxWidth:"100%"}}>
          <Restaurant name={"Atomix(Korean) "} img={"https://media.wnyc.org/i/1860/1046/l/80/2023/04/41449899242_59948cd7f1_k.jpg"} description={" Daniel Boulud's eponymous restaurant is a New York institution, serving classic French cuisine with a modern twist. The restaurant features a beautiful dining room and a knowledgeable staff, making it a perfect spot for a special occasion.Known for its dishes innovative approach to fine dining, Eleven Madison Park offers a tasting menu."}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"COCOQPDAQ (Flatiron) "} img={"https://media-cdn.tripadvisor.com/media/photo-s/06/d6/07/63/olive-tree-cafe.jpg"} description={" Daniel Boulud's eponymous restaurant is a New York institution, serving classic French cuisine with a modern twist. The restaurant features a beautiful dining room and a knowledgeable staff, making it a perfect spot for a special occasion.Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu."}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"Le Bernardin(Midtown)"} img={"https://secure.s.forbestravelguide.com/img/properties/daniel/extra-large/daniel-dining.jpg"} description={" Daniel Boulud's eponymous restaurant is a New York institution, serving classic French cuisine with a modern twist. The restaurant features a beautiful dining room and a knowledgeable staff, making it a perfect spot for a special occasion.Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu."}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"Aquavit(Scandinavian)"} img={"https://www.pandotrip.com/wp-content/uploads/2016/02/Checkers-Photo-by-Hilton-Checkers.jpg"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"Jean-Georges(French-American)"} img={"https://i.ytimg.com/vi/P22DOtcER4w/maxresdefault.jpg"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"Gotham Bar and Grill(American)"} img={"https://media.timeout.com/images/106012852/750/422/image.jpg"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
        </IonRow>
        <IonRow>
          
          <IonCol>
          <Restaurant name={"The Modern(Midtown):"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJdB1JLrMXoJMncEiumC1WySaQIchFAbwwQC7oi57eQSo-h0slkML8VwYD4ZOEV3pBCM&usqp=CAU"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"Sushi Nozawa"} img={"https://media.timeout.com/images/106012852/750/422/image.jpg"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"The Modern(Midtown):"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJdB1JLrMXoJMncEiumC1WySaQIchFAbwwQC7oi57eQSo-h0slkML8VwYD4ZOEV3pBCM&usqp=CAU"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"The Modern(Downtown):"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJdB1JLrMXoJMncEiumC1WySaQIchFAbwwQC7oi57eQSo-h0slkML8VwYD4ZOEV3pBCM&usqp=CAU"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"The Modern(Midtown):"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJdB1JLrMXoJMncEiumC1WySaQIchFAbwwQC7oi57eQSo-h0slkML8VwYD4ZOEV3pBCM&usqp=CAU"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
          <IonCol>
          <Restaurant name={"The Modern Steak"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJdB1JLrMXoJMncEiumC1WySaQIchFAbwwQC7oi57eQSo-h0slkML8VwYD4ZOEV3pBCM&usqp=CAU"} description={"Known for its innovative approach to fine dining, Eleven Madison Park offers a tasting menu that is a journey through contemporary American cuisine.  Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations. Chef Daniel Humm's menu is ever-evolving, but always features seasonal ingredients and creative presentations"}/>
          </IonCol>
        </IonRow>
      </IonGrid>
     

       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
