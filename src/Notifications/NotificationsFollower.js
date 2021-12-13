import React, { useEffect, useState } from "react";
import "./NotificationsFollower.css";
import { Avatar } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Follower() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="follower">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="follower__total">
        <div className="follower__info">
          <h2>New Follower</h2>
          <p>Deepak Nanda followed you</p>
        </div>
        <div className="follower__detail">
          <DeleteOutlineIcon />
          <p>
            14 May
            <br />
            19:35
          </p>
        </div>
      </div>
    </div>
  );
}

export default Follower;
