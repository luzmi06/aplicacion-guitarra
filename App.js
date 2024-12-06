import { AppRegistry } from 'react-native';
import Navigation from './Navigation';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);


export default function App() {
  return (
    <Navigation></Navigation>

  );
}