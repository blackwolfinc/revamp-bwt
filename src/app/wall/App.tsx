import { useEffect, useState } from 'react';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [comments, setComments] = useState([]);
  const [videoId, setVideoId] = useState('7369593898009758981'); // Provided video ID
  const clientKey = 'awjaxdqeoh5sriib';
  const clientSecret = '1zHSqQoBxPwQ7XeslwrGhoGayhi8voGj';

  useEffect(() => {
    if (clientKey && clientSecret) {
      fetchAccessToken();
    }
  }, [clientKey, clientSecret]);

  useEffect(() => {
    if (accessToken && videoId) {
      fetchComments();
    }
  }, [accessToken, videoId]);

  const fetchAccessToken = async () => {
    try {
      const response = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache',
        },
        body: new URLSearchParams({
          client_key: clientKey,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://open.tiktokapis.com/video/comment/list/?video_id=${videoId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }

      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div>
      <h1>Access Token: {accessToken}</h1>
      <h2>Comments for Video ID: {videoId}</h2>
      <ul>
        {comments.map((comment :any, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
