import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/react';

const Tab3: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Acerca de Ionic</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>¿Qué es Ionic?</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Framework para crear apps móviles con tecnologías web
          (HTML, CSS y TypeScript) y un solo código base, aquí usando React.
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Tab3;