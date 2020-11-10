import React from 'react';
import styled from "styled-components";

export default function Burgermenu(props) {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 2.1rem;
    height: .26rem;
    margin-bottom: .2rem;
    margin-right: 1rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -7.4px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 7.4px;
  }

`;