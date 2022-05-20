import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors'
import { FontUtils } from '../../../assets/utils/fonts'


export const Container = styled('TouchableOpacity', {
    backgroundColor: `${ColorUtils.blur_color}40`,
    borderWidth: 0.8,
    borderColor: `${ColorUtils.primary_color}20`,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
        mode: {
            SM: {
                width: 60,
                height: 35
            },
            MD: {
                width: 100,
                height: 35
            },
            LG: {
                width: 150,
                height: 35
            }
        }
    }
}).attrs((props: any) => ({
    activeOpacity: 0.8
}))



export const Subtitle = styled('Text', {
    fontFamily: FontUtils.bold,
    color: ColorUtils.primary_whyte,
    variants: {
        mode: {
            SM: {
                fontSize: 12,
            },
            MD: {
                fontSize: 14,
            },
            LG: {
                fontSize: 14,
            }
        }
    }
})