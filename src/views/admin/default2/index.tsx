/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
																																																																																	   
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
// Assets
import Usa from 'assets/img/dashboards/usa.png';
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy, MdWarning } from 'react-icons/md';
import CheckTable from 'views/admin/rtl/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import SkillScore from 'views/admin/default2/components/SkillScore';
import NetworkScore from 'views/admin/default2/components/NetworkScore';
import LoyaltyScore from 'views/admin/default2/components/LoyaltyScore';
import FraudScore from 'views/admin/default2/components/FraudScore';
import ExperienceScore from 'views/admin/default2/components/ExperienceScore';
import EducationScore from 'views/admin/default2/components/EducationScore';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';



export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  // Fraud Alerts State (Mock Data)
  const [fraudAlerts, setFraudAlerts] = useState([
    {
      id: 1,
      candidateName: 'John Doe',
      areas: ['Recommendations', 'Job Roles'],
      reasons: ['Exaggerated claims in recommendations', 'Inconsistent work history'],
    },
    {
      id: 2,
      candidateName: 'Jane Smith',
      areas: ['Job Roles'],
      reasons: ['Frequent job changes without clear reasons'],
    },
  ]);

  // Modal Control
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAlert, setSelectedAlert] = useState(null);

//   const handleAlertClick = (alert) => {
//     setSelectedAlert(alert);
//     onOpen();
//   };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Existing Statistics and Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
            />
          }
          name='Number of Recommenders'
          value='5'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
      {/* <TotalSpent work_experience={workExperienceData} /> */}
        <WeeklyRevenue />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <SkillScore />
          <ExperienceScore />
        </SimpleGrid>

        {/* Existing Components (PieCards) */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <LoyaltyScore />
          <NetworkScore />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <EducationScore />
          <FraudScore />
        </SimpleGrid>
      </SimpleGrid>

      

     
    </Box>
  );
}
