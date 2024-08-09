import { useTimer } from "react-timer-hook";
import styles from "./sectionHead.module.css";
const SectionHead = ({ small, big, istimer, duration, unit, color }) => {
  const time = new Date();

  switch (unit) {
    case "days":
      time.setDate(time.getDate() + duration);
      break;
    case "hours":
      time.setHours(time.getHours() + duration);
      break;
    case "minutes":
      time.setMinutes(time.getMinutes() + duration);
      break;
    default:
      break;
  }

  return (
    <div className={styles.sectionH_main}>
      <div className={styles.sectionH_top}>
        <div className={styles.secH_top_bar}></div>
        <div className={styles.secH_top_text} style={{color:color}}> {small}</div>
      </div>
      <div className={styles.sectionH_btm}>
        <div className={styles.secH_btm_text}> {big}</div>
        <div className={styles.secH_btm_timer}>
        { istimer &&  <MyTimer expiryTimestamp={time} />}
        </div>
      </div>
    </div>
  );
};

export default SectionHead;

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.secH_timer} style={{  }}>
        <div className={styles.secH_timer_time}>
          <span className={styles.secH_timer_text}>Days</span>
          <span>{days}</span>
        </div>{" "}
        :
        <div className={styles.secH_timer_time}>
          <span className={styles.secH_timer_text}>Hours</span>
          <span>{hours}</span>
        </div>{" "}
        :
        <div className={styles.secH_timer_time}>
          <span className={styles.secH_timer_text}>Minutes</span>
          <span>{minutes}</span>
        </div>{" "}
        :
        <div className={styles.secH_timer_time}>
          <span className={styles.secH_timer_text}>Seconds</span>
          <span>{seconds}</span>
        </div>
        {/* :<div className={styles.secH_timer_time}></div> */}
      </div>
    </div>
  );
}
