import styled from '@emotion/styled';


export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (
     props.isOnline ? 'green' : 'yellow'
  )};
`;

