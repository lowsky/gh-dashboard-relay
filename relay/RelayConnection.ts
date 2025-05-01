export type RelayCon<NodeType> =
    | {
          readonly edges:
              | ReadonlyArray<
                    | {
                          readonly node: NodeType | null | undefined;
                      }
                    | null
                    | undefined
                >
              | null
              | undefined;
      }
    | undefined
    | null;
