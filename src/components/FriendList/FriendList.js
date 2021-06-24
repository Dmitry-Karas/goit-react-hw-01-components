import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import Container from "../Container/Container";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <Container>
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  </Container>
);

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
