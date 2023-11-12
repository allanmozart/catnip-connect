// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50px;
  margin-top: 20px;
  gap: 45px;

  border-radius: 8px;
  border: 1px solid #000; 
  background-color: white;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px;

  border-radius: 8px;
  text-decoration: none;
  background-color: #d6d6d6;
  color: #5c5c5c;
  

  &:hover {
    margin-top: 5px;
    text-decoration: underline  #ff5476;
    text-decoration-thickness: 4px;
    
  }
`;
