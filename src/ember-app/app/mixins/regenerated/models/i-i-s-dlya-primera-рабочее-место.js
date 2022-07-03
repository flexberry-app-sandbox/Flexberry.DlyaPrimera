import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  кабинет: DS.attr('string'),
  место: DS.attr('string'),
  оборудование: DS.hasMany('i-i-s-dlya-primera-оборудование', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-dlya-primera-рабочее-место.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-dlya-primera-рабочее-место.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-dlya-primera-рабочее-место.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-dlya-primera-рабочее-место.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-dlya-primera-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    оборудование: hasMany('i-i-s-dlya-primera-оборудование', 'Оборудование', {
      инвНомер: attr('Инв номер', { index: 0 }),
      название: attr('Название', { index: 1 }),
      тип: belongsTo('i-i-s-dlya-primera-тип', 'Тип', {
        название: attr('Название', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'название' }),
      сотрудник: belongsTo('i-i-s-dlya-primera-пользователь', 'Сотрудник', {
        фИО: attr('ФИО', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-dlya-primera-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 })
  });
};
