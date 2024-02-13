import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import CabinIcon from '@mui/icons-material/Cabin';
import TodayIcon from '@mui/icons-material/Today';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon /> Home
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <CabinIcon /> Courts
                    </li>
                    <li className="sidebarListItem">
                        <TodayIcon /> events
                    </li>
                    <li className="sidebarListItem">
                        <FitnessCenterIcon /> studios
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LocalPostOfficeIcon /> Mail
                    </li>
                    <li className="sidebarListItem">
                        <CommentIcon /> Feedback
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Manage</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonIcon /> User
                    </li>
                    <li className="sidebarListItem">
                        <CategoryIcon /> Items
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon /> Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
