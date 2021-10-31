import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button
            className="btn btn-primary mx-2"
            onClick={onLogout}
        >
            Logout
        </button>
    );
};

LogOutButton.propTypes = {
    onLogout: PropTypes.func.isRequired
};

const MemoizedLogoutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                init rerender
            </button>
            <MemoizedLogoutButton onLogout={handleLogout} />
        </>
    );
};

export default MemoWithUseCallbackExample;
