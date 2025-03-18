
import React from 'react';

const UserCard = ({ name, email }) => {
    return (
        <div className="p-4 border rounded shadow">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default UserCard;
