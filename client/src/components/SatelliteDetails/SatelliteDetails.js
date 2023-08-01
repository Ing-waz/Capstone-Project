import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TokenContext } from '../../App';

function EditorComponent({fetchUpdatedPosts}) {
    const { SATCAT } = useParams();
    const [content, setContent] = useState('');
    const { token } = useContext(TokenContext);
    console.log(token)
    console.log(token.DoD_id)
  
    const handleQuillChange = (value) => {
      setContent(value);
    };
  
    const submitPost = () => {
        console.log(content);
    if(content.length > 0) {
        
      fetch(`http://localhost:8080/posts/${SATCAT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post_text: content, post_author: token.DoD_id })
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
            fetchUpdatedPosts();
            console.log(data);
            setContent('');
          })
        .catch((err) => console.error('Fetch Error', err));
    }};
  
    return (
      <>
        <ReactQuill value={content} onChange={handleQuillChange} />
        <button onClick={submitPost}>Add Post</button>
      </>
    );
  }
  

function SatelliteDetails () {
    const { SATCAT } = useParams();

    const[ sateData, setSateData ] = useState(null)
    const[ satePosts, setSatePosts ] = useState([])
    const[ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        Promise.all([
          fetch(`http://localhost:8080/satellite/${SATCAT}`).then(res => res.json()),
          fetch(`http://localhost:8080/posts/${SATCAT}`).then(res => res.json())
        ])
          .then(([satelliteData, postsData]) => {
            setSateData(satelliteData);
            setSatePosts(postsData);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, [SATCAT]);

      const fetchUpdatedPosts = () => {
        fetch(`http://localhost:8080/posts/${SATCAT}`)
          .then((res) => res.json())
          .then((data) => {
            setSatePosts(data);
          })
          .catch((error) => {
            console.error('Error fetching updated posts:', error);
          });
      };

    async function submitVote(voteType, oldVotes, postId) {
    let newVotes;
    
    if (voteType === 'upvote') {
        newVotes = oldVotes + 1;
    } else if (voteType === 'downvote') {
        newVotes = oldVotes + 1;
    } else {
        return;
    }

    const bodyData = voteType === 'upvote' ? { up_votes: newVotes } : { down_votes: newVotes };
    
    fetch(`http://localhost:8080/post/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
    })
        .then((res) => res.json())
        .then((data) => {
            const updatedPosts = satePosts.map((post) => {
                if (post.post_id === postId) {
                  return { ...post, ...bodyData };
                } else {
                  return post;
                }
              });
      
              setSatePosts(updatedPosts);
        console.log(data);
        })
        .catch((error) => {
        console.error('Fetch Error:', error);
        });
    }

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false, 
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      };


    if(isLoading) {
        return <div>Loading...</div>
    }

    else if(!isLoading) {
    return (
        <PageContainer>
            <h1>{sateData[0].name}</h1>
            <SatelliteInfo>
                <ImageContainer>
                    <img src={sateData[0].image} alt = 'satellite image' 
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                </ImageContainer>
                <SpecsContainer>
                    <p>SATCAT: {SATCAT}</p>
                    <p>Launch Year: {sateData[0].launch_date}</p>
                    <p>Inclination: {sateData[0].inclination}</p>
                    <p>RAAN: {sateData[0].raan}</p>
                    <p>Eccentricity: {sateData[0].eccentricity}</p>
                    <p>Arugment of Perigee: {sateData[0].argument_of_perigee}</p>
                    <p>Mean Anomaly: {sateData[0].mean_anomaly}</p>
                </SpecsContainer>
            </SatelliteInfo>
            <SatellitePosts>
                {satePosts.map((post) => { return(
                <Post key={post.id}>  
                    <PostDetails>
                        <p>By: {post.firstname} {post.lastname} ({post.email})</p> 
                        <p>Date posted: {formatDateTime(post.date_posted)}</p>
                    </PostDetails>
                    <PostText dangerouslySetInnerHTML={{ __html: post.post_text }}></PostText>
                    <PostVotes>
                        <ThumbUpIcon onClick={() =>  submitVote('upvote', post.up_votes, post.post_id)}/> <p>{post.up_votes}</p>
                        <ThumbDownIcon onClick={() =>  submitVote('downvote', post.down_votes, post.post_id)}/> <p>{post.down_votes}</p>
                    </PostVotes>
                </Post>)})}
                <EditorComponent fetchUpdatedPosts={fetchUpdatedPosts}/>
            </SatellitePosts>
        </PageContainer>
    )
}
}

export default SatelliteDetails;

const PageContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #29435C;
padding: 2em;
border: 2px solid #D1D4C9;
border-radius: 10px;
`

const SatelliteInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

`

const ImageContainer = styled.div`
width: 200px;
height: 200px;
`

const SpecsContainer = styled.div`

`
const SatellitePosts = styled.div`
background-color: #556E53;
padding: 1em;
border: 2px solid #D1D4C9;
border-radius: 10px;

`

const Post = styled.div`

`
const PostVotes = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;
`

const PostDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const PostText = styled.div`
`