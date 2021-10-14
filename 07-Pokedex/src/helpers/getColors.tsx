import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri: string) => {

    const result = await ImageColors.getColors(uri, { fallback: 'grey' })

    let primaryColor;

    switch (result.platform) {
        case 'android':
            // android result properties
            primaryColor = result.dominant;
            break
        //   case 'web':
        //     // web result properties
        //     const lightVibrantColor = result.lightVibrant
        //     break
        case 'ios':
            // iOS result properties
            primaryColor = result.background;
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return [
        primaryColor
    ];
}