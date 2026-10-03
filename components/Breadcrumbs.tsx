import React from 'react';
import { Breadcrumb, Center, type SystemStyleObject } from '@chakra-ui/react';
import { LuHouse } from 'react-icons/lu';

export interface BreadcrumbRootProps extends Breadcrumb.RootProps {
    separator?: React.ReactNode;
    separatorGap?: SystemStyleObject['gap'];
    items?: [{ label: string; href: string }];
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbRootProps>(function Breadcrumbs(props, ref) {
    const { separator, separatorGap, items, ...rest } = props;

    const hasItems = items && items.length > 0;

    return (
        <Breadcrumb.Root ref={ref} size="lg" variant="underline" {...rest} mb={3}>
            <Breadcrumb.List gap={separatorGap}>
                <Breadcrumb.Item>
                    {hasItems ? (
                        <Breadcrumb.Link href="/">
                            <LuHouse />
                            Home
                        </Breadcrumb.Link>
                    ) : (
                        <Breadcrumb.CurrentLink>
                            <Center gap={1}>
                                <LuHouse />
                                Home
                            </Center>
                        </Breadcrumb.CurrentLink>
                    )}
                </Breadcrumb.Item>
                {items?.map((item, index) => {
                    const last = index === items.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <Breadcrumb.Separator>{separator}</Breadcrumb.Separator>
                            {!last && (
                                <Breadcrumb.Item>
                                    <Breadcrumb.Link>{item.href}</Breadcrumb.Link>
                                </Breadcrumb.Item>
                            )}
                            {last && <Breadcrumb.CurrentLink>{item.label}</Breadcrumb.CurrentLink>}
                        </React.Fragment>
                    );
                })}
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
});
export default Breadcrumbs;
