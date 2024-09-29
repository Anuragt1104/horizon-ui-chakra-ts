import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import UserSpecific from 'views/admin/default2';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import ComparisonPage from 'views/admin/comparison';

// Auth Imports
import SignInCentered from 'views/auth/signIn';



const candidateData = {
  name: 'John Doe',
  job_title: 'Senior Software Engineer',
  experience_years: 8,
  fraudRiskScore: 75,
  skills: ['Python', 'Machine Learning', 'Cloud Computing', 'Leadership'],
  networkStrength: 80,
  recommenders: ['Jane Smith', 'Mike Johnson'],
  experienceDistribution: [60, 40],
  fraudAlerts: ['Inconsistent job titles', 'Overlapping employment dates'],
  strengths: ['Strong technical skills', 'Leadership experience'],
  weaknesses: ['High fraud risk', 'Limited industry diversity'],
  suggestions: ['Conduct background check', 'Verify employment history'],
  networkData: {
    nodes: [
      { id: 1, label: 'John Doe', color: '#f00' },
      { id: 2, label: 'Jane Smith', color: '#0f0' },
    ],
    edges: [{ from: 1, to: 2 }],
  },
};

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'User Specific',
    layout: '/admin',
    path: '/default2',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <UserSpecific />,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: 'Comparison Table',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/comparison-table',
    component: < ComparisonPage/>,
  },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: <SignInCentered />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  // },
];

export default routes;
