import styled from 'styled-components';
export const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 20px;
  width: 500px;
  margin: auto;
`;
export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
`;
export const List = styled.ul`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;
const getBackgroundColor = props => {
  switch (props.$variant) {
    case '.docx':
      return 'lightgreen';
    case '.pdf':
      return 'lightblue';
    case '.mp3':
      return 'lightcoral';
    default:
      return 'lightcyan';
  }
};

export const Item = styled.li`
  display: flex;
  width: 100px;
  padding: 10px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: ${getBackgroundColor};
`;
const getFontSize = props => {
  switch (props.$variant) {
    case 'bold':
      return '20px';
    default:
      return '16px';
  }
};
export const Label = styled.span`
  font-size: ${getFontSize};
  margin-top: 8px;
  margin-bottom: 8px;
`;
