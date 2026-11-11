import { Camera, CameraResultType } from '@capacitor/camera';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg
} from '@ionic/react';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [imagen, setImagen] = useState<string>();

  const tomarFoto = async () => {
    const foto = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.Uri,
    });
    setImagen(foto.webPath);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={tomarFoto}>Tomar foto</IonButton>
        {imagen && <IonImg src={imagen} />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;