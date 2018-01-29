import I18n from 'react-native-i18n';
I18n.defaultLocale = 'es-HN';
I18n.fallbacks = true;
I18n.expand = (object) => {
    console.log(object);
}
//get locale from main page ?
I18n.locale = 'es-HN';

this.isObject = (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
this.mergeDeep = (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {
                    [key]: {}
                });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }
    return mergeDeep(target, ...sources);
}

export const i18n = () => {
    return I18n;
}

export const expandTranslations = (object) => {
    I18n.translations = this.mergeDeep(I18n.translations,object);
}

export const changeLocale = (component,language) => {
    console.log("changing Locale");
    if (language !== undefined) {
        I18n.locale = language;
    }
    if (I18n.currentLocale() === 'en-US') {
        I18n.locale = 'es-HN';
    } else {
        I18n.locale = 'en-US';
    }
    component.forceUpdate();
}