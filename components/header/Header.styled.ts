import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 12px 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px 20px;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 0;

  a {
    // border: 1px solid red;
  }
`;

export const GoBack = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0;
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;
