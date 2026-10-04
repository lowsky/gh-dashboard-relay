import React, { forwardRef, ReactNode } from 'react';
import { Breadcrumb, Center, type SystemStyleObject } from '@chakra-ui/react';
import { LuHouse } from 'react-icons/lu';
import InternalLink from 'components/InternalLink';

export type NavItems = { label: string; href?: string }[];

export interface BreadcrumbRootProps extends Breadcrumb.RootProps {
    separator?: ReactNode;
    separatorGap?: SystemStyleObject['gap'];
    items?: NavItems;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbRootProps>(function Breadcrumbs(props, ref) {
    const { separator, separatorGap, items, ...rest } = props;

    const hasItems = items && items.length > 0;

    return (
        <Breadcrumb.Root
            ref={ref}
            size="lg"
            variant="underline"
            mb={3}
            display={{ base: 'flex', md: 'none' }}
            {...rest}>
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
                                    {
                                        // @ts-expect-error no prefetch available but required on InternalLink
                                        <Breadcrumb.Link prefetch={false} href={item.href} as={InternalLink}>
                                            {item.label}
                                        </Breadcrumb.Link>
                                    }{' '}
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
