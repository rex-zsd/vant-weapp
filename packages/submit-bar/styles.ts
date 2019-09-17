import { Weapp } from 'definitions/weapp';

export function root(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    zIndex: theme.submitBarZIndex
  };
}

export function tip(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    padding: theme.submitBarTipPadding,
    color: theme.submitBarTipColor,
    fontSize: theme.submitBarTipFontSize,
    lineHeight: theme.submitBarTipLineHeight,
    backgroundColor: theme.submitBarTipBackgroundColor
  };
}

export function bar(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    height: theme.submitBarHeight,
    fontSize: theme.submitBarTextFontSize,
    backgroundColor: theme.submitBarBackgroundColor
  };
}

export function text(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    color: theme.submitBarTextColor
  };
}

export function price(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    color: theme.submitBarPriceColor,
    fontSize: theme.submitBarPriceFontSize
  };
}

export function currency(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    fontSize: theme.submitBarCurrencyFontSize
  };
}

export function button(theme: Weapp.Theme): Partial<CSSStyleDeclaration> {
  return {
    width: theme.submitBarButtonWidth
  };
}
