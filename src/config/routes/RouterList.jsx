import { PATHS } from './_PATHS'
import MainLayout from '../../layout/MainLayout'
import DashBoardPage from '../../pages/DashBoardPage'
import SubPage from '../../pages/SubPage'
import RevenuePage from '../../pages/RevenuePage'
import UserPage from '../../pages/UserPage'
import SettingPage from '../../pages/SettingPage'

export function RouteList() {
	return [
		{
			element: <MainLayout />,
			children: [
				{
					path: PATHS.DASHBOARD_PAGE,
					element: <DashBoardPage />,
					children: [
						{
							path: PATHS.SUB_PAGE,
							element: <SubPage />,
						},
						{
							path: PATHS.REVENUE_PAGE,
							element: <RevenuePage />,
						},
					],
				},
				{ path: PATHS.USER_PAGE, element: <UserPage /> },
				{ path: PATHS.SETTING_PAGE, element: <SettingPage /> },
				{ path: PATHS.UNDEFINED_PAGE, element: <DashBoardPage /> },
			],
		},
	]
}
