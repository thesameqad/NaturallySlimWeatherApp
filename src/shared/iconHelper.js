function getPostfixFileName(iconNumber, isDay)
{
    const iconMap = {
        '01':'clear',
        '02':'light_clouds',
        '03,04': {
            day:'clouds',
            night:'cloudy'
        },
        '09':'light_rain',
        '10':'rain',
        '11':'storm',
        '13':'snow',
        '50':'fog'
    };

    const singleMap = iconMap[iconNumber];
    if(typeof(singleMap) === "string") {
        return singleMap;
    } else if(typeof(singleMap) === "object") {
        return isDay ? singleMap.day : singleMap.night;
    } else {
        for(const prop in iconMap)
        {
            if(prop.split(',').filter(x => x == iconNumber).length > 0)
            {
                if(typeof(iconMap[prop] === "object"))
                    return isDay ? iconMap[prop].day : iconMap[prop].night;
                else
                    return iconMap[prop];
            }
        }
    }
} 
export function getFileNameForIcon(icon)
{
    const iconNumber = icon.substr(0,2);
    const dayPostfix = icon.substr(2);
    const dayNightMap = {
        'd': 'art',
        'n': 'ic'
    };
    

    const fileNamePre = dayNightMap[dayPostfix];
    const fileNamePost = getPostfixFileName(iconNumber,dayPostfix === 'd')

    const fileName = `${fileNamePre}_${fileNamePost}.png`;
    const staticImageMap = {
        'art_clear.png': require('../../assets/images/art_clear.png'),
        'art_clouds.png': require('../../assets/images/art_clouds.png'),
        'art_fog.png': require('../../assets/images/art_fog.png'),
        'art_light_clouds.png': require('../../assets/images/art_light_clouds.png'),
        'art_rain.png': require('../../assets/images/art_rain.png'),
        'art_snow.png': require('../../assets/images/art_snow.png'),
        'art_storm.png': require('../../assets/images/art_storm.png'),
        'ic_clear.png': require('../../assets/images/ic_clear.png'),
        'ic_cloudy.png': require('../../assets/images/ic_cloudy.png'),
        'ic_fog.png': require('../../assets/images/ic_fog.png'),
        'ic_light_clouds.png': require('../../assets/images/ic_light_clouds.png'),
        'ic_rain.png': require('../../assets/images/ic_rain.png'),
        'ic_snow.png': require('../../assets/images/ic_snow.png'),
        'ic_storm.png': require('../../assets/images/ic_storm.png'),
    };
    return staticImageMap[fileName];
}