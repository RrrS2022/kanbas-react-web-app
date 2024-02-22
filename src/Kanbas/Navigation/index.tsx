import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaDesktop, FaShareAltSquare, FaQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 icon-red" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 icon-red" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 icon-red" /> },
    { label: "Inbox",   icon: <FaInbox className="fs-2 icon-red" />           },
    { label: "History",   icon: <FaClock className="fs-2 icon-red" />           },
    { label: "Studio",   icon: <FaDesktop className="fs-2 icon-red" />           },
    { label: "Commons",   icon: <FaShareAltSquare className="fs-2 icon-red" />           },
    { label: "Help",   icon: <FaQuestionCircle className="fs-2 icon-red" /> , belowText: true},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to="http://northeastern.edu" className="icon-container">
          <img src="/images/northeastern_icon.jpg" alt="Northeastern Icon" className="icon-img" />
        </Link>
        </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? 'wd-active' : ''}>
          <Link to={`/Kanbas/${link.label}`}>
            <div className={link.belowText ? 'icon-wrapper-below' : 'icon-wrapper'}>
              {link.icon}
              <span>{link.label}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;