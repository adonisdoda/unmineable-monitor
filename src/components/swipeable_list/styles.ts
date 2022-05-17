import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors'
import { FontUtils } from '../../../assets/utils/fonts'


// `${ColorUtils.blur_color}60`
export const ContainerItemSwipeable = styled('TouchableOpacity', {
    flexDirection: 'row',
    justifyContent: `space-around`,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    variants: {
        mode: {
            selected: {
                backgroundColor: `${ColorUtils.blur_color}60`
            },
            unselected: {
                backgroundColor: `${ColorUtils.blur_color}20`
            }
        }
    }
})


export const TextSwipeable = styled('Text', {
    fontSize: 12,
    variants: {
        mode: {
            selected: {
                fontFamily: FontUtils.bold,
                color: ColorUtils.primary_whyte,
            },
            unselected: {
                fontFamily: FontUtils.light,
                color: `${ColorUtils.primary_whyte}60`,
            }
        }
    }
})



export const IndicatorModeRigSwipeable = styled('TouchableOpacity', {
    width: 10,
    height: 10,
    borderRadius: 5,
    right: '12%',
    variants: {
        mode: {
            selected: {
                backgroundColor: ColorUtils.primary_color
            },
            unselected: {
                backgroundColor: `${ColorUtils.secundary_white}60`
            }
        }
    }
})