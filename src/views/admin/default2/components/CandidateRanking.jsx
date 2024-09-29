import { Box, Text, Badge } from '@chakra-ui/react';

const CandidateRanking = ({ candidates }) => {
  return (
    <Box mb="20px">
      <Text fontSize="xl" mb="4">
        Top Candidates
      </Text>
      {candidates.map((candidate, index) => (
        <Box
          key={candidate.id}
          p="4"
          mb="2"
          borderWidth="1px"
          borderRadius="lg"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontWeight="bold">
              {index + 1}. {candidate.name}
            </Text>
            <Text fontSize="sm">
              Skills Match: {candidate.skillsMatch}% | Experience: {candidate.yearsExperience} years
            </Text>
          </Box>
          <Badge
            colorScheme={
              candidate.fraudRisk > 70
                ? 'red'
                : candidate.fraudRisk > 40
                ? 'yellow'
                : 'green'
            }
          >
            Score: {candidate.overallScore}
          </Badge>
        </Box>
      ))}
    </Box>
  );
};

export default CandidateRanking;
