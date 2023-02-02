import { PATHS } from './_PATHS'
import MainLayout from 'layout/MainLayout'
import DashBoardPage from 'pages/DashBoardPage'
import SubPage from 'pages/SubPage'
import RevenuePage from 'pages/RevenuePage'
import UserPage from 'pages/UserPage'
import SettingPage from 'pages/SettingPage'

export function RouteList() {
	return [
		{
			element: <MainLayout />,
			children:
				[
					{
						element: <DashBoardPage />,
						children: [
							{
								path: PATHS.ROOM_PAGE,
								element: <SubPage />,
							},
							{
								path: PATHS.PLAYROOM_PAGE,
								element: <RevenuePage />,
							},
						],
					},
					{ path: PATHS.SHOP_PAGE, element: <UserPage /> },
					{ path: PATHS.PRIZE_PAGE, element: <SettingPage /> },
				],
		},
	]
}
