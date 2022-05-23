import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient, {
    backgroundColor: ColorUtils.secundary_color,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%',
    paddingBottom: '5%'
});