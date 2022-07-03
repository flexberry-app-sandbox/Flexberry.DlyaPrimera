import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dlya_primera',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dlya_primera',
          title: 'Dlya_primera'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
