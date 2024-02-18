import React from "react";
import styles from "../src/app/page.module.css";

interface ChildListItemProps {
  name: string;
  imageUrl: string;
  checkedIn: boolean;
  onCheckIn: () => void;
  onCheckOut: () => void;
}

const ChildListItem: React.FC<ChildListItemProps> = ({
  name,
  imageUrl,
  checkedIn,
  onCheckIn,
  onCheckOut,
}) => {
  return (
    <div className={styles.childBox}>
      <div className={styles.childImageContainer}>
        <img src={imageUrl} alt={name} className={styles.childImage} />
      </div>
      <p className={styles.childName}>{name}</p>
      <div className={styles.childStatus}>
        <button
          className={checkedIn ? styles.checkedInButton : styles.checkedOutButton}
          onClick={checkedIn ? onCheckOut : onCheckIn}
        >
          {checkedIn ? "Check Out" : "Check In"}
        </button>
      </div>
    </div>
  );
};

export default ChildListItem;



