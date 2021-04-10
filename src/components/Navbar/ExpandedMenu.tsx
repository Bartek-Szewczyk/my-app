import React,{FC} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Menu = styled.div`
 border: 1px solid grey;
`;

const Section = styled.div`
background-color: white;
display:block;

`;
const Scroll= styled.div`
height:370px;
overflow-y: scroll;
overflow-x: hidden;
position: relative;
`;


const EditLink=styled(Link)`
text-decoration: none;
font-size:20px;
padding-top: 5px;
padding-left: 7px;
color: black;
display: block
`;

const NewSection = styled.p`
padding-left: 5px;
color:gray;
margin:3px
`;

const Logout = styled.div`
text-align: center;
padding: 10px;
color:gray;
`;

const Profile = styled.div`
display:flex;
`;
const Name = styled.div`
padding-left: 10px;
font-size: 20px;
`;
const See=styled.div`
font-size:15px;
color:blue;
`;
const TextLink=styled.span`
padding-left: 10px;
`;
const ProfilePicture=styled.img`
  border-radius: 50%;
    width: 40px;
    padding-left: 5px;
`;
interface IExpMenu{
    name: string,
    profilePicture: string;
}

export const ExpandedMenu: FC<IExpMenu>=props=>{
    return(
        <Menu>
            <Section>
                <input className="filter" type="text" placeholder="Filter..."/>
                <Scroll>
                <NewSection>Platform</NewSection>
                    <EditLink to="/publications" ><img src="./Media/icons/publications.png" alt=""/> <TextLink >Publications</TextLink>  </EditLink>
                    <EditLink to="/"> <img src="./Media/icons/house.png" alt=""/><TextLink>Home</TextLink> </EditLink>
                    <EditLink to="/people"> <img src="./Media/icons/people.png" alt=""/><TextLink>People</TextLink> </EditLink>
                    <EditLink to="/entities"><img src="./Media/icons/entities.png" alt=""/><TextLink>Entities</TextLink> </EditLink>
                    <EditLink to="/administration"> <img src="./Media/icons/administration.png" alt=""/> <TextLink>Administration</TextLink></EditLink>
                <NewSection>Workspaces</NewSection>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Supplier contract</TextLink></EditLink>
                    <EditLink to="/corporate"> <img src="./Media/icons/entities2.png" alt=""/> <TextLink>Corporate</TextLink></EditLink>
                    <EditLink to="/norms"> <img src="./Media/icons/book.png" alt=""/><TextLink>Group Norms</TextLink> </EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Real estate contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>
                    <EditLink to="/contract"> <img src="./Media/icons/contract.png" alt=""/> <TextLink>Client contract</TextLink></EditLink>

                    
                    </Scroll>
                    <div className="newsection"></div>
                <NewSection>Account</NewSection>
                    <Profile>
                        <ProfilePicture src={props.profilePicture}>
                            
                        </ProfilePicture>
                        <Name>
                            {props.name}
                            <See>
                                See profile
                            </See>
                        </Name>
                    </Profile>
                    <EditLink to="/privacy" > <img src="./Media/icons/privacy.png" alt=""/> <TextLink>Privacy</TextLink> </EditLink>
                    <EditLink to="/settings" > <img src="./Media/icons/settings.png" alt=""/><TextLink>Settings</TextLink>  </EditLink>
                <div className="newsection"></div>
                <Logout>
                    <img src="./Media/icons/logout.png" alt=""/>
                    <span style={{paddingLeft: "10px"}} >Logout</span>
                </Logout>
            </Section>
        </Menu>
        )
}