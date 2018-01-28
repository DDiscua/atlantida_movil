import I18n from 'react-native-i18n';
import en_us from './locale/en_us'; 
import es_hn from './locale/es_hn';

I18n.defaultLocale  = 'es-HN';
I18n.fallbacks = true;

I18n.translations = {
  'en-US':en_us,
  'es-HN':es_hn
};

//get locale from main page ?
I18n.locale = 'es-HN';

export default I18n;