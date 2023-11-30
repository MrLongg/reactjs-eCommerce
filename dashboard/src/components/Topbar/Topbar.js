import classNames from "classnames/bind";
import styles from "./Topbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Topbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("left")}>
          <span className={cx("logo")}>Long Admin</span>
        </div>
        <div className={cx("right")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faBell} />
            <span className={cx("badge")}>2</span>
          </div>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <img
            className={cx("avatar")}
            src="https://yt3.ggpht.com/wWDqp5j3QmrwIDRCBn0t1cKPkGNKpe5q9E1U5vCVPxcIppPnOAwwjZ8z4DgrIIhWTDHSxKPdwA=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
