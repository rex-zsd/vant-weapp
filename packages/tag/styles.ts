import { Weapp } from '../definitions/weapp';

export function root({
  tagDefaultColor,
  tagDanderColor,
  tagPrimaryColor,
  tagSuccessColor,
  tagWarningColor,
  tagPlainBackgroundColor,
  white
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { type, plain } = this.data;

  const style: Partial<CSSStyleDeclaration> = {};

  if (plain) {
    style.backgroundColor = tagPlainBackgroundColor;

    switch (type) {
      case 'default':
        style.color = tagDefaultColor;
        break;
      case 'danger':
        style.color = tagDanderColor;
        break;
      case 'primary':
        style.color = tagPrimaryColor;
        break;
      case 'success':
        style.color = tagSuccessColor;
        break;
      case 'warning':
        style.color = tagWarningColor;
        break;
      default:
        break;
    }
  } else {
    style.color = white;

    switch (type) {
      case 'default':
        style.backgroundColor = tagDefaultColor;
        break;
      case 'danger':
        style.backgroundColor = tagDanderColor;
        break;
      case 'primary':
        style.backgroundColor = tagPrimaryColor;
        break;
      case 'success':
        style.backgroundColor = tagSuccessColor;
        break;
      case 'warning':
        style.backgroundColor = tagWarningColor;
        break;
      default:
        break;
    }
  }

  return style;
}
