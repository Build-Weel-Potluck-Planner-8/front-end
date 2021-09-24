import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 13px;
`;

export function ClientNavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
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
      </LinksWrapper>
    </NavLinksContainer>
  );
}