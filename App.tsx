import { ConfigCatProvider, PollingMode } from 'configcat-react';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ConfigCatProvider 
      sdkKey='IR3bCGq3KUaNI6UEkmyY0g/9_I4raUgJkqWBM9RRLo-dg'
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 10}}

      
      >
      <Home />
    </ConfigCatProvider>
    
  );
}
