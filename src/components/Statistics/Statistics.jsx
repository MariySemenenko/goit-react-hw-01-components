
import PropTypes from 'prop-types';

import {Stat} from './Statistics.styles'


export const Statistics = ({ title, stats }) => {

    return (

        <Stat>
        <h2 className="title">{title}</h2>
      
        <ul>
          {stats.map(({id, label, percentage }) =>( <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>))}
          
        </ul>
      </Stat>

    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape ({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })),
    
  };
  