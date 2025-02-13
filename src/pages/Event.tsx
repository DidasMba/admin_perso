import React from "react";
import BaseLayout from "../components/BaseLayout";
import EventProfile from "../components/event/EventProfile";

const Event: React.FC = () => {
  return (
    <BaseLayout>
      <div>
        {/* <h1>Mes événements</h1>
        <h1>Mes événements</h1> */}

        <EventProfile />
      </div>
    </BaseLayout>
  );
};

export default Event;
