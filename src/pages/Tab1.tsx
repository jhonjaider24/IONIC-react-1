import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonCheckbox, IonInput, IonButton, IonIcon
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';
import { useState } from 'react';

interface Tarea { texto: string; hecha: boolean }

const Tab1: React.FC = () => {
  const [nueva, setNueva] = useState('');
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregar = () => {
    if (nueva.trim()) {
      setTareas([...tareas, { texto: nueva, hecha: false }]);
      setNueva('');
    }
  };

  const alternar = (i: number) =>
    setTareas(tareas.map((t, idx) => idx === i ? { ...t, hecha: !t.hecha } : t));

  const borrar = (i: number) =>
    setTareas(tareas.filter((_, idx) => idx !== i));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Notas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            value={nueva}
            placeholder="Nueva nota"
            onIonInput={(e) => setNueva(e.detail.value ?? '')}
            onKeyUp={(e) => e.key === 'Enter' && agregar()}
          />
          <IonButton onClick={agregar}>
            <IonIcon icon={add} />
          </IonButton>
        </IonItem>

        <IonList>
          {tareas.map((t, i) => (
            <IonItem key={i}>
              <IonCheckbox checked={t.hecha} onIonChange={() => alternar(i)}>
                {t.texto}
              </IonCheckbox>
              <IonButton fill="clear" color="danger" slot="end" onClick={() => borrar(i)}>
                <IonIcon icon={trash} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;