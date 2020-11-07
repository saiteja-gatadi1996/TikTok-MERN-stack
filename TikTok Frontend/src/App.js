import React, { useState, useEffect } from "react";
import Video from "./Video";
import axios from "./axios";
// import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    async function fetchPosts(){
      //v2 is our mongodb, v1 is our local
      const response= await axios.get('/v2/posts')
      setVideos(response.data)

      //stops the function from firing
      return response;
    }
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   db.collection("videos").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;