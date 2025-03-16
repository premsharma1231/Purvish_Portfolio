import React, { useEffect, useRef } from "react";
import "github-calendar/dist/github-calendar.css";
// import GitHubCalendar from "github-calendar";
import GitHubCalendar from 'react-github-calendar';

function Github() {
  const calendarRef = useRef(null);
  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, "premsharma1231", {
        responsive: true,
        tooltips: true,
      });
    }
  }, []);
  return (
    <GitHubCalendar username="premsharma1231" />
    // <div className="flex flex-col mt-6 font-Karla items-center justify-center text-DarkColor rounded-xl shadow-lg">
    //   <h2 className="text-lg lg:text-2xl font-Bungee mb-4 text-DarkColor">🚀 GitHub Contributions</h2>
    //   <div ref={calendarRef} className="w-72 lg:w-full overflow-auto p-4 rounded-lg shadow-md"></div>
    // </div>
  );
}
export default Github;