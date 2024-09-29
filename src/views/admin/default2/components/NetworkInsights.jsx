import { Box, Text } from '@chakra-ui/react';
// import { Network } from 'react-vis-network';

const NetworkInsights = ({ networkData }) => {
  const options = {
    nodes: {
      shape: 'dot',
      size: 16,
      font: {
        size: 14,
        color: '#ffffff',
      },
      borderWidth: 2,
    },
    edges: {
      width: 2,
    },
    physics: {
      stabilization: false,
    },
  };

  return (
    <Box mb="20px">
      <Text fontSize="xl" mb="4">
        Network Connections
      </Text>
      <Box height="400px">
        {/* <Network data={networkData} options={options} /> */}
      </Box>
    </Box>
  );
};

export default NetworkInsights;
