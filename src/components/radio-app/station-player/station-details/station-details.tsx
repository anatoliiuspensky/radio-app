import { IRadioStation } from '../../../../../src/interfaces';
import styles from './station-details.module.css';

export interface StationDetailsProps {
  station: IRadioStation;
};

interface IStationDetailsInfo {
  name: string;
  description: string;
}


export function StationDetails({ station } : StationDetailsProps) {
  const { id, name, tags, description, streamUrl, imgUrl, reliability, popularity} = station;
  const stationInfo: IStationDetailsInfo[] = [
    {
      name: 'Station name',
      description: name,
    },
    {
      name: 'Description',
      description,
    },
    {
      name: 'Popularity',
      description: popularity?.toString() || 'Not rated yet',
    },
    {
      name: 'Station reliability',
      description: reliability.toString(),
    },
    {
      name: 'Tags',
      description: tags.map(t => `#${t}`).join(', '),
    },
  ]

  return (
    <section>
      <dl className={styles['container']}>
        {stationInfo.map(({ name, description}) => (
          <div key={`${name}-${id}`}>
            <dd>{name}</dd>
            <dt>{description}</dt>
          </div>
        ))
      }
      </dl>
      <img src={imgUrl} alt={`${name} image`}></img>
    </section>
  );
}
