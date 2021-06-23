import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import defaultAvatar from "../../images/default-avatar.svg";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultAvatar,
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
