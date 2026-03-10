import { DeviceProvider } from './providers/DeviceProvider/DeviceProvider';
import { HomePage } from '@/pages/HomePage/HomePage';

function App() {
  return (
    <DeviceProvider>
      <HomePage />
    </DeviceProvider>
  );
}

export default App;
