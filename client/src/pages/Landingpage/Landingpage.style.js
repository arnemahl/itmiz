import styled from 'styled-components';
import * as Router from 'react-router-dom';
import { pulsate } from './Pulsate.style.js';

export const Page = styled.div``;

export const Message = styled.div``;

export const LoadingMessage = styled(Message)`
  color: #767676;
  ${pulsate}
`;
export const ErrorMessage = styled(Message)`
  color: red;
`;

export const Link = styled(Router.Link)``;
