// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import PieChart from 'components/charts/PieChart';
import { pieChartData, pieChartOptions } from 'variables/charts';

export default function EducationScore(props: { [x: string]: any }) {
	const { ...rest } = props;

	// Color mode values
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const cardColor = useColorModeValue('white', 'navy.700');
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

	return (
		<Card p='20px' alignItems='center' flexDirection='column' w='100%' {...rest}>
			<Flex
				px={{ base: '0px', '2xl': '10px' }}
				justifyContent='space-between'
				alignItems='center'
				w='100%'
				mb='8px'>
				<Text color={textColor} fontSize='lg' fontWeight='600' mt='4px'>
					Education Score:
				</Text>
			</Flex>

			{/* PieChart component */}
			<PieChart h='200px' w='200px' chartData={pieChartData} chartOptions={pieChartOptions} />

			{/* Score details section */}
			<Card
				bg={cardColor}
				flexDirection='column'
				boxShadow={cardShadow}
				w='100%'
				p='15px'
				px='20px'
				mt='20px'
				mx='auto'
				alignItems='center'>
				<Flex direction='row' align='center'>
					<Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
					<Text fontSize='sm' color='secondaryGray.600' fontWeight='700'>
					The Score
					</Text>
				</Flex>
				<Text fontSize='2xl' color={textColor} fontWeight='700'>
					63
				</Text>
			</Card>
		</Card>
	);
}
