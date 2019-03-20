import { createStackNavigator, createAppContainer } from 'react-navigation';
import DrawerNavigator from 'ChickyShop/src/Navigators/DrawerNavigator';
import Authentication from 'ChickyShop/src/components/Authentication/Authentication';
import ChangeInfo from 'ChickyShop/src/components/ChangeInfo/ChangeInfo';
import OrderHistory from 'ChickyShop/src/components/OrderHistory/OrderHistory';

const StackNavigator = createStackNavigator(
    {
        MAIN: {
            screen: DrawerNavigator,
        },
        AUTHENTICATION: {
            screen: Authentication
        },
        CHANGE_INFO: {
            screen: ChangeInfo
        },
        ORDER_HISTORY: {
            screen: OrderHistory
        }
    },
    {
        initialRouteName: 'MAIN',
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;
