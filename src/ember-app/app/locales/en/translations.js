import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDlya_primeraПользовательLForm from './forms/i-i-s-dlya-primera-пользователь-l';
import IISDlya_primeraРабочееМестоLForm from './forms/i-i-s-dlya-primera-рабочее-место-l';
import IISDlya_primeraТипLForm from './forms/i-i-s-dlya-primera-тип-l';
import IISDlya_primeraПользовательEForm from './forms/i-i-s-dlya-primera-пользователь-e';
import IISDlya_primeraРабочееМестоEForm from './forms/i-i-s-dlya-primera-рабочее-место-e';
import IISDlya_primeraТипEForm from './forms/i-i-s-dlya-primera-тип-e';
import IISDlya_primeraОборудованиеModel from './models/i-i-s-dlya-primera-оборудование';
import IISDlya_primeraПользовательModel from './models/i-i-s-dlya-primera-пользователь';
import IISDlya_primeraРабочееМестоModel from './models/i-i-s-dlya-primera-рабочее-место';
import IISDlya_primeraТипModel from './models/i-i-s-dlya-primera-тип';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dlya-primera-оборудование': IISDlya_primeraОборудованиеModel,
    'i-i-s-dlya-primera-пользователь': IISDlya_primeraПользовательModel,
    'i-i-s-dlya-primera-рабочее-место': IISDlya_primeraРабочееМестоModel,
    'i-i-s-dlya-primera-тип': IISDlya_primeraТипModel
  },

  'application-name': 'Dlya_primera',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dlya_primera',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dlya_primera',
          title: 'Dlya_primera'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'для-примера': {
          caption: 'Для примера',
          title: 'Для примера',
          'i-i-s-dlya-primera-тип-l': {
            caption: 'Тип',
            title: ''
          },
          'i-i-s-dlya-primera-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-dlya-primera-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-dlya-primera-тип-l': {
            caption: 'ТипL',
            title: 'Тип'
          },
          'i-i-s-dlya-primera-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dlya-primera-пользователь-l': IISDlya_primeraПользовательLForm,
    'i-i-s-dlya-primera-рабочее-место-l': IISDlya_primeraРабочееМестоLForm,
    'i-i-s-dlya-primera-тип-l': IISDlya_primeraТипLForm,
    'i-i-s-dlya-primera-пользователь-e': IISDlya_primeraПользовательEForm,
    'i-i-s-dlya-primera-рабочее-место-e': IISDlya_primeraРабочееМестоEForm,
    'i-i-s-dlya-primera-тип-e': IISDlya_primeraТипEForm
  },

});

export default translations;
