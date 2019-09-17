import { Weapp } from 'definitions/weapp';
import * as variable from '../common/style/var';

function toPascalCase(word: string) {
  return word.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
}

let deps = [];

const depCollector = Object.keys(variable).reduce((prev, key) => {
  Object.defineProperty(prev, key, {
    get() {
      deps.push(key);
      return variable[key];
    }
  });
  return prev;
}, {});

export const themeMixin = (stylesConfig: Weapp.Styles = {}) => {
  let stylesDep: { [key: string]: string[] } = null;

  return Behavior({
    created() {
      this.__theme = { ...variable };
    },

    attached() {
      this.updateStyles();
    },

    methods: {
      collectStyleDeps() {
        stylesDep = Object.entries(stylesConfig).reduce((prev, [key, fn]) => {
          deps = [];
          fn.call(this, depCollector);
          prev[key] = deps;
          return prev;
        }, {});
      },

      updateStyles(theme?: Weapp.Theme) {
        if (stylesDep == null) {
          this.collectStyleDeps();
        }

        if (theme == null) {
          theme = this.__theme;
        } else {
          Object.assign(this.__theme, theme);
        }

        const keys = Object.keys(theme || {});

        const styles = Object.entries(stylesDep).reduce((prev, [key, deps]) => {
          if (deps.some(v => keys.includes(v))) {
            const style = stylesConfig[key].call(this, {
              ...variable,
              ...theme
            });

            prev[key] = Object.entries(style || {})
              .map(([name, value]) => `${toPascalCase(name)}:${value}`)
              .join(';');
          }

          return prev;
        }, {});

        if (Object.keys(styles).length > 0) {
          this.set({
            styles: {
              ...this.data.styles,
              ...styles
            }
          });
        }
      }
    }
  });
};

export const themeRelationMixin = Behavior({});

export const themeChildRelation = {
  '../theme-provider/index': {
    type: 'ancestor'
  }
};
