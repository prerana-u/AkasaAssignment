import React, { useState, useEffect } from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
function LikeButton(props) {
    const supabase = createClient(
        "https://qspnufyghsfzeuwzybam.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
      );
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);

   const updateLikes= async ()=>{
    const { data, error } = await supabase
        .from('Blogs')
        .update({ likes: likes })
        .eq('id', props.postid)
        .select();
    
   }

   const getLikes = async ()=>{
    let { data: Blogs, error } = await supabase
    .from("Blogs")
    .select("likes")
    .eq('id', props.postid);
    setLikes(Blogs[0].likes);
   }

   useEffect(() => {
    getLikes();
    
  }, []);

   return (
    <div className="like-button-container">
    <button
       className={`like-button ${liked ? 'liked' : ''}`}
       onClick={() => {
          setLikes(likes + 1);
          setLiked(true);
          updateLikes();
       }}
    >
        <i class="bi bi-heart-fill" style={{marginRight:"5px"}}></i>
       {likes} Likes
    </button>
 </div>
   );
}
export default LikeButton;