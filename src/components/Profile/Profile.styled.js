import styled from 'styled-components';

export const Wraper = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  margin: 10px;
  max-width: 300px;
  margin: auto;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
`;

const getColor = props => {
  switch (props.$variant) {
    case 'bold':
      return props.theme.colors.black;
    default:
      return props.theme.colors.grey;
  }
};
const getFontWeight = props => {
  switch (props.$variant) {
    case 'bold':
      return '700';
    default:
      return '400';
  }
};
export const Text = styled.p`
  margin: 8px 0;
  font-size: 18px;
  color: ${getColor};
  font-weight: ${getFontWeight};
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
`;

export const Accent = styled.span`
  color: ${getColor};
  font-weight: ${getFontWeight};
`;
