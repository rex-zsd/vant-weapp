import { Weapp } from './weapp';

type RecordToAny<T> = { [K in keyof T]: any };

export type CombinedComponentInstance<Data, Props, Methods> = Methods &
  WechatMiniprogram.Component.TrivialInstance &
  Weapp.FormField & {
    data: Data & RecordToAny<Props>;
    updateStyles: () => void;
  };

export interface VantComponentOptions<Data, Props, Methods, Instance> {
  data?: Data;
  field?: boolean;
  classes?: string[];
  mixins?: string[];
  props?: Props & Weapp.PropertyOption<Instance>;
  watch?: Weapp.WatchOption<Instance>;
  relation?: Weapp.RelationOption<Instance> & { name: string };
  relations?: {
    [componentName: string]: Weapp.RelationOption<Instance>;
  };
  methods?: Methods & Weapp.MethodOption<Instance>;

  styles?: Weapp.Styles;

  // lifetimes
  beforeCreate?: (this: Instance) => void;
  created?: (this: Instance) => void;
  mounted?: (this: Instance) => void;
  destroyed?: (this: Instance) => void;
}

export type VantComponentTrivialOptions = VantComponentOptions<
  any,
  any,
  any,
  any
>;
