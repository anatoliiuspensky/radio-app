import styles from './radio-app.module.css';
import { StationList } from './station-list/station-list';
import StationPlayer from './station-player/station-player';

export function RadioApp() {
  return (
    <div className={styles['container']}>
      <section>
        <StationList />
      </section>
      <section>
        <StationPlayer />
      </section>
    </div>
  );
}
