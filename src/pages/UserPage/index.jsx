import './index.scss'
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	flexRender,
} from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import viewIcon from '../../assets/view.svg'
import DetailPost from './components/DetailPost'

function UserPage() {
	const [isOpen, setIsOpen] = useState(false)
	function onClose() {
		setIsOpen(false)
	}

	const columns = useMemo(
		() => [
			{
				accessorKey: 'id',
				cell: info => info.getValue(),
				header: () => <span>ID</span>,
				footer: props => props.column.id,
				enableColumnFilter: false,
			},
			{
				accessorFn: row => row.userId,
				id: 'userId',
				cell: info => info.getValue(),
				header: () => <span>User ID</span>,
				footer: props => props.column.id,
			},
			{
				accessorFn: row => row.title,
				id: 'title',
				cell: info => info.getValue(),
				header: () => <span>Title</span>,
				footer: props => props.column.id,
			},
			{
				enableColumnFilter: false,
				id: 'action',
				cell: (info) => {
					return (
						<button
							onClick={() => {
								setIsOpen(true)
								setId(info.row.id)
								console.log('id', info.row.id)
							}}
						>
							<img src={viewIcon} alt="View post detail" />
						</button>
					)
				},
				header: () => <span>Action</span>,
				footer: props => props.column.id,
			},
		],
		[]
	)

	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setData(res.data)).catch(e => console.error(e.message))
	}, []);

	const [id, setId] = useState(null);

	return (
		<div className="table-container">
			<div className="table-title">User Management</div>
			<Table
				{...{
					data,
					columns,
				}}
			/>
			<DetailPost show={isOpen} onClose={onClose}>
				<p>
					<b>User ID:</b> {data[id]?.userId}
				</p>
				<p>
					<b>Title:</b> {data[id]?.title}
				</p>
				<p>
					<b>Body:</b> {data[id]?.body}
				</p>

			</DetailPost>
		</div>
	)
}

function Table({
	data,
	columns,
}) {
	const table = useReactTable({
		data,
		columns,
		// Pipeline
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		//
		debugTable: true,
	})

	return (
		<div className="p-2">
			<div className="h-2" />
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<th key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder ? null : (
											<div>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
												{header.column.getCanFilter() ? (
													<div>
														<Filter column={header.column} />
													</div>
												) : null}
											</div>
										)}
									</th>
								)
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => {
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map(cell => {
									return (
										<td key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className="h-2" />
			<div className="flex items-center gap-2">
				<button
					className="border rounded p-1"
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
				>
					{'<<'}
				</button>
				<button
					className="border rounded p-1"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					{'<'}
				</button>
				<button
					className="border rounded p-1"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					{'>'}
				</button>
				<button
					className="border rounded p-1"
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
				>
					{'>>'}
				</button>
				<span className="flex items-center gap-1">
					<div>Page</div>
					<strong>
						{table.getState().pagination.pageIndex + 1} of{' '}
						{table.getPageCount()}
					</strong>
				</span>
				<span className="flex items-center gap-1">
					| Go to page:
					<input
						type="number"
						defaultValue={table.getState().pagination.pageIndex + 1}
						onChange={e => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0
							table.setPageIndex(page)
						}}
						className="border p-1 rounded w-16"
					/>
				</span>
				<select
					value={table.getState().pagination.pageSize}
					onChange={e => {
						table.setPageSize(Number(e.target.value))
					}}
				>
					{[10, 20, 30, 40, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

function Filter({ column }) {
	const columnFilterValue = column.getFilterValue()

	return (
		<input
			type="text"
			value={(columnFilterValue ?? '')}
			onChange={e => column.setFilterValue(e.target.value)}
			placeholder={`Search...`}
			className="w-36 border shadow rounded"
		/>
	)
}

export default UserPage