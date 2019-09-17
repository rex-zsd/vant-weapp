import { Weapp } from '../definitions/weapp';

export function icon({
  white,
  radioSize,
  radioBorderColor,
  radioTransitionDuration,
  radioCheckedIconColor,
  radioDisabledBackgroundColor,
  radioDisabledIconColor
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { value, disabled } = this.data;

  const style: Partial<CSSStyleDeclaration> = {
    fontSize: radioSize,
    borderColor: radioBorderColor,
    transitionDuration: radioTransitionDuration
  };

  if (value) {
    style.color = white;
    style.backgroundColor = radioCheckedIconColor;
    style.borderColor = radioCheckedIconColor;
  }

  if (disabled) {
    style.backgroundColor = radioDisabledBackgroundColor;
    style.borderColor = radioDisabledIconColor;
  }

  if (disabled && value) {
    style.color = radioDisabledIconColor;
  }

  return style;
}

export function label({
  radioSize,
  radioLabelColor,
  radioLabelMargin,
  radioDisabledLabelColor
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { disabled, labelPosition } = this.data;
  const style: Partial<CSSStyleDeclaration> = {
    lineHeight: radioSize,
    color: disabled ? radioDisabledLabelColor : radioLabelColor
  };

  if (labelPosition === 'left') {
    style.marginRight = radioLabelMargin;
    style.cssFloat = 'left';
  } else {
    style.marginLeft = radioLabelMargin;
  }

  return style;
}
