import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { LogoutButton } from "./LogoutButton";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileClientNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <Marginer />
          <LinkItem>
          <Link href="/home">Home</Link>
        </LinkItem>
          <LinkItem>
          <Link href="/organizer">Organizer</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/guest">Guest</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/upcoming-potlucks">Upcoming potlucks</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/bookings">My Bookings</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/recipes">Recipes</Link>
        </LinkItem>
          <Marginer />
          <LogoutButton/>
        </LinksWrapper>
        
      )}
    </NavLinksContainer>
  );
}