import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const StudentContainer = styled.div`
  margin-top: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewStudent = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background: linear-gradient(135deg, ${colors.primaryColor});
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 20px;
  box-shadow: 0 4px 14px ${colors.primaryColor};
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, ${colors.primaryDarkColor});
    box-shadow:
      0 6px 18px,
      ${colors.primaryDarkColor};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px ${colors.primaryDarkColor};
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #444;
  margin-bottom: 20px;
  text-align: center;
`;
