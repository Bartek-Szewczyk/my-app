import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components'
import { ISingleComment } from '../../entities/comments';
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
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

const SliderSite=styled(Slider)`

`;


let siteNumber=1;
interface IResume{
    user:{
        id: number,
        
    }
    
}
export const Resume: FC<IResume> = props=>{

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
  const { commentsList }= useSelector<IState, ICommentsReducer>(globalState => ({
    ...globalState.comments
  }))





function getCommentUser(post: ISingleComment){
    if(post !== undefined){
        for (let i = 0; i < usersList.length; i++) {
            const el = usersList[i];
            if (el.id=== post.postId) {
                return usersList[i].name
            }
            
        }
    }
}

function getCommentUserCompany(post: ISingleComment){
    if(post !== undefined){
        for (let i = 0; i < usersList.length; i++) {
            const el = usersList[i];
            if (el.id=== post.postId) {
                return usersList[i].company.name
            }
            
        }
    }
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
let postUser: Array<ISingleComment>=[];
function myComment(userId:number){
    postUser=[];
        for (let i = 0; i < commentsList.length; i++) {
            const el = commentsList[i];
            if(el.postId===userId){
                postUser.push(el);
            }
        }
    
return postUser;
}
  
console.log(postUser);
let showComments = commentsList;

let post: Array<object>=[];
   function doThis(){
       post=[];

       
        for (let i = 0; i < postList.length; i++) {

            const NewPost= showComments[i];

            const Post={
                title: NewPost?NewPost.name:'',
                body: NewPost?NewPost.body:'',
                id: NewPost?NewPost.id:1
            }
            const User= {
            name: getCommentUser(NewPost),
            company: getCommentUserCompany(NewPost)

            }
                     

                post.push(
                <div>
                {Post.title.toLowerCase().includes(inputText.toLowerCase())&& <SinglePost>
                            <PostTitle>
                                {Post.title}
                            </PostTitle>
                            <PostContent>
                                {Post.body}
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
        if(siteNumber===postsOnScreen-1){
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
        if (siteNumber===postsOnScreen-2) {
            document.getElementById('next')?.classList.remove('none')
        }
        if (siteNumber===1) {
            document.getElementById('prev')?.classList.add('none')
            document.getElementById('innerSite')?.classList.add('paddingLeft')
        }
        doThis();
        toggleDropdown();
   }
const postsOnScreen = commentsList.length/20;
   let site :Array<object>=[]
   function siteNumbers(){
       site=[]
       
        for (let i = 2; i < postsOnScreen; i++) {
            
            site.push(<SiteNumber className='site'>{i}</SiteNumber>)
        }
        return site
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
                                <div>
                                    <p onClick={()=>{showComments=commentsList}}>Wszystkie</p>
                                    <p onClick={()=>{showComments=myComment(props.user.id)}}>Moje</p>
                                </div>
                            }</div>
                    </Followed>
                    </div>
                    
                </Navigate>
                
           {doThis()}
           {post}
           
           
                {/* <Site>
                    <InnerSite  >
                    <SitePrev id="prev" className='none' onClick={prevSite}>
                        Previous
                    </SitePrev>
                    <SiteNumber id='innerSite' className='site actual paddingLeft'>1</SiteNumber>
                    {siteNumbers()}
                      <SiteNumber className='site'>2</SiteNumber>
                    <SiteNumber className='site'>3</SiteNumber>
                    <SiteNumber className='site'>4</SiteNumber>
                    <SiteNumber className='site'>5</SiteNumber>  
                    <SiteNext id="next" onClick={nextSite}>
                        Next
                    </SiteNext>
                   </InnerSite>
                </Site> */}

            </InnerWrapper>
        </Wrapper>
    )
}


