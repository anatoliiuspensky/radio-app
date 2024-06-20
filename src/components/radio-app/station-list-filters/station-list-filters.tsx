import { FilterBy } from './filter-by/filter-by';
import FindFilter from './find-filter/find-filter';
import { SortByFilter } from './sort-by-filter/sort-by-filter';
import { SortOrderFilter } from './sort-order-filter/sort-order-filter';
import styles from './station-list-filters.module.css';

export function StationListFilters() {
  return (
    <div className={styles['container']}>
      <FilterBy />
      <FindFilter/>
      <SortByFilter/>
      <SortOrderFilter/>
    </div>
  );
}

export default StationListFilters;
