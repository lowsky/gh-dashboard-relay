# CommitWithStatuses Component - Design Improvement Proposals

## Current Issues

The component mixes two interaction patterns:
1. **Popover** (click) → shows author info in a popover
2. **Link with native title** → hover shows ugly tooltip, click navigates

This creates UX confusion about what happens on hover vs click.

---

## Option 1: Unified Hover Card Pattern

**Concept**: Use consistent hover-only tooltips everywhere. Click the commit message (or a dedicated icon) to navigate.

### Visual Design
```
┌─────────────────────────────────────────────────────────────────┐
│ ● Commit message text here...                          [↗] [●][●][●] │
│   ↑ Hover: tooltip with author info, date, avatar               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Code Changes

**CommitWithStatuses.tsx**:
```tsx
import { Tooltip, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/react';
import { CommitterInfo } from './CommitterInfo';

const CommitWithStatuses: FC<CommitWithStatusesProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;
    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;

    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Tooltip 
                content={
                    <div className={styles.tooltip}>
                        <div style={{ fontSize: '12px', opacity: 0.8 }}>
                            {new Date(authoredDate).toLocaleString()}
                        </div>
                        {authorUser && <CommitterInfo author={authorUser} />}
                    </div>
                }
                positioning={{ placement: 'bottom' }}
            >
                <Link 
                    href={commitUrl} 
                    rel="noopener noreferrer nofollow"
                    _hover={{ textDecoration: 'underline' }}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>
            </Tooltip>
            
            <Link 
                href={commitUrl} 
                rel="noopener noreferrer nofollow"
                aria-label="View commit on GitHub"
            >
                <ExternalLinkIcon />
            </Link>
            
            {status && <CommitStatuses contexts={status.contexts} />}
        </span>
    );
};
```

**Status.tsx**:
```tsx
import { Tooltip, Avatar } from '@chakra-ui/react';

// Status becomes visual-only indicator with tooltip
export const Status = ({ targetUrl, avatarUrl, context, description, state }: ContextStatusProps) => (
    <Tooltip 
        content={context + ': ' + description}
        positioning={{ placement: 'top' }}
    >
        <span 
            style={{ cursor: targetUrl ? 'pointer' : 'default' }}
            onClick={() => targetUrl && window.open(targetUrl, '_blank')}
        >
            <Avatar size="2xs" name={context ?? ''} src={avatarUrl ?? undefined}>
                <Float placement="top-end" offsetX="1" offsetY="1">
                    <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
                </Float>
            </Avatar>
        </span>
    </Tooltip>
);
```

### Pros
- ✅ Consistent hover behavior everywhere
- ✅ Native Chakra UI tooltips (beautiful, accessible)
- ✅ Clear click-to-navigate affordance

### Cons
- ❌ Tooltip can't show complex rich content easily
- ❌ No author avatar in tooltip (only text)

---

## Option 2: Rich Popover with All Info

**Concept**: Single hover popover containing all commit info. Status icons are visual indicators only.

### Visual Design
```
┌─────────────────────────────────────────────────────────────────┐
│ ● Commit message text here...                                  │
│   └─ Hover/Focus → Popover appears                             │
│                                                                 │
│  ┌──────────────────────────────────────────┐                  │
│  │ ● Commit Message Title                   │                  │
│  │                                          │                  │
│  │ [Avatar] username • 2 hours ago          │                  │
│  │                                          │                  │
│  │ Status: ✅ CI Passed  •  🔄 Deploying   │                  │
│  │                                          │                  │
│  │                        [View on GitHub →]│                  │
│  └──────────────────────────────────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

### Code Changes

**CommitWithStatuses.tsx**:
```tsx
import { 
    PopoverArrow, PopoverBody, PopoverContent, 
    PopoverRoot, PopoverTrigger, PopoverHeader 
} from '../ui/popover';
import { Button, Link } from '@chakra-ui/react';
import { ArrowRightIcon } from 'react-icons/fa';

const CommitWithStatuses: FC<CommitWithStatusesProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;
    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;

    return (
        <PopoverRoot>
            <PopoverTrigger asChild>
                <Link 
                    href={commitUrl} 
                    rel="noopener noreferrer nofollow"
                    _hover={{ textDecoration: 'underline' }}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>
            </PopoverTrigger>
            <PopoverContent maxW="320px">
                <PopoverArrow />
                <PopoverHeader fontWeight="semibold">
                    {firstLineOfMessage}
                </PopoverHeader>
                <PopoverBody>
                    <div className={styles.popoverContent}>
                        {authorUser && (
                            <div className={styles.authorRow}>
                                <Avatar size="sm" name={authorUser.name ?? authorUser.login} 
                                         src={authorUser.avatarUrl} />
                                <div>
                                    <div>{authorUser.name ?? authorUser.login}</div>
                                    <div style={{ fontSize: '12px', opacity: 0.7 }}>
                                        {new Date(authoredDate).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {status?.contexts && (
                            <div className={styles.statusSummary}>
                                {removeExtraStatusesForSameContext(status.contexts).map((s, i) => (
                                    <span key={i} className={styles.statusBadge} 
                                          style={{ background: status2color(s.state) + '20' }}>
                                        {s.state === 'SUCCESS' ? '✅' : s.state === 'FAILURE' ? '❌' : '⏳'} 
                                        {s.context}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        <Button 
                            as={Link} 
                            href={commitUrl} 
                            size="sm" 
                            variant="surface"
                            mt={3}
                            _hover={{ textDecoration: 'none' }}
                        >
                            View on GitHub <ArrowRightIcon ml={2} />
                        </Button>
                    </div>
                </PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    );
};
```

**CommitWithStatuses.module.css**:
```css
.popoverContent {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.authorRow {
    display: flex;
    align-items: center;
    gap: 12px;
}

.statusSummary {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
    border-top: 1px solid var(--chakra-colors-border);
}

.statusBadge {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
}
```

**Status.tsx** - Simplified to visual-only:
```tsx
// Status icons become purely visual indicators
// The popover already shows all status info
export const Status = ({ avatarUrl, context, state }: ContextStatusProps) => (
    <Avatar size="2xs" name={context ?? ''} src={avatarUrl ?? undefined}>
        <Float placement="top-end" offsetX="1" offsetY="1">
            <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
        </Float>
    </Avatar>
);
```

### Pros
- ✅ All info in one place
- ✅ Rich content (avatars, formatted status)
- ✅ Single click interaction pattern
- ✅ Status icons uncluttered (just visual indicators)

### Cons
- ❌ Popover requires click/focus (not just hover) - may be less discoverable
- ❌ More complex component

---

## Option 3: Card-Based Inline Layout

**Concept**: Show author info inline without any popovers. Status icons with tooltips. Clear "view" action.

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ● Commit message text here...                     [View ↗]              │
│   by [Avatar] username • 2 hours ago               ● ● ●               │
└─────────────────────────────────────────────────────────────────────────┘
```

### Code Changes

**CommitWithStatuses.tsx**:
```tsx
import { Link } from '@chakra-ui/react';
import { ArrowUpRightIcon } from 'react-icons/fa';
import { Avatar } from '../ui/avatar';

const CommitWithStatuses: FC<CommitWithStatusesProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;
    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;

    return (
        <div className={styles.commitRow}>
            <div className={styles.mainContent}>
                <Link 
                    href={commitUrl} 
                    rel="noopener noreferrer nofollow"
                    className={styles.commitMessage}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>
                
                {authorUser && (
                    <div className={styles.authorMeta}>
                        <Avatar size="xs" name={authorUser.name ?? authorUser.login} 
                                 src={authorUser.avatarUrl} />
                        <span>{authorUser.name ?? authorUser.login}</span>
                        <span className={styles.separator}>·</span>
                        <span className={styles.timestamp}>
                            {new Date(authoredDate).toLocaleDateString()}
                        </span>
                    </div>
                )}
            </div>
            
            <div className={styles.rightSection}>
                {status && <CommitStatuses contexts={status.contexts} />}
                <Link 
                    href={commitUrl} 
                    rel="noopener noreferrer nofollow"
                    className={styles.viewLink}
                    aria-label="View commit"
                >
                    <ArrowUpRightIcon />
                </Link>
            </div>
        </div>
    );
};
```

**CommitWithStatuses.module.css**:
```css
.commitRow {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}

.mainContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.commitMessage {
    color: inherit;
    text-decoration: none;
}

.commitMessage:hover {
    text-decoration: underline;
}

.authorMeta {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--chakra-colors-muted);
}

.separator {
    opacity: 0.5;
}

.timestamp {
    opacity: 0.7;
}

.rightSection {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}

.viewLink {
    padding: 4px;
    opacity: 0.5;
    transition: opacity 0.2s;
}

.viewLink:hover {
    opacity: 1;
}
```

**Status.tsx** - With proper tooltip:
```tsx
import { Tooltip } from '@chakra-ui/react';

export const Status = ({ targetUrl, avatarUrl, context, description, state }: ContextStatusProps) => (
    <Tooltip 
        content={
            <div>
                <div fontWeight="semibold">{context}</div>
                <div opacity={0.8}>{description}</div>
            </div>
        }
        positioning={{ placement: 'top' }}
    >
        <Link 
            href={targetUrl ?? undefined} 
            rel="noopener noreferrer nofollow"
            opacity={0.8}
            _hover={{ opacity: 1 }}
        >
            <Avatar size="2xs" name={context ?? ''} src={avatarUrl ?? undefined}>
                <Float placement="top-end" offsetX="1" offsetY="1">
                    <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
                </Float>
            </Avatar>
        </Link>
    </Tooltip>
);
```

### Pros
- ✅ Most transparent - no hidden interactions
- ✅ Author info always visible (better for accessibility)
- ✅ Status icons have proper tooltips
- ✅ Clear action affordance

### Cons
- ❌ Takes more vertical space
- ❌ May be too verbose for compact tables

---

## Recommendation

**For a dashboard with many rows**, I recommend **Option 1** (Unified Hover Card) for its:
- Consistency (same interaction everywhere)
- Compactness (good for tables)
- Clear affordance (external link icon)

**For a detail view or if you want richer info**, **Option 2** (Rich Popover) provides the best UX.

**Option 3** works best if accessibility is the top priority since it shows all info inline.
