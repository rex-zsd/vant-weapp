import { Weapp } from 'definitions/weapp';
import * as variable from '../common/style/var';

export function button({
  buttonDefaultColor,
  buttonDefaultBackgroundColor,
  buttonDefaultBorderColor,
  buttonPrimaryColor,
  buttonPrimaryBackgroundColor,
  buttonPrimaryBorderColor,
  buttonInfoColor,
  buttonInfoBackgroundColor,
  buttonInfoBorderColor,
  buttonDangerColor,
  buttonDangerBackgroundColor,
  buttonDangerBorderColor,
  buttonWarningColor,
  buttonWarningBackgroundColor,
  buttonWarningBorderColor,
  buttonRoundBorderRadius,
  buttonBorderRadius,
  white
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { type, plain, round, hairline } = this.data;
  const style: Partial<CSSStyleDeclaration> = {};

  if (hairline) {
    style.borderRadius = round
      ? variable.buttonRoundBorderRadius
      : variable.buttonBorderRadius;
  } else {
    style.borderRadius = round ? buttonRoundBorderRadius : buttonBorderRadius;
  }

  if (plain) {
    style.backgroundColor = white;
    switch (type) {
      case 'default':
        style.color = buttonDefaultBackgroundColor;
        break;
      case 'primary':
        style.color = buttonPrimaryBackgroundColor;
        break;
      case 'info':
        style.color = buttonInfoBackgroundColor;
        break;
      case 'danger':
        style.color = buttonDangerBackgroundColor;
        break;
      case 'warning':
        style.color = buttonWarningBackgroundColor;
        break;
      default:
        break;
    }
  } else {
    switch (type) {
      case 'default':
        style.color = buttonDefaultColor;
        style.backgroundColor = buttonDefaultBackgroundColor;
        style.borderColor = buttonDefaultBorderColor;
        break;
      case 'primary':
        style.color = buttonPrimaryColor;
        style.backgroundColor = buttonPrimaryBackgroundColor;
        style.borderColor = buttonPrimaryBorderColor;
        break;
      case 'info':
        style.color = buttonInfoColor;
        style.backgroundColor = buttonInfoBackgroundColor;
        style.borderColor = buttonInfoBorderColor;
        break;
      case 'danger':
        style.color = buttonDangerColor;
        style.backgroundColor = buttonDangerBackgroundColor;
        style.borderColor = buttonDangerBorderColor;
        break;
      case 'warning':
        style.color = buttonWarningColor;
        style.backgroundColor = buttonWarningBackgroundColor;
        style.borderColor = buttonWarningBorderColor;
        break;
      default:
        break;
    }
  }

  return style;
}
