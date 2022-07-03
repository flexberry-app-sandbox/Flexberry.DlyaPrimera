import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  название: DS.attr('string'),
  тип: DS.belongsTo('i-i-s-dlya-primera-тип', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-dlya-primera-пользователь', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-dlya-primera-рабочее-место', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-dlya-primera-оборудование.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-dlya-primera-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-dlya-primera-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-dlya-primera-оборудование.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-dlya-primera-оборудование.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-dlya-primera-оборудование', {
    инвНомер: attr('Инв номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    тип: belongsTo('i-i-s-dlya-primera-тип', 'Тип', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' }),
    сотрудник: belongsTo('i-i-s-dlya-primera-пользователь', 'Сотрудник', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });
};
