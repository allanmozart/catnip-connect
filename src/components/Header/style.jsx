// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50px;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 30px;
  margin-right: 45px;
  text-decoration: none;
  background-color: #d6d6d6;
  color: #5c5c5c;
  padding: 5px;

  &:hover {
    margin-top: 5px;
    text-decoration: underline  #ff5476;
    text-decoration-thickness: 4px;
    
  }
`;
