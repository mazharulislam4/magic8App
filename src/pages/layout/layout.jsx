import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// fixed button entire website (Earn mana button)
import FixedButton from '../../components/global/fixedButton';
// for passing navbar cliked boll 
import { NavbarTogllerContext } from "../../context/utilsContext";
// a hook for taking window width and height 
import useWindowSize from '../../hooks/useWindowSize';
import Navbar from '../_global/navbar';
import { Sidebar } from '../_global/sidebar';
// styled component
import styled from 'styled-components';

const MainLayout = styled.div`

    overflow: hidden;

  @media (min-width: 1024px) {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
`;

const AsideContainer = styled.div`
  width: ${(props)=>props.autoCollaps ? '65px' : '295px'};
`;

const Container = styled.div`
width: 100%;
  @media (min-width: 1024px) {
    flex-grow: 1;
   
  }
`;

function Layout() {
  const [open, setOpen] = useState(false);
  const [autoCollaps , setAutoCollaps] = useState(false)
  const windowSize = useWindowSize()
  const width = Math.round(windowSize.width);

  useEffect(() => {
    if (width < 1280 && width > 1023) {
      setAutoCollaps(true);
    } else {
      setAutoCollaps(false)
    }

    return ()=>{}
},[width] )


  // navigation toggler 
  const toggleHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true)
   }
  };

  return (
    <NavbarTogllerContext.Provider value={{ open, toggleHandler }}>
      <MainLayout>
        <FixedButton>Earn Free Mana</FixedButton>
        {/* sidebar from page global  */}
        <AsideContainer autoCollaps={autoCollaps}>
          <Sidebar autoCollaps={autoCollaps} />
        </AsideContainer>
        {/* content container  */}
        <Container>
          <Navbar />
          <Outlet />
        </Container>
      </MainLayout>
    </NavbarTogllerContext.Provider>
  );
}

export default Layout