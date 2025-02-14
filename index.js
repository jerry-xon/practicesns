import { registerRootComponent } from "expo";

import App from "./App";
import Login from "./Login"
import PickYourInterest from "./PickYourInterest"
import CreateProfile from "./CreateProfile"
import sampletheme from "./sampletheme"
import Test from "./Test";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Test);
