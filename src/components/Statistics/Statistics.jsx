
import PropTypes from 'prop-types';

import {Stat, List, Percent, Ul, Div} from './Statistics.styled'


export const Statistics = ({ title, stats }) => {

    return (
        <Div>
        <Stat>
        {title && (<h2 className="title" >{title}</h2>)}
      
        <Ul>
          {stats.map(({id, label, percentage }) =>( 
          <List key={id}>
            <span className="label">{label}</span>
            <Percent>{percentage}%</Percent>
          </List>
          ))}
          
        </Ul>
      </Stat>
      </Div>
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
  