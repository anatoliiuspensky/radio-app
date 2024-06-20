import styles from './radio-app.module.css';
import StationListFilters from './station-list-filters/station-list-filters';
import { StationList } from './station-list/station-list';
import StationPlayer from './station-player/station-player';

export function RadioApp() {
  return (
    <div className={styles['container']}>
      <section>
        <StationListFilters />
        <StationList />
      </section>
      <section>
        <StationPlayer />
      </section>
    </div>
  );
}
