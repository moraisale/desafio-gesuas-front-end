import React from "react";

interface ISessionName {
  sessionName: string;
}

const SessionName: React.FC<ISessionName> = ({ sessionName }) => {
  return (
    <div className="flex w-full">
      <p className="flex bg-projectRed w-full h-max-content rounded-lg px-2 py-2">
        {sessionName}
      </p>
    </div>
  );
};

export default SessionName;
