import { NavLink } from 'react-router-dom'
import { PATHS } from '../../config/routes'
import './Sidebar.scss'

function Sidebar() {
	return (
		<div className='sidebar'>
			<NavLink to={PATHS.DASHBOARD_PAGE}>Dashboard</NavLink>
			<NavLink to={PATHS.USER_PAGE}>Post Management</NavLink>
			<NavLink to={PATHS.SETTING_PAGE}>Settings</NavLink>
		</div>
	)
}

export default Sidebar