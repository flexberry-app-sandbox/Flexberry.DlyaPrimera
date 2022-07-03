import { Serializer as ОборудованиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dlya-primera-оборудование';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОборудованиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
