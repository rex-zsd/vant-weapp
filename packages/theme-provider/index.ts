import { VantComponent } from '../common/component';
import { themeRelationMixin } from '../mixins/theme';

VantComponent({
  relations: {
    themeParent: {
      type: 'descendant',
      target: themeRelationMixin,
      linked(child) {
        this.children = this.children || [];
        this.children.push(child);
        child.updateStyles(this.data.theme);
      },
      unlinked(child) {
        this.children = this.children.filter(
          (item: WechatMiniprogram.Component.TrivialInstance) => item !== child
        );
      }
    }
  },

  props: {
    theme: {
      type: Object,
      value: {},
      observer(newValue = {}, oldValue = {}) {
        const newKeys = Object.keys(newValue);
        const oldKeys = Object.keys(oldValue);
        const diffKeys = [...newKeys, ...oldKeys].filter(
          key => !newKeys.includes(key) || !oldKeys.includes(key)
        );

        const diffTheme = diffKeys.reduce(
          (prev, key) => ({
            ...prev,
            [key]: newValue[key]
          }),
          {}
        );

        this.updateChildStyle(diffTheme);
      }
    }
  },

  methods: {
    updateChildStyle(theme) {
      (this.children || []).forEach(
        (child: WechatMiniprogram.Component.TrivialInstance) => {
          child.updateStyles(theme);
        }
      );
    }
  }
});
