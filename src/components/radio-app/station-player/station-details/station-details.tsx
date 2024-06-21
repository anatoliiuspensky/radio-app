import { getStationPopularityDescription } from '../../../../helpers';
import { IRadioStation } from '../../../../interfaces';
import styles from './station-details.module.css';

export interface StationDetailsProps {
  station: IRadioStation;
};

interface IStationDetailsInfo {
  name: string;
  description: string;
}


export function StationDetails({ station } : StationDetailsProps) {
  const { id, tags, description, reliability, popularity} = station;
  const stationInfo: IStationDetailsInfo[] = [
    {
      name: 'Description:',
      description,
    },
    {
      name: 'Popularity:',
      description: getStationPopularityDescription(popularity),
    },
    {
      name: 'Reliability:',
      description: reliability.toString(),
    },
    {
      name: 'Tags: ',
      description: tags.map(t => `#${t}`).join(', '),
    },
  ]

  return (
    <dl className={styles.container}>
      {stationInfo.map(({ name, description}) => (
        <div key={`${name}-${id}`} className={styles.stationInfo}>
          <dd className={styles.label}>{name}</dd>
          <dt>{description}</dt>
        </div>
      ))
    }
    </dl>
  );
}
