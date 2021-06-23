import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li className="item" key={id}>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

// FriendListItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// }

export default FriendListItem;
