import React, { useState } from 'react';
import { Box, SimpleGrid, Icon, useColorModeValue, Text, Flex, Select, Button } from '@chakra-ui/react';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdBarChart, MdAttachMoney } from 'react-icons/md';
import ScoreCard from 'views/admin/default2/components/SkillScore'; // Ensure this import is correct
import SkillScore from 'views/admin/default2/components/SkillScore';

export default function ComparisonPage() {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardShadow = useColorModeValue('lg', 'none');

  // Example array of candidates
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      job_title: "Senior Software Engineer",
      experience_years: 8,
      fraudRiskScore: 25,
      skills: ["Python", "Machine Learning", "Cloud Computing", "Leadership"],
      networkStrength: 80,
      recommenders: ["Jane Smith", "Mike Johnson"],
      experienceDistribution: [60, 40],
    },
    {
      id: 2,
      name: "Alice Johnson",
      job_title: "Data Scientist",
      experience_years: 5,
      fraudRiskScore: 15,
      skills: ["Data Analysis", "R", "SQL", "Python", "TensorFlow"],
      networkStrength: 70,
      recommenders: ["Chris Lee", "Samuel Green"],
      experienceDistribution: [30, 50, 20],
    },
  ];

  // State to store selected candidates
  const [firstCandidateId, setFirstCandidateId] = useState<number | null>(null);
  const [secondCandidateId, setSecondCandidateId] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  // Function to get candidate by ID
  const getCandidateById = (id: number | null) => candidates.find(candidate => candidate.id === id);

  // Handle click on the "Compare" button
  const handleCompare = () => {
    if (firstCandidateId !== null && secondCandidateId !== null) {
      setShowComparison(true); // Only show the comparison if both candidates are selected
    } else {
      alert('Please select both candidates before comparing.');
    }
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Dropdowns for selecting candidates */}
      <Flex mb="20px" justifyContent="space-around">
        {/* First Candidate Dropdown */}
        <Box>
          <Text fontWeight="bold" mb="8px">Select First Candidate:</Text>
          <Select
            placeholder="Select Candidate"
            value={firstCandidateId ?? ''}
            onChange={(e) => setFirstCandidateId(Number(e.target.value))}
          >
            {candidates.map(candidate => (
              <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
            ))}
          </Select>
        </Box>

        {/* Second Candidate Dropdown */}
        <Box>
          <Text fontWeight="bold" mb="8px">Select Second Candidate:</Text>
          <Select
            placeholder="Select Candidate"
            value={secondCandidateId ?? ''}
            onChange={(e) => setSecondCandidateId(Number(e.target.value))}
          >
            {candidates.map(candidate => (
              <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
            ))}
          </Select>
        </Box>
      </Flex>

      {/* Compare Button */}
      <Flex justifyContent="center" mb="20px">
        <Button colorScheme="blue" onClick={handleCompare}>
          Compare
        </Button>
      </Flex>

      {/* Show comparison only if the button is clicked and both candidates are selected */}
      {showComparison && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} gap='40px'>
          {[getCandidateById(firstCandidateId), getCandidateById(secondCandidateId)].map((candidate, index) => (
            <Box
              key={index}
              p='30px'
              bg={cardBg}
              boxShadow={cardShadow}
              borderRadius='10px'
              border='1px solid'
            >
              {/* Candidate Info */}
              <Flex justify="space-between" alignItems="center" mb="20px">
                <MiniStatistics
                  // startContent={
                  //   <IconBox
                  //     w='56px'
                  //     h='56px'
                  //     bg={boxBg}
                  //     icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
                  //   />
                  // }
                  name={`${candidate?.name} - ${candidate?.job_title}`}
                  value={`${candidate?.experience_years} Years Experience`}
                />
                <Text fontSize="xl" fontWeight="bold" color={brandColor}>
                  Fraud Risk Score: {candidate?.fraudRiskScore}
                </Text>
              </Flex>

              {/* Skills Section */}
              <MiniStatistics
                // startContent={
                //   <IconBox
                //     w='56px'
                //     h='56px'
                //     bg={boxBg}
                //     icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
                //   />
                // }
                name="Skills"
                value={candidate?.skills.join(', ')}
              />

              <Flex justify="space-between" mt="20px" alignItems="center">
                <Text fontWeight="bold">Network Strength: {candidate?.networkStrength}</Text>
                <Text fontWeight="bold">Recommenders: {candidate?.recommenders.length}</Text>
              </Flex>

              {/* Experience Distribution Chart */}
              <Box mt="20px">
                <SkillScore title="Experience Distribution" value={candidate?.experienceDistribution} />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
