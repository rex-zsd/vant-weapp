import { Weapp } from '../definitions/weapp';

export function root({
  toastTextMinWidth,
  toastTextPadding,
  toastDefaultWidth,
  toastDefaultMinHeight,
  toastDefaultPadding,
  toastTextColor,
  toastFontSize,
  toastLineHeight,
  toastBackgroundColor,
  toastBorderRadius
}: Weapp.Theme): Partial<CSSStyleDeclaration> {
  const { type } = this.data;
  const style: Partial<CSSStyleDeclaration> = {
    color: toastTextColor,
    fontSize: toastFontSize,
    lineHeight: toastLineHeight,
    backgroundColor: toastBackgroundColor,
    borderRadius: toastBorderRadius
  };

  if (type === 'text') {
    style.minWidth = toastTextMinWidth;
    style.padding = toastTextPadding;
  } else {
    style.width = toastDefaultWidth;
    style.minHeight = toastDefaultMinHeight;
    style.padding = toastDefaultPadding;
  }

  return style;
}

export function container(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    maxWidth: theme.toastMaxWidth
  };
}

export function icon(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    fontSize: theme.toastIconSize
  };
}
