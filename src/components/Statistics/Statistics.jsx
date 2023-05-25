
import PropTypes from 'prop-types';

import {Stat, List, Percent} from './Statistics.styles'


export const Statistics = ({ title, stats }) => {

    return (

        <Stat>
        <h2 className="title">{title}</h2>
      
        <ul>
          {stats.map(({id, label, percentage }) =>( <List key={id}>
            <span className="label">{label}</span>
            <Percent>{percentage}%</Percent>
          </List>))}
          
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
  