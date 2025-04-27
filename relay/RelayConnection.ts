import { FragmentRefs } from 'relay-runtime';

export type RelayCon<> =
    | {
          readonly edges:
              | ReadonlyArray<
                    | {
                          readonly node:
                              | {
                                    readonly ' $fragmentSpreads': FragmentRefs<'BranchInfoRow_ref'>;
                                }
                              | null
                              | undefined;
                      }
                    | null
                    | undefined
                >
              | null
              | undefined;
      }
    | undefined
    | null;
