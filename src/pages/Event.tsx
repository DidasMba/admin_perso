import React from "react";
import BaseLayout from "../components/BaseLayout";
import EventProfile from "../components/event/EventProfile";

const Event: React.FC = () => {
  return (
    <BaseLayout>
      <div>
        <EventProfile />
      </div>
    </BaseLayout>
  );
};

export default Event;
