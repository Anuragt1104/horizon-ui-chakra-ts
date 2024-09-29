import { Table, Thead, Tbody, Tr, Th, Td, Box, Icon, Tooltip } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

const CandidateComparisonTable = ({ candidates }) => {
  return (
    <Box overflowX="auto" mb="20px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Candidate</Th>
            <Th>Fraud Risk</Th>
            <Th>Skills Match</Th>
            <Th>Network Strength</Th>
            <Th>Experience Summary</Th>
          </Tr>
        </Thead>
        <Tbody>
          {candidates.map((candidate) => (
            <Tr key={candidate.id}>
              <Td>
                <Box display="flex" alignItems="center">
                  <Box
                    w="30px"
                    h="30px"
                    borderRadius="full"
                    bg="gray.300"
                    mr="2"
                    backgroundImage={`url(${candidate.avatar})`}
                    backgroundSize="cover"
                  />
                  {candidate.name}
                  {candidate.fraudRisk > 70 && (
                    <Tooltip label="High Fraud Risk">
                      <WarningIcon color="red.500" ml="2" />
                    </Tooltip>
                  )}
                </Box>
              </Td>
              <Td>
                <Box
                  color={
                    candidate.fraudRisk > 70
                      ? 'red.500'
                      : candidate.fraudRisk > 40
                      ? 'yellow.500'
                      : 'green.500'
                  }
                >
                  {candidate.fraudRisk}%
                </Box>
              </Td>
              <Td>
                <Box
                  color={
                    candidate.skillsMatch > 80
                      ? 'green.500'
                      : candidate.skillsMatch > 50
                      ? 'yellow.500'
                      : 'red.500'
                  }
                >
                  {candidate.skillsMatch}%
                </Box>
              </Td>
              <Td>
                <Box
                  color={
                    candidate.networkStrength > 80
                      ? 'green.500'
                      : candidate.networkStrength > 50
                      ? 'yellow.500'
                      : 'red.500'
                  }
                >
                  {candidate.networkStrength}
                </Box>
              </Td>
              <Td>
                {candidate.yearsExperience} years in {candidate.industries.join(', ')} as{' '}
                {candidate.roles.join(', ')}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CandidateComparisonTable;
