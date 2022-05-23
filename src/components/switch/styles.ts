import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchSelector from 'react-native-switch-selector'
import { FontUtils } from '../../../assets/utils/fonts';


export const CustomSwitch = styled(SwitchSelector, {
    marginTop: '10%',
    width: '80%'
}).attrs(() => ({
    borderRadius: 3,
    backgroundColor: `${ColorUtils.blur_color}40`,
    textColor: ColorUtils.primary_whyte,
    buttonMargin: 5,
    buttonColor: `${ColorUtils.switch_selected_color}40`,
    selectedTextStyle: { fontFamily: FontUtils.bold },
    textStyle: { fontFamily: FontUtils.regular }
}))