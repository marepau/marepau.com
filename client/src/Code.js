import React from 'react'
import styled, {keyframes} from 'styled-components'
import albers from './assets/albers.jpg'
import picketVid from './assets/picketmov.mov'
import tinyVid from './assets/tinymov.mov'
import Flash from 'react-animations/lib/flash'
import { IoIosArrowDown } from 'react-icons/io'




const arrowAnimation = keyframes`${Flash}`

const ArrowDiv = styled.div`
  opacity: 1;
  width: 100%;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: infinite 10s ${arrowAnimation}
`

const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 85vh;
  height: 100%
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: -1;
  top: 0px;
`;

const IndvProject = styled.div`
  width: 100%;
  max-height: 85vh;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
  `;

const PlayerContainer = styled.div`
  width: 55%;
  margin: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlayerWrapper = styled.div`
  position: relative;
  border: 1px solid grey;
`;

const ProjectText = styled.div`
  width: 400px;
  height: 45%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin: 40px;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const ProjectFirstLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
`;

const TextFirstLine = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

const ProjectDescription = styled.div`
  text-align: justify;
`;

const ProjectTools = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
`
const ProjectImages = styled.div`
  width: 100%;
  height: auto;
  position: static;
  display: flex;
  justify-content: space-between;
`;
const PaddingItem = styled.div`
  width: 100%;
  height: 15vh;
`;
const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display:flex;
  position: relative;
  align-content: flex-start;
  padding: 6px;
`;

function Code(){
  return(
   <ProjectsContainer>
      <IndvProject>
        <ProjectFirstLine>
          <PlayerContainer>
            <PlayerWrapper>
              <video width="100%" autoPlay muted loop> <source type="video/mp4" src={picketVid}/>
              </video>
              </PlayerWrapper>
          </PlayerContainer>
          <ProjectText>
            <TextFirstLine>
              <div>Picket</div>
              <a href="https://github.com/PicketNow/picket">> View source code</a>
            </TextFirstLine>
            <ProjectDescription>Picket is a social networking progessive web app focused on activism. It allows users to find and RSVP to events that align with their interests. It also allows organizers to add events within a specific category. Once logged in, users can chat with other attendees and set preferences for future discovery.</ProjectDescription>
          </ProjectText>
        </ProjectFirstLine>
        <ProjectTools>Node.js | Express | PostgreSQL | Sequelize | CSS | HTML | Material UI | React | Redux | Socket.io</ProjectTools>
        <ArrowDiv>
          <IoIosArrowDown />
        </ArrowDiv>
     </IndvProject>
     <PaddingItem/>
     <IndvProject>
        <ProjectFirstLine>
          <ProjectText>
            <TextFirstLine>
              <div>Tiny Made</div>
              <a href="https://github.com/1911-grace-shopper/grace-shopper">> View source code</a>
            </TextFirstLine>
            <ProjectDescription>Tiny Made is an ecommerce purveyor of tiny homes, complete with a persistent cart and checkout system. Buy one, buy multiple! Buy your mama a house!</ProjectDescription>
          </ProjectText>
          <PlayerContainer>
            <PlayerWrapper>
              <video width="100%" autoPlay muted loop> <source type="video/mp4" src={tinyVid}/>
              </video>
            </PlayerWrapper>
          </PlayerContainer>
        </ProjectFirstLine>
        <ProjectTools>Node.js | Express | PostgreSQL | Sequelize | CSS | HTML | Material UI | React | Redux | Socket.io</ProjectTools>
        <ProjectImages>
        </ProjectImages>
     </IndvProject>
   </ProjectsContainer>
  )
}

export default Code
