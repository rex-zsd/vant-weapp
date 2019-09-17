import { VantComponent } from '../common/component';
import * as styles from './styles';

VantComponent({
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: {
      type: Boolean,
      observer() {
        this.updateStyles();
      }
    },
    round: Boolean,
    textColor: String,
    type: {
      type: String,
      value: 'default',
      observer() {
        this.updateStyles();
      }
    }
  },

  styles
});
