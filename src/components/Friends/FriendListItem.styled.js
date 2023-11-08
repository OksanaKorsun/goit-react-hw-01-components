import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Accent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
