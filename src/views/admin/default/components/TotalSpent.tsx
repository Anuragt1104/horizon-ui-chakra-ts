// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import LineChart from 'components/charts/LineChart';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from 'variables/charts';

interface Job {
  job_title: string;
  company?: string;
  city?: string;
  state?: string;
  start_date: string;
  end_date?: string;
  responsibilities: string[];
}

interface TotalSpentProps {
  work_experience: Job[];
  [x: string]: any;
}

export default function TotalSpent(props: TotalSpentProps) {
  const { work_experience, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
  const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

  return (
    <Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px' {...rest}>
      <Flex align='center' justify='space-between' w='100%' pe='20px' pt='5px'>
        <Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px'>
          <Icon as={MdOutlineCalendarToday} color={textColorSecondary} me='4px' />
          Job Timeline
        </Button>
        <Button
          ms='auto'
          alignItems='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>
      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          {work_experience && work_experience.map((job: Job, index: number) => (
            <Box key={index} mb='20px'>
              <Text color={textColor} fontSize='20px' textAlign='start' fontWeight='600' lineHeight='100%'>
                {job.job_title}
              </Text>
              <Text color={textColorSecondary} fontSize='sm' fontWeight='500' mt='4px'>
                {job.start_date} - {job.end_date ? job.end_date : 'Present'}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
        </Box>
      </Flex>
    </Card>
  );
}
