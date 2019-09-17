import { Weapp } from '../definitions/weapp';

export function icon({
  white,
  checkboxSize,
  checkboxBorderColor,
  checkboxTransitionDuration,
  checkboxCheckedIconColor,
  checkboxDisabledBackgroundColor,
  checkboxDisabledIconColor
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { value, disabled } = this.data;

  const style: Partial<CSSStyleDeclaration> = {
    fontSize: checkboxSize,
    borderColor: checkboxBorderColor,
    transitionDuration: checkboxTransitionDuration
  };

  if (value) {
    style.color = white;
    style.backgroundColor = checkboxCheckedIconColor;
    style.borderColor = checkboxCheckedIconColor;
  }

  if (disabled) {
    style.backgroundColor = checkboxDisabledBackgroundColor;
    style.borderColor = checkboxDisabledIconColor;
  }

  if (disabled && value) {
    style.color = checkboxDisabledIconColor;
  }

  return style;
}

export function label({
  checkboxSize,
  checkboxLabelColor,
  checkboxLabelMargin,
  checkboxDisabledLabelColor
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { disabled, labelPosition } = this.data;
  const style: Partial<CSSStyleDeclaration> = {
    lineHeight: checkboxSize,
    color: disabled ? checkboxDisabledLabelColor : checkboxLabelColor
  };

  if (labelPosition === 'left') {
    style.marginRight = checkboxLabelMargin;
    style.cssFloat = 'left';
  } else {
    style.marginLeft = checkboxLabelMargin;
  }

  return style;
}
