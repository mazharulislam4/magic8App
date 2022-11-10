// import { motion } from "framer-motion";
import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
  padding: ${(props) => (props.padding ? props.padding : "20px 51px")};
  color: ${(props) => (props.color ? props.color : "#000")};
  display: ${(props) => (props.display ? props.display : "inline-block")};
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  box-shadow:  0px 4px 10px rgba(159, 159, 159, 0.25);
border-radius: 8px;
transition: background 0.6s ease-in-out , color 0.4s ease-in-out;
  &:hover {
    color: ${(props) => (props.texthover ? props.texthover : "#fff")};
    background-color: ${(props) => (props.hoverbg ? props.hoverbg : "#8646EE")};
  }
`;

function Button({ children, texthover, bg, hoverbg, padding, display , width , color }) {
  return (
    <Btn
      className="medium-font"
      type="button"
      texthover={texthover}
      bg={bg}
      hoverbg={hoverbg}
      padding={padding}
      width={width}
      display={display}
      color = {color}
    >
      {children}
    </Btn>
  );
}

export default Button;
