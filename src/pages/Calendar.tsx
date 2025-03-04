import React from "react";
import BaseLayout from "../components/BaseLayout";

import CalendarView from "../components/calendar/CalendarView";

const Calendar: React.FC = () => {
  return (
    <BaseLayout>
      <CalendarView />
    </BaseLayout>
  );
};

export default Calendar;
