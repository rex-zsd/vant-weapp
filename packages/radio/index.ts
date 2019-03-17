import { VantComponent } from '../common/component';

VantComponent({
  field: true,

  relation: {
    name: 'radio-group',
    type: 'ancestor'
  },

  classes: ['icon-class', 'label-class'],

  props: {
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      value: 'round'
    }
  },

  methods: {
    emitChange(value) {
      const instance = this.getRelationNodes('../radio-group/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },

    toggle() {
      if (!this.data.disabled) {
        this.emitChange(this.data.name);
      }
    },

    onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});
