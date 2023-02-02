import { Link } from 'react-router-dom'
import { PATHS } from '../../config/routes'
import './Sidebar.scss'

function Sidebar() {
	return (
		<div className='sidebar'>
			<Link to={PATHS.DASHBOARD_PAGE}>Dashboard</Link>
			<Link to={PATHS.USER_PAGE}>User Management</Link>
			<Link to={PATHS.SETTING_PAGE}>Settings</Link>
		</div>
	)
}

export default Sidebar