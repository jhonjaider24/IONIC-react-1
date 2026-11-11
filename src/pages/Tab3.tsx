import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { cameraOutline, codeSlashOutline, layersOutline, phonePortraitOutline } from 'ionicons/icons';

import './Tab3.css';

const Tab3: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Acerca de Ionic</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding tab3-content">
      <section className="about-intro">
        <IonNote color="primary">DESARROLLO MULTIPLATAFORMA</IonNote>
        <h1>Una app, varias plataformas</h1>
        <p>
          Ionic permite crear interfaces para aplicaciones móviles y web con tecnologías web conocidas, reutilizando
          gran parte del mismo código.
        </p>
      </section>

      <IonCard className="about-card">
        <IonCardHeader>
          <IonCardSubtitle>La idea principal</IonCardSubtitle>
          <IonCardTitle>¿Qué es Ionic?</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            Ionic es un framework de interfaz de usuario con componentes listos para crear pantallas adaptables. En este
            proyecto usamos Ionic con React y TypeScript; la interfaz se construye con componentes como
            <code> IonPage</code>, <code> IonButton</code> e <code> IonCard</code>.
          </p>

          <div className="about-concepts">
            <div className="about-concept">
              <IonIcon aria-hidden="true" icon={layersOutline} />
              <div>
                <h3>Componentes de interfaz</h3>
                <p>
                  Botones, listas, pestañas y tarjetas mantienen una apariencia familiar en distintos tamaños de
                  pantalla.
                </p>
              </div>
            </div>
            <div className="about-concept">
              <IonIcon aria-hidden="true" icon={codeSlashOutline} />
              <div>
                <h3>Tecnologías web</h3>
                <p>
                  React organiza la interfaz en componentes y TypeScript ayuda a detectar errores mientras se
                  desarrolla.
                </p>
              </div>
            </div>
            <div className="about-concept">
              <IonIcon aria-hidden="true" icon={phonePortraitOutline} />
              <div>
                <h3>Capacitor</h3>
                <p>
                  Con Capacitor, la aplicación puede empaquetarse para móviles y conectarse con funciones nativas del
                  dispositivo.
                </p>
              </div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard className="about-card">
        <IonCardHeader>
          <IonCardSubtitle>En esta app</IonCardSubtitle>
          <IonCardTitle>¿que podemos hacer?</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div className="about-concept">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            <div>
              <h3>Notas y tareas</h3>
              <p>En la pestaña Notas puedes agregar elementos, marcarlos como completados y eliminarlos.</p>
            </div>
          </div>
          <div className="about-concept">
            <IonIcon aria-hidden="true" icon={cameraOutline} />
            <div>
              <h3>Acceso a la cámara</h3>
              <p>
                La pestaña Cámara usa el plugin de Capacitor para tomar una foto y mostrarla. El dispositivo puede
                solicitar permiso para usar la cámara.
              </p>
            </div>
          </div>
        </IonCardContent>
      </IonCard>

      <p className="about-footer">
        <IonNote>
          Esta demostración combina una interfaz web con herramientas que permiten llevarla a dispositivos móviles.
        </IonNote>
      </p>
    </IonContent>
  </IonPage>
);

export default Tab3;
