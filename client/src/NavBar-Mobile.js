import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

const Nav = styled.div`
  background-color: rgba(0, 0, 0, 0);
  // position: -webkit-sticky;
  // position: sticky;
  height: 15vh;
  `;

const MenuLink = styled.a`
  text-decoration: none;
  color: #a7c6b1;
  &:hover {
    color: white;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: black;
`;

const NavHeader = styled.div`
  padding-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  `;

const NavLeft = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open Sans',sans-serif;
  font-weight: 600;
  padding-left: 10px;
  `;
const InnerNav = styled.div`
  padding: 40px;
`;
const NavCenter = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const FirstName = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 150%;
  font-weight: 700;
  `;

const LastName = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;;
  transform: rotate(-180deg);
  font-size: 150%;
  font-weight: 700;
  `;

const NavRight = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  padding-right: 10px;
  `;



class NavBarMobile extends React.Component {
  showMenu (event) {
    event.preventDefault()
  }

  render() {
    return (
    <Nav>
      <Menu width={'175px'}>
        <MenuLink href="fiber">Fiber</MenuLink>
        <MenuLink href="code">Code</MenuLink>
        <MenuLink href="about">About</MenuLink>
        <MenuLink href="contact">Contact</MenuLink>
      </Menu>
      <NavHeader>
        <NavCenter>
          <HomeLink href="/">
            <FirstName>Mary</FirstName>
            <LastName>Paul</LastName>
              </HomeLink>
        </NavCenter>
      </NavHeader>
    </Nav>
    )
  }

}

// function NavBarMobile(){
//   return (

//     <Nav>
//         <NavHeader>
//           {/* <NavLeft>
//             <InnerNav>
//             <MenuLink href="fiber">
//               Fiber
//             </MenuLink>
//             </InnerNav>
//             <InnerNav>
//             <MenuLink href="code">
//               Code
//             </MenuLink>
//             </InnerNav>
//           </NavLeft> */}

//           <NavCenter>
//             <HomeLink href="/">
//             <FirstName>Mary</FirstName>
//             <LastName>Paul</LastName>
//             </HomeLink>
//           </NavCenter>

//           {/* <NavRight>
//           <InnerNav>
//             <MenuLink href="about">
//               About
//             </MenuLink>
//             </InnerNav>
//             <InnerNav>
//             <MenuLink href="contact">
//               Contact
//             </MenuLink>
//             </InnerNav>
//           </NavRight> */}
//         </NavHeader>
//     </Nav>
//   )
// }

export default NavBarMobile
