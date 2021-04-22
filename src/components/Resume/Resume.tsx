import React, { ChangeEvent, FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { List } from './List';
import './Resume.css';

const Wrapper=styled.div`
    width: 1200px;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    margin-bottom: 50px;
    clear:both;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
    position:relative;
`;

const Navigate=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px
`;
const SectionName=styled.h2`
    text-align: left;
    color:grey;
    padding-left:15px;
    margin-bottom:0px;
    justify-content: center;
    align-items: center;
 `;
 const InputWrapper = styled.div`
    text-align: left;
    width:250px;
    display: inline-block;
    margin-right:40px;
`;
const Filter = styled.input`
    width: 95%;
    font-size: 20px;
    padding: 5px;
`;

const Followed=styled.div`
    padding-top:6px;
    width: 150px;
    align-items: center;
`;

const FolMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 20px;
    justify-content: space-between;
    color:blue;
    align-items: center;
`;

const SinglePost=styled.div`
    width:100%;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    text-align:left;
    padding-bottom:10px;
`;

const PostTitle=styled.h2`
    padding-top: 5px;
    color:blue;
    padding-left:10px;
`;

const PostContent=styled.p`
    padding-left:10px;
    width:95%;
`;

const PostInfo=styled.div`
    display:flex;
    margin-left:10px;
    margin-top:10px;
`;

const Logo=styled.img`
    height:30px;
    margin-right:10px;
    border-radius:50%;
`;
const Icon=styled.img`
    margin-right:10px;
`;
const Company=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Category=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Update= styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    color:grey;
`;

const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;

const Site=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-item:center;
    color:blue;
`;

const InnerSite=styled.div`
    display: flex;
    width:240px;
    
`;

const SitePrev=styled.h3`
    padding-right:10px;
`;
const SiteNumber=styled.div`
    padding:5px;
    font-weight:bold;
    padding-top:20px;
    
`;

const SiteNext=styled.h3`
    padding-left:10px;
`;



let siteNumber=1;

export const Resume: FC = ()=>{

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const { postList }= useSelector<IState, IPostsReducer>(globalState => ({
    ...globalState.posts
    }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }))
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

  


     function getUserPostTitle(user: ISingleUser) {
       if(user !== undefined){
           for (let i = 0; i < postList.length; i++) {
           const el = postList[i];
           if(el.userId===user.id){
               return postList[i+siteNumber].title.toString();
           }
       }
       }
       
       return "";
   }
   function getUserPostContent(user: ISingleUser) {
       if(user !== undefined){
           for (let i = 0; i < postList.length; i++) {
           const el = postList[i];
           if(el.userId===user.id){
               return postList[i+siteNumber].body;
           }
       }
       }
       
       return "";
   }
function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

const [inputText, setInputText] = useState<string>('');
const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    const text= e.target.value;
    setInputText(text);
}

let post: Array<object>=[];
   function doThis(){
       post=[];

       
        for (let i = 0; i < 10; i++) {

             const NewUser= usersList[i];

                const User= {
                id: NewUser? NewUser.id :"",
                name: NewUser? NewUser.name :"",
                jobTitle: NewUser? NewUser.company.catchPhrase :"Job Title",
                company: NewUser? NewUser.company.name :"Company"

                 }

                 
                                const title=postList? getUserPostTitle(usersList[i]):" "
                        

                post.push(
                <div>
                {title.toLowerCase().includes(inputText.toLowerCase())&& <SinglePost>
                            <PostTitle>
                                {postList? getUserPostTitle(usersList[i]):" "}
                            </PostTitle>
                            <PostContent>
                                {postList? getUserPostContent(usersList[i]):" "}
                            </PostContent>
                            <PostInfo>
                                <Company>
                                    <Logo src={photoList[i]? photoList[i].url:" "}/>
                                <p>{User.company}</p> 
                                </Company>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                                </Dot>
                                <Category>
                                    <Icon src="../Media/icons/entities2.svg" alt=""/>
                                    <p>Corporate</p> 
                                </Category>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                            </Dot>
                                <Update>
                                    Update {rand(1, 20)} days ago by {User.name}
                                </Update>
                                
                            </PostInfo>
        
                        </SinglePost>}</div>
                )
                
        }
    
   }

   function nextSite() {
        let sites = document.querySelectorAll('.site')
        siteNumber++;
        
        sites.forEach(site => {
            if (site.classList.contains('actual')) {
                site.classList.remove('actual')
            }
            if(site?.textContent===siteNumber.toString()){
                site.classList.add('actual')
            }
        });
        if(siteNumber===5){
            document.getElementById('next')?.classList.add('none')
        }
        if(siteNumber===2){
            document.getElementById('prev')?.classList.remove('none')
            document.getElementById('innerSite')?.classList.remove('paddingLeft')
        }
        
       doThis();
       toggleDropdown();
   }

   function prevSite(){
        let sites = document.querySelectorAll('.site')
        siteNumber--;
        sites.forEach(site => {
            if (site.classList.contains('actual')) {
                site.classList.remove('actual')
            }
            if(site?.textContent===siteNumber.toString()){
                site.classList.add('actual')
            }
        });
        if (siteNumber===4) {
            document.getElementById('next')?.classList.remove('none')
        }
        if (siteNumber===1) {
            document.getElementById('prev')?.classList.add('none')
            document.getElementById('innerSite')?.classList.add('paddingLeft')
        }
        doThis();
        toggleDropdown();
   }



    return(
        <Wrapper>
            <InnerWrapper>
                <Navigate>
                    <SectionName>
                        Resume your work
                    </SectionName>
                    <div style={{display:'flex'}}>
                        <InputWrapper>
                            <Filter type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}/>
                            <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <Followed ref={wrapperRef}>
                         <FolMenu onClick={toggleDropdown}>
                            <div>
                                <img style={{height:'20px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>Followed</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                        
                        </FolMenu>
                        <div>
                            {dropdownOpen &&
                            <List/>}</div>
                    </Followed>
                    </div>
                    
                </Navigate>
           {doThis()}
           {post}
           
                <Site>
                    <InnerSite  >
                    <SitePrev id="prev" className='none' onClick={prevSite}>
                        Previous
                    </SitePrev>
                    <SiteNumber id='innerSite' className='site actual paddingLeft'>1</SiteNumber>
                    <SiteNumber className='site'>2</SiteNumber>
                    <SiteNumber className='site'>3</SiteNumber>
                    <SiteNumber className='site'>4</SiteNumber>
                    <SiteNumber className='site'>5</SiteNumber>
                    <SiteNext id="next" onClick={nextSite}>
                        Next
                    </SiteNext>
                   </InnerSite>
                </Site>
            </InnerWrapper>
        </Wrapper>
    )
}


