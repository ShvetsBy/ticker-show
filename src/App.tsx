import React, { useState } from 'react';
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
  Button
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import {selectPrice, selectDiff, setTicker} from './store/tickerSlice'
import { fetchTicker } from './store/api';
function App() {
  const [ticker, setTickerName] = useState('AMZN');
  const dispatch = useDispatch();
  const price = useSelector(selectPrice);
  const diff = useSelector(selectDiff);
  const formattedTicker = ticker.toUpperCase()


  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setTickerName(e.target.value);
  const fetchTickerData = () => {
    
    fetchTicker(formattedTicker).then(d => {
      dispatch(setTicker(d))
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box textAlign="center" fontSize="xl" w="30%">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <StatGroup>
              <Stat>
                <StatLabel>Index:</StatLabel>
                <StatLabel fontWeight={'bold'}>{formattedTicker}</StatLabel>
                <StatNumber>{price}</StatNumber>
                <StatHelpText>
                  <StatArrow type={diff >= 0 ? 'increase' : 'decrease'}/>
                  {diff.toFixed(2)}
                </StatHelpText>
              </Stat>
            </StatGroup>
            <FormControl>
              <FormLabel>Enter ticker</FormLabel>
              <Input placeholder='AAPL'  onChange={handleInputChange}/>
              <FormHelperText>
              US stocks, forex and crypto
              </FormHelperText>
              <Button onClick={fetchTickerData}>Fetch</Button>
            </FormControl>
          </Grid>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
