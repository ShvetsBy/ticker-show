import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box textAlign="center" fontSize="xl" w="30%">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <StatGroup>
              <Stat>
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
            </StatGroup>
            <FormControl>
              <FormLabel>Enter ticker</FormLabel>
              <Input type="email" />
              <FormHelperText>
                For example use AAPL, TSLA or AMZN
              </FormHelperText>
            </FormControl>
          </Grid>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
