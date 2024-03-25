import React, { useState } from "react";
import "./nestedList.css";
import ListContent from "./ListContent";

function NestedList() {
  const list = [
    {
      id: 1,
      title: "Home",
      child: [
        {
          id: 1,
          title: "Desktop",
          child: [
            {
              id: 1,
              title: "Windows (C:)",
            },
            {
              id: 2,
              title: "Local Disk (D:)",
            },
            {
              id: 3,
              title: "Local Disk (E:)",
            },
          ],
        },
        {
          id: 2,
          title: "Music",
          child: [
            {
              id: 1,
              title: "Rock",
            },
            {
              id: 2,
              title: "Classical",
            },
            {
              id: 3,
              title: "Western",
            },
            {
              id: 4,
              title: "Melodies",
            },
          ],
        },
        {
          id: 3,
          title: "Documents",
          child: [
            {
              id: 1,
              title: "PDF",
            },
            {
              id: 2,
              title: "Word",
            },
            {
              id: 3,
              title: "Excel",
            },
            {
              id: 4,
              title: "PowerPoint",
            },
            {
              id: 5,
              title: "JPG",
            },
          ],
        },
        {
          id: 4,
          title: "Videos",
          child: [
            {
              id: 1,
              title: "Sample.mp4",
            },
            {
              id: 2,
              title: "Youtube",
            },
            {
              id: 3,
              title: "LEO.mp4",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "User",
      child: [
        {
          id: 1,
          title: "User 1",
          child: [
            {
              id: 1,
              title: "Program Files",
            },
            {
              id: 2,
              title: "Contacts",
            },
            {
              id: 3,
              title: "Downloads",
            },
          ],
        },
        {
          id: 2,
          title: "User 2",
          child: [
            {
              id: 1,
              title: "AppData",
            },
            {
              id: 2,
              title: "Favorites",
            },
            {
              id: 3,
              title: "Links",
            },
            {
              id: 4,
              title: "OneDrive",
            },
          ],
        },
        {
          id: 3,
          title: "Guest",
          child: [
            {
              id: 1,
              title: "Saved Games",
            },
            {
              id: 2,
              title: "Pictures",
            },
            {
              id: 3,
              title: "Temp Files",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Applications",
      child: [
        {
          id: 1,
          title: "VS Code",
          child: [
            {
              id: 1,
              title: "Recent Projects",
            },
            {
              id: 2,
              title: "React",
            },
            {
              id: 3,
              title: "HTML and CSS",
            },
            {
              id: 4,
              title: "JavaScript",
            },
          ],
        },
        {
          id: 2,
          title: "IntelliJ",
          child: [
            {
              id: 1,
              title: "JAVA Code",
            },
            {
              id: 2,
              title: "Task",
            },
          ],
        },
        {
          id: 3,
          title: "Chrome",
          child: [
            {
              id: 1,
              title: "History",
            },
            {
              id: 2,
              title: "Extensions",
            },
            {
              id: 3,
              title: "YouTube",
            },
          ],
        },
        {
          id: 4,
          title: "VLC",
          child: [
            {
              id: 1,
              title: "Recent",
            },
            {
              id: 2,
              title: "MP4 Videos",
            },
            {
              id: 3,
              title: "Movies",
            },
            {
              id: 4,
              title: "Old Memories",
            },
          ],
        },
        {
          id: 5,
          title: "Brave",
          child: [
            {
              id: 1,
              title: "Recent Search",
            },
            {
              id: 2,
              title: "GMail",
            },
            {
              id: 3,
              title: "Settings",
            },
            {
              id: 4,
              title: "New Tab",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "System",
      child: [
        {
          id: 1,
          title: "Settings",
          child: [
            {
              id: 1,
              title: "Time",
            },
            {
              id: 2,
              title: "Accounts",
            },
            {
              id: 3,
              title: "Privacy",
            },
            {
              id: 4,
              title: "Update",
            },
          ],
        },
        {
          id: 2,
          title: "Control Panel",
          child: [
            {
              id: 1,
              title: "Softwares",
            },
            {
              id: 2,
              title: "Hardwares",
            },
            {
              id: 3,
              title: "Programs",
            },
            {
              id: 4,
              title: "Users",
            },
          ],
        },
        {
          id: 3,
          title: "Display",
          child: [
            {
              id: 1,
              title: "Brightness",
            },
            {
              id: 2,
              title: "HDR",
            },
            {
              id: 3,
              title: "Scale",
            },
            {
              id: 4,
              title: "Advanced",
            },
          ],
        },
      ],
    },
  ];

  const [mainSelected, setMainSelected] = useState(null);
  const [subSelected, setSubSelected] = useState(null);

  return (
    <div className="nested-list-container">
      <div className="list">
        <div className="list-container">
          {list.map((data) => {
            return (
              <div
                key={data.id - 1}
                onClick={() => {
                  setMainSelected(data.id);
                  setSubSelected(null);
                }}
              >
                <ListContent list={data} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="list">
        {mainSelected === null ? null : (
          <div className="list-container">
            {list[mainSelected - 1].child.map((data) => {
              return (
                <div key={data.id - 1} onClick={() => setSubSelected(data.id)}>
                  <ListContent list={data} />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="list">
        {subSelected === null ? null : (
          <div className="list-container">
            {list[mainSelected - 1].child[subSelected - 1].child.map((data) => {
              return (
                <div key={data.id - 1}>
                  <ListContent list={data} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NestedList;
