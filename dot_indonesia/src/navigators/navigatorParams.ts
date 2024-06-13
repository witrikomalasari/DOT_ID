import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from './MainNavigator';
import {RouteProp} from '@react-navigation/native';

export type BaseNavigatorProp = NativeStackNavigationProp<NavigatorParamList>;

// ini tuk keperluan ROUTES.PARAMS digunakan di navigation.navigate(kirim data) sperti snippet dari interface IOrderCart
// ditaro di screen OrderScreen (ketik:const route = useRoute<AddNewOrderScreenRouteProps>();)
export type DetailScreenRouteProps = RouteProp<
  NavigatorParamList,
  'DetailScreen'
>;
