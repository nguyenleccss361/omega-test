import { NavLink, Outlet } from 'react-router-dom'
import { PATHS } from '../../config/routes'
import './index.scss'

function DashBoardPage() {

	return (
		<div className="dashboard-container">
			<div className="dashboard-title">DashBoard</div>
			<div className="dashboard-button">
				<NavLink to={PATHS.SUB_PAGE}><button>Subscription</button></NavLink>
				<NavLink to={PATHS.REVENUE_PAGE}><button>Revenue</button></NavLink>
			</div>
			<div className="dashboard-outlet">
				<Outlet />
			</div>
		</div>
	)
}

export default DashBoardPage