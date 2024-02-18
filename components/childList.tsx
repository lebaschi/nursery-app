import React from "react";
import ChildListItem from "../components/childListItem";
import styles from "../src/app/page.module.css";

interface Child {
  childId: string;
  name: {
    fullName: string;
  };
  image: {
    small: string;
  };
  checkedIn: boolean;
}

interface ChildListProps {
  children: Child[];
  accessToken: string;
}

const ChildList: React.FC<ChildListProps> = ({ children, accessToken }) => {
  const handleCheckIn = async (childId: string) => {
    try {
      const response = await fetch(`https://app.famly.co/api/v2/children/${childId}/checkins`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          pickupTime: "16:00",
          accessToken: accessToken,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Checked in successfully");
  
    } catch (error) {
      console.error("Error checking in child:", error);
    }
  };

  const handleCheckOut = async (childId: string) => {
    try {
      const response = await fetch(`https://app.famly.co/api/v2/children/${childId}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: accessToken,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Checked out successfully");
   
    } catch (error) {
      console.error("Error checking out child:", error);
    }
  };

  return (
    <div className={styles.childrenListContainer}>
      {children.map((child) => (
        <ChildListItem
          key={child.childId}
          name={child.name.fullName}
          imageUrl={child.image.small}
          checkedIn={child.checkedIn}
          onCheckIn={() => handleCheckIn(child.childId)}
          onCheckOut={() => handleCheckOut(child.childId)}
        />
      ))}
    </div>
  );
};

export default ChildList;