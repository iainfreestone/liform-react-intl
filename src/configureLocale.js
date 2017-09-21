import { addLocaleData } from 'react-intl';

import de from 'react-intl/locale-data/de';
import fr from 'react-intl/locale-data/fr';

addLocaleData([...fr]);
addLocaleData([...de]);

const deMessages = {
  'app.greeting': 'Hallo',
  'app.model': 'Modell',
  'app.placeholder': 'Modellnummer',
  'app.description': 'Beschreibung',
  'app.submit': 'Einreichen',
};
const enMessages = {
  'app.greeting': 'Hello',
  'app.model': 'Model',
  'app.placeholder': 'Model number',
  'app.description': 'Description',
  'app.submit': 'Submit',
};
const frMessages = {
  'app.greeting': 'Bonjour',
  'app.model': 'Maquette',
  'app.placeholder': 'Numéro de modèle',
  'app.description': 'La description',
  'app.submit': 'Soumettre',
};

export const locales = {
  de: {
    locale: 'de',
    messages: deMessages,
  },
  en: {
    locale: 'en',
    messages: enMessages,
  },
  fr: {
    locale: 'fr',
    messages: frMessages,
  },
};
