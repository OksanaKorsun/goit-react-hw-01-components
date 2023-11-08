import styled from 'styled-components';
export const Table = styled.table`
  width: 720px;
  margin: auto;
  border: 1px solid #ecf2f9;
  border-collapse: collapse;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Head = styled.thead`
  background-color: #70bff9;
`;

export const ThSquare = styled.th`
  padding: 10px;
  border: 1px solid whitesmoke;
  text-align: center;
  font-size: 18px;
`;
export const TdSquare = styled.td`
  padding: 8px;
  border: 1px solid #ecf2f9;
  text-align: center;
  font-size: 16px;
`;

export const TrSquare = styled.tr`
  background-color: ${props =>
    props.index % 2 === 0 ? '#BFE2FB' : '#E8F0F6'};
`;
