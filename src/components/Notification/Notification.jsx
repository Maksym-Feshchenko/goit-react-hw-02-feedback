import React from "react";
import PropTypes from "prop-types";

const Notification = ({ title }) => {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  };
  
  Notification.propTypes = {
    title: PropTypes.string.isRequired,
  };
  export default Notification;