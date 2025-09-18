/** copied from
 * https://github.com/iamchanii/storybook-addon-relay/blob/main/src/decorators/types.ts
 */

import { MockPayloadGenerator } from 'relay-test-utils';
import { PartialDeep } from 'type-fest';

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type ResolverReturnType<T> = T extends { resolve: infer U }
    ? ResolverReturnType<U>
    : T extends (...args: any[]) => infer U
      ? U
      : never;

type InferMockResolverFieldReturnType<T> = {
    [K in keyof T]: ResolverReturnType<T[K]> extends infer FieldResolverReturnType
        ? FieldResolverReturnType extends Primitive
            ? FieldResolverReturnType
            : //fails with type-fest@npm:0.21.3
              // works with type-fest@npm:2.19.0
              PartialDeep<FieldResolverReturnType, { recurseIntoArrays: true }>
        : never;
};

export type InferMockResolvers<T> = T extends object
    ? T extends infer U
        ? U extends (...args: any[]) => any
            ? never
            : U extends object
              ? {
                    [K in keyof U]?: (
                        context: MockPayloadGenerator.MockResolverContext,
                        generateId: () => string
                    ) => InferMockResolverFieldReturnType<U[K]>;
                }
              : never
        : never
    : never;
