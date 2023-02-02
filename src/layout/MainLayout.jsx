import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './MainLayout.scss'

function MainLayout() {
	return (
		<div className="main-layout-container">
			<div className="sidebar-container">
				<Sidebar />
			</div>
			<div className="main-layout-outlet">
				<Outlet />
			</div>
		</div>
	)
}

export default MainLayout
