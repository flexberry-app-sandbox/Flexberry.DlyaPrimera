import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.для-примера.caption'),
          title: i18n.t('forms.application.sitemap.для-примера.title'),
          children: [{
            link: 'i-i-s-dlya-primera-тип-l',
            caption: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-тип-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-dlya-primera-пользователь-l',
            caption: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-пользователь-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-dlya-primera-рабочее-место-l',
            caption: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-рабочее-место-l.caption'),
            title: i18n.t('forms.application.sitemap.для-примера.i-i-s-dlya-primera-рабочее-место-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-dlya-primera-тип-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-dlya-primera-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-dlya-primera-тип-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-dlya-primera-пользователь-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-dlya-primera-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-dlya-primera-пользователь-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})