import { IonIcon } from '@ionic/react';
import { arrowRedoOutline, chatboxOutline, ellipsisVerticalOutline, heartOutline } from 'ionicons/icons';
import * as React from 'react';
import './CardCmp.css';
type CardCmpProps = {
    input: {
        username: string,
        created: Date;
        content: string,
        photoUrls: string[];
        tags: { [tag: string]: true };
    }
}
const CardCmp: React.FC<CardCmpProps> = ({ input }) => {

    return (<div className="card-wrapper">
        <div className="card-header">
            <div slot="start" style={{ display: 'flex', margin: '5px' }}>
                <img
                    src="https://www.silicon.co.uk/wp-content/uploads/2012/01/wayne-Rash.jpg"
                    style={{ borderRadius: '50%', backgroundColor: '#eaeaea', border: '1px solid #cecece', maxHeight: '32px', maxWidth: '32px', }}
                />
                <div className="ion-padding-start ion-padding-end">
                    {input.username}<br />
                </div>
            </div>
            <IonIcon icon={ellipsisVerticalOutline} className="card-ellipsis" />
            <div className="card-date"> {input.created.toLocaleString()}</div>
        </div>
        <div>
            <div className="ion-padding-start ion-padding-end ion-padding-top ion-margin-bottom post-card-content">
                {input.content}
            </div>
            <div className="tags-bar">{Object.keys(input.tags).map((tag, index) => <div key={index} className="chip">
                <strong>
                    #{tag}
                </strong>
            </div>)}</div>
            <div className="ion-padding" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                {input.photoUrls.map((url, i) => <div key={i} style={{ width: '33%' }}>
                    <div style={{ height: '84px', width: '84px' }}><img src={url} /></div>
                </div>)}
            </div>
        </div>
        <div style={{ display: 'flex', height: '100%', justifyContent: 'space-evenly', marginTop: '10px', paddingBottom: '10px' }}>
            <button
                className="interaction-button ripple"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={chatboxOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
        Comment
      </div>
            </button>

            <button
                className="interaction-button ripple"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={heartOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
        Favorite
      </div>
            </button>

            <button
                className="interaction-button ripple"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={arrowRedoOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
       Share
    </div>
            </button>

        </div>
    </div>)
}

export default CardCmp;