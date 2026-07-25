# CommitWithStatuses Component - Design Improvement

## Current Issue

The original component mixed two interaction patterns:
1. **Popover** (click) → shows author info in a popover
2. **Link with native title** → hover shows ugly tooltip, click navigates

This created UX confusion about what happens on hover vs click.

---

## Solution: Inline Card Layout with Statuses in Author Row

**Concept**: Show all info inline without popovers. CommitStatuses are displayed horizontally after the author and date for a compact, scannable layout.

### Visual Design
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ● Commit message text here...                                          │
│   by [Avatar] username · 2 hours ago · [●][●][●] [↗]                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Layout Structure
- **Commit message** - Clickable link to commit
- **Author row** (horizontal):
  - Avatar + username
  - Separator (·)
  - Timestamp
  - Separator (·) + CommitStatuses (if present)
  - External link icon

### Implementation

**CommitWithStatusesInline.tsx**:
```tsx
const CommitWithStatusesInline: FC<CommitWithStatusesInlineProps> = (props) => {
    const { author, commitUrl, authoredDate, message, status } = props;
    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;
    const formattedDate = new Date(authoredDate).toLocaleDateString();

    return (
        <div className={styles.inlineLayout}>
            <div className={styles.mainContent}>
                <Link href={commitUrl} className={styles.commitMessage}>
                    {firstLineOfMessage}
                </Link>

                <div className={styles.authorMetaRow}>
                    {authorUser && (
                        <div className={styles.authorMeta}>
                            <Avatar size="2xs" name={authorUser.name ?? authorUser.login} 
                                     src={authorUser.avatarUrl} />
                            <span className={styles.authorName}>
                                {authorUser.name ?? authorUser.login}
                            </span>
                            <span className={styles.separator}>·</span>
                            <span className={styles.timestamp}>{formattedDate}</span>
                        </div>
                    )}

                    {status && status.contexts?.length > 0 && (
                        <>
                            <span className={styles.separator}>·</span>
                            <CommitStatuses contexts={status.contexts} />
                        </>
                    )}

                    <Link href={commitUrl} className={styles.viewLink} 
                          aria-label="View commit on GitHub">
                        <FaArrowUpRightFromSquare />
                    </Link>
                </div>
            </div>
        </div>
    );
};
```

**CSS Classes**:
```css
.authorMetaRow {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.authorMeta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
}

.separator {
    opacity: 0.5;
}
```

### Pros
- ✅ Most transparent - no hidden interactions
- ✅ All info visible inline (best accessibility)
- ✅ CommitStatuses displayed horizontally after author/date
- ✅ Status icons have proper tooltips
- ✅ Compact but informative

### Cons
- ❌ Takes more horizontal space with many statuses
- ❌ May need wrapping on narrow screens
