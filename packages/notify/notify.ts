import { WHITE } from '../common/color';

interface NotifyOptions {
  type?: 'primary' | 'success' | 'danger' | 'warning';
  color?: string;
  zIndex?: number;
  message: string;
  context?: any;
  duration?: number;
  selector?: string;
  background?: string;
  safeAreaInsetTop?: boolean;
  onClick?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
}

const defaultOptions = {
  selector: '#van-notify',
  type: 'danger',
  message: '',
  background: '',
  duration: 3000,
  zIndex: 110,
  color: WHITE,
  onClick: () => {},
  onOpened: () => {},
  onClose: () => {}
};

function parseOptions(message: NotifyOptions | string): NotifyOptions {
  return typeof message === 'string' ? { message } : message;
}

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

export default function Notify(options: NotifyOptions | string) {
  options = Object.assign({}, defaultOptions, parseOptions(options));

  const context = options.context || getContext();
  const notify = context.selectComponent(options.selector);

  delete options.context;
  delete options.selector;

  if (notify) {
    notify.set(options);
    notify.show();
  } else {
    console.warn('未找到 van-notify 节点，请确认 selector 及 context 是否正确');
  }
}
