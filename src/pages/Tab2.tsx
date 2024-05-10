import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { PieChart } from 'react-native-chart-kit';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dietary Requirements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText  style={{ textAlign: 'center' }}>
              Supplements Consumed Today
            </IonText>
            
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
