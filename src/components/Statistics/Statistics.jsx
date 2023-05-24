
import PropTypes from 'prop-types';

import {StatisticTitle, StatisticsList} from './Statistics.styles';

export const Statistics = ({ title, stats }) => {

    return (

        <section class="statistics">
        <h2 class="title">{title}</h2>
      
        <StatisticsList>
          <li class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
          </li>
          <li class="item">
            <span class="label">.mp3</span>
            <span class="percentage">14%</span>
          </li>
          <li class="item">
            <span class="label">.pdf</span>
            <span class="percentage">41%</span>
          </li>
          <li class="item">
            <span class="label">.mp4</span>
            <span class="percentage">12%</span>
          </li>
        </StatisticsList>
      </section>

    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.number),
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  };
  