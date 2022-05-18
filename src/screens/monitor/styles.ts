import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors';
import { FontUtils } from '../../../assets/utils/fonts';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient, {
    backgroundColor: ColorUtils.secundary_color,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%',
    paddingBottom: '5%',
});

export const MonitorPrice = styled('View', {
    justifyContent: 'center',
    alignItems: `center`,
    borderColor: ColorUtils.primary_color,
    borderWidth: 1,
    width: 250,
    height: 250,
    borderRadius: 125,
    shadowColor: ColorUtils.primary_color,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
})

export const CurrentBalanceSubtitle = styled('Text', {
    fontFamily: FontUtils.light,
    fontSize: 12,
    color: `${ColorUtils.primary_whyte}40`,
    bottom: '10%',
})

export const Balance = styled('Text', {
    fontFamily: FontUtils.bold,
    fontSize: 25,
    color: ColorUtils.primary_whyte,
})

export const BalancePerDay = styled('Text', {
    fontFamily: FontUtils.regular,
    fontSize: 15,
    color: `${ColorUtils.secundary_white}80`,
    top: '20%'
})


export const Divider = styled('View', {
    borderWidth: 0.5,
    borderColor: `${ColorUtils.secundary_white}10`,
    width: '90%',
    marginTop: '10%',
    marginBottom: '5%'
})


export const Subtitles = styled('Text', {
    fontFamily: FontUtils.regular,
    fontSize: 18,
    color: ColorUtils.primary_whyte,
})

export const SubtitlesValues = styled('Text', {
    fontFamily: FontUtils.bold,
    fontSize: 16,
    color: ColorUtils.primary_color,
    shadowColor: ColorUtils.blur_color,
    shadowOpacity: 0.15,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
})

export const SubtitleContainer = styled('View', {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
    marginBottom: '20%'
})


export const WrapperSubtitle = styled('View', {
    flex: 5,
    paddingHorizontal: '5%'
})


