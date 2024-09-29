import { Box, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';
// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import * as React from 'react';
// Assets
import { MdOutlineError } from 'react-icons/md';  // Only keeping the exclamation mark icon

type RowObj = {
	Id: string;
	status: number;  // Changing status to a fraud risk number
	date: string;
	Overall: number;
};

const columnHelper = createColumnHelper<RowObj>();

export default function ComplexTable() {
	const [ sorting, setSorting ] = React.useState<SortingState>([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	
	// Define table data inside the component
	const tableData = [
		{ Id: "1", status: 80, date: "Software Engineer", Overall: 85 },
		{ Id: "2", status: 60, date: "Data Scientist", Overall: 78 },
		{ Id: "3", status: 90, date: "Product Manager", Overall: 92 },
		{ Id: "4", status: 45, date: "Business Analyst", Overall: 68 },
		{ Id: "5", status: 72, date: "DevOps Engineer", Overall: 75 },
		{ Id: "6", status: 95, date: "Finance Manager", Overall: 89 },
		{ Id: "7", status: 50, date: "Consultant", Overall: 70 },
		{ Id: "8", status: 80, date: "Software Engineer", Overall: 85 },
		{ Id: "9", status: 60, date: "Data Scientist", Overall: 78 },
		{ Id: "3", status: 90, date: "Product Manager", Overall: 92 },
		{ Id: "4", status: 45, date: "Business Analyst", Overall: 68 },
		{ Id: "5", status: 72, date: "DevOps Engineer", Overall: 75 },
		{ Id: "6", status: 95, date: "Finance Manager", Overall: 89 },
		{ Id: "7", status: 50, date: "Consultant", Overall: 70 },
		// You can add more data as needed
	];

	const columns = [
		columnHelper.accessor('Id', {
			id: 'id',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					ID
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('status', {
			id: 'status',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Fraud Risk
				</Text>
			),
			cell: (info) => {
				const fraudRisk = info.getValue();
				return (
					<Flex align='center'>
						{/* Show an exclamation mark for fraud risks above 70 */}
						{fraudRisk >= 70 && (
							<Icon w='24px' h='24px' me='5px' color='orange.500' as={MdOutlineError} />
						)}
						<Text color={textColor} fontSize='sm' fontWeight='700'>
							{fraudRisk} {/* Display the fraud risk score */}
						</Text>
					</Flex>
				);
			}
		}),
		columnHelper.accessor('date', {
			id: 'date',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Job Title
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('Overall', {
			id: 'Overall Score',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Overall Score
				</Text>
			),
			cell: (info) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()} {/* Display the overall score */}
					</Text>
				</Flex>
			)
		}),
	];

	const [ data, setData ] = React.useState(() => [ ...tableData ]);
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});

	return (
		<Card flexDirection='column' w='100%' px='0px'>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
					Top-Ranked Candidates
				</Text>
				<Menu />
			</Flex>

			{/* This Box contains the table and makes it scrollable */}
			<Box overflowY="scroll" overflowX="auto" maxH="600px">
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											pe='10px'
											borderColor={borderColor}
											cursor='pointer'
											onClick={header.column.getToggleSortingHandler()}>
											<Flex justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{ asc: '', desc: '' }[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.map((row) => {
							return (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<Td
												key={cell.id}
												fontSize={{ sm: '14px' }}
												minW={{ sm: '150px', md: '200px', lg: 'auto' }}
												borderColor='transparent'>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
}
