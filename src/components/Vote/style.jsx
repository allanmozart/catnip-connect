import styled from "styled-components";

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 600px;
  padding: 100px;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center
`;

export const VotingOptions = styled.div`
  display: flex;  
`;

export const LikeButton = styled.button`
  display: flex;
  background-color: #00aa00;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: #005300;
  }
`;

export const DislikeButton = styled.button`
  display: flex;
  background-color: #d10000;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  margin-left: 40px;
  &:hover {
    background-color: #7e0000;
  }
`;
