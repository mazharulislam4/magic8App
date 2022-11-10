import Avatar from "@mui/material/Avatar";
import React from 'react';
import { Link } from "react-router-dom";
import arrow from '../../assets/icon/fi-rr-angle-small-down.svg';
export default function ProfileAvatar({ userAvatar, hambar }) {

  return (
    <div>
      <div className="flex items-center gap-x-3">
        <figure>
          <Avatar alt={userAvatar.avatar.alt} src={userAvatar.avatar.img} />
        </figure>
        <Link to ={userAvatar.avatar.link} className="flex items-center gap-x-1">
          {!hambar ? userAvatar.avatar.titl : null} <img src={arrow} alt="arrow icon" />
        </Link>
      </div>
    </div>
  );
}
