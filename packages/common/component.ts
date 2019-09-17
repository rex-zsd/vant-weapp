import { basic } from '../mixins/basic';
import { observe } from '../mixins/observer/index';
import { VantComponentOptions, CombinedComponentInstance } from 'definitions/index';
import { themeMixin, themeRelationMixin, themeChildRelation } from '../mixins/theme';

function mapKeys(source: object, target: object, map: object) {
  Object.keys(map).forEach(key => {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function VantComponent<Data, Props, Methods>(
  vantOptions: VantComponentOptions<
    Data,
    Props,
    Methods,
    CombinedComponentInstance<Data, Props, Methods>
  > = {}
): void {
  const options: any = {};

  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });

  const { relation } = vantOptions;
  if (relation) {
    options.relations = Object.assign(options.relations || {}, {
      [`../${relation.name}/index`]: relation
    });
  }

  // add default externalClasses
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');

  // add default behaviors
  options.behaviors = options.behaviors || [];
  options.behaviors.push(basic);

  const hasStyles = vantOptions.styles != null && Object.keys(vantOptions.styles).length > 0;
  const isThemeProvider = Object.keys(options.relations || {}).indexOf('themeParent') > -1;

  if (hasStyles || isThemeProvider) {
    options.behaviors.push(themeRelationMixin);
  }

  if (hasStyles) {
    options.behaviors.push(themeMixin(vantOptions.styles));
    options.relations = Object.assign(options.relations || {}, themeChildRelation);
  }

  // map field to form-field behavior
  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  }

  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };

  observe(vantOptions, options);
  Component(options);
}

export { VantComponent };
