import styles from './radio-app.module.css';
import { StationListFilters } from './station-list-filters/station-list-filters';
import { StationList } from './station-list/station-list';
import { StationPlayer } from './station-player/station-player';

export function RadioApp() {
  return (
    <div className={styles.container}>
      <nav className={styles['station-filters-nav']}>
        <StationListFilters />
      </nav>
      <main className={styles.main}>
        <section>
          <StationList />
        </section>
        <section className={styles.radioWrapper}>
          <StationPlayer />
        </section>
      </main>
    </div>
  );
}
