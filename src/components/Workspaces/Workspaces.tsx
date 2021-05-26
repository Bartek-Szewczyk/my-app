import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { pushActualSite } from '../../actions/actualSiteAction';

type PushActualSite = ReturnType<typeof pushActualSite>;

const WorkspacesWrapper=styled.div`
  clear:both;
  width: 1200px;
  height: 300px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:40px;
  
`;

const SectionName=styled.h2`
  text-align: left;
  color:grey;
  padding-left:15px;
  margin-bottom:0px
 `;
const InnerWorkspaces=styled.div`
  width:93%;
  height:100%;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  
`;

const WorkspacesBox=styled.div`
  background-color:white;
  box-shadow: 0 0 4px grey;
  max-width:300px;
  height:250px;
  min-width:300px;
  max-height:250px;
  justify-content: center;
  align-items: center;
  text-align:left;
  margin: 10px;
  border-radius:5px;
  overflow: hidden;
`;

const BoxImg=styled.img`
  width:100%;
  height:45%;
`;
 
 const BoxIcon=styled.img`
 background-color:white;
 padding:20px;
 border-radius:5px;
 height:60px;
 margin-top:-45px;
 margin-left:10px;
 box-shadow: 0 0 3px grey;
 `;

 const BoxTitle=styled.h3`
 margin-top:0px;
 margin-left:5px;
 `;

 const BoxLastUpdate=styled.p`
 margin-left:10px;
 `;

 const BoxInfo=styled.span`
 width:80%;
 justify-content:space-between;
  display:flex;
  margin-left:10px;
  margin-top:10px
 `;

 const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;
 
const EditLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

function SampleNextArrow(props:any) {
  const { className,  onClick } = props;
  return (
     <div
      className={className}
      onClick={onClick}
    >
      <img src="../Media/icons/next.svg" alt=""/>
      </div>
  );
}

 function SamplePrevArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src="../Media/icons/prev.svg" alt=""/>
      </div>
  );
}

export let workspacesDate={
  title: '',
  icon: '',
  imagine: ''
};

export const Workspaces :FC =()=>{

const  {photoList} = useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))


    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };


    const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Home',
      icon: '../Media/icons/house.png',
  }))
  },[dispatch]);  


    return (

        <WorkspacesWrapper>
            <SectionName>
              Workspaces
            </SectionName>
        <InnerWorkspaces>
          <Slider {...settings}>
            <EditLink  to='/workspacesSite'  >
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Client contract'; workspacesDate.icon='../Media/icons/contract.svg'; workspacesDate.imagine=photoList[31]?.url}}>
                <BoxImg src={photoList[31]? photoList[31].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/contract.svg' />
                  <BoxTitle>Client contract</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/contract.svg" alt=""/>
                  Contract
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  150 users
                </BoxInfo>
                <BoxLastUpdate>Last update 2 days ago</BoxLastUpdate>
              </WorkspacesBox>
              </EditLink>
             <EditLink to='/workspacesSite'>  
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Supplier contract'; workspacesDate.icon='../Media/icons/contract.svg'; workspacesDate.imagine=photoList[32]?.url}}>
                <BoxImg src={photoList[32]? photoList[32].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/contract.svg' />
                  <BoxTitle>Supplier contract</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/contract.svg" alt=""/>
                  Contract
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  25 users
                </BoxInfo>
                <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
            <EditLink to='/workspacesSite'>
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Corporate'; workspacesDate.icon='../Media/icons/entities.svg'; workspacesDate.imagine=photoList[33]?.url}}>
                <BoxImg src={photoList[33]? photoList[33].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/entities.svg' />
                  <BoxTitle>Corporate</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/entities2.svg" alt=""/>
                  Corporate
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  22 users
                </BoxInfo>
                <BoxLastUpdate>Last update 5 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
             <EditLink to='/workspacesSite'>
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Group Norms'; workspacesDate.icon='../Media/icons/book.svg'; workspacesDate.imagine=photoList[34]?.url}}>
                <BoxImg src={photoList[34]? photoList[34].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
             <EditLink to='/workspacesSite'>
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Group Norms'; workspacesDate.icon='../Media/icons/book.svg'; workspacesDate.imagine=photoList[35]?.url}}>
                <BoxImg src={photoList[35]? photoList[35].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
             <EditLink to='/workspacesSite'>
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Group Norms'; workspacesDate.icon='../Media/icons/book.svg'; workspacesDate.imagine=photoList[36]?.url}}>
                <BoxImg src={photoList[36]? photoList[36].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
             <EditLink to='/workspacesSite' title='aa'>
              <WorkspacesBox onClick={()=>{workspacesDate.title
                ='Group Norms'; workspacesDate.icon='../Media/icons/book.svg'; workspacesDate.imagine=photoList[37]?.url}}>
                <BoxImg src={photoList[37]? photoList[37].url:" "}/>
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
            </EditLink>
             </Slider>
            </InnerWorkspaces>
           </WorkspacesWrapper> 
    )
  }
