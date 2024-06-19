import { RadioApp } from 'src/components';
import styles from './page.module.css';

export interface StationIdPageParams {
  stationId: string;
}

export default function Page({ params: { stationId } }: { params: StationIdPageParams}) {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <RadioApp />
        </div>
      </div>
    </div>
  );
}
