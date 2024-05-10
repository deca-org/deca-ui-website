export declare type Modify<T, R> = Omit<T, keyof R> & R;
export declare type ModifyDeep<A extends AnyObject, B extends DeepPartialAny<A>> = {
    [K in keyof A]: B[K] extends never ? A[K] : B[K] extends AnyObject ? ModifyDeep<A[K], B[K]> : B[K];
} & (A extends AnyObject ? Omit<B, keyof A> : A);
/** Makes each property optional and turns each leaf property into any, allowing for type overrides by narrowing any. */
export declare type DeepPartialAny<T> = {
    [P in keyof T]?: T[P] extends AnyObject ? DeepPartialAny<T[P]> : any;
};
export declare type AnyObject = Record<string, any>;
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
export declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
export declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
export declare type MasterComponent<T, P = Record<string, unknown>, V = Record<string, unknown>> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>> & V;
export declare type PolymorphicComponentProp<C extends React.ElementType, Props = Record<string, never>> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
export declare type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = Record<string, never>> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
