# Git Commit Message Conventions

A consistent commit message format makes the Git history easier to read, understand, review, and maintain.

## Commit Message Format

Use the following format:

```text
type(scope): short description
```

The `scope` is optional.

### Examples

```text
feat: add logout functionality
feat(auth): add OAuth login
fix(api): handle null response
ui(navbar): improve mobile menu layout
docs(readme): update installation instructions
```

---

## Good Practices for Commit Messages

### 1. Keep it short and meaningful

- Keep the commit header **concise and clear**.
- Prefer keeping the header within **72 characters**.
- Clearly describe **what the commit changes**.
- Avoid vague messages such as:
  - `update code`
  - `changes`
  - `fixed stuff`
  - `final version`
- Use **imperative mood**, as if giving an instruction.

#### Good

```text
fix: correct login validation
feat: add user registration
docs: update API documentation
```

#### Avoid

```text
fixed login validation
added user registration
updated API documentation
```

---

### 2. Use the correct commit type

The commit type describes the **purpose of the change**.

Always use one of the following types:

| Type | Description |
|---|---|
| `feat` | Add a new feature or functionality |
| `fix` | Fix a bug or incorrect behavior |
| `docs` | Documentation changes |
| `ui` | Frontend UI, styling, or visual changes |
| `refactor` | Code restructuring without changing behavior |
| `test` | Add or update tests |
| `chore` | Maintenance or miscellaneous project tasks |
| `perf` | Performance improvements |
| `wip` | Work in progress |
| `revert` | Revert a previous commit |

### Examples

```text
feat: add event creation form
fix: correct event date validation
docs: update project setup guide
ui: improve event card layout
refactor: simplify authentication service
test: add event validation tests
chore: update project dependencies
perf: optimize event search query
wip: implement vendor dashboard
revert: revert event validation changes
```

---

### 3. Use an optional scope

A scope identifies the **specific module, component, or area** affected by the commit.

Use:

```text
type(scope): short description
```

The scope should be short and consistent across the project.

### Examples

```text
feat(auth): add OAuth login
fix(api): handle null response
ui(navbar): add responsive menu
refactor(events): simplify event service
test(user): add registration tests
docs(readme): update installation instructions
```

### Common scopes

Depending on the project, scopes may include:

```text
auth
api
events
users
venue
vendor
inventory
schedule
promotion
feedback
navbar
dashboard
database
backend
frontend
```

Do not add a scope if it does not provide useful information.

```text
feat: add event creation
```

is perfectly valid when the affected area is already obvious.

---

### 4. Use imperative mood

Write the commit as an instruction describing what the commit **does**.

### Good

```text
feat: add event filtering
fix: handle invalid credentials
docs: update installation guide
refactor: simplify booking service
```

### Avoid

```text
feat: added event filtering
fix: handled invalid credentials
docs: updated installation guide
refactor: simplified booking service
```

Think:

> "If applied, this commit will **add** event filtering."

Not:

> "This commit **added** event filtering."

---

### 5. Reference issues when applicable

If the commit is related to a GitHub issue, reference the issue number.

```text
fix(auth): handle invalid token (#23)
feat(ui): add responsive menu (#42)
fix(events): prevent duplicate bookings (#51)
```

This makes it easier to connect commits with project issues and track development work.

> Only include an issue reference when the commit is actually related to that issue.

---

### 6. Avoid unnecessary punctuation

Do not end the commit header with a period.

### Good

```text
feat: add event creation form
fix: correct booking validation
docs: update README
```

### Avoid

```text
feat: add event creation form.
fix: correct booking validation.
docs: update README.
```

Keep the commit header simple and readable.

---

### 7. Describe the change, not the process

The commit message should explain **what changed**, rather than describing what you did while developing it.

### Good

```text
feat(auth): add vendor registration
fix(auth): prevent expired token access
refactor(events): extract event validation logic
```

### Avoid

```text
feat: worked on vendor page
fix: changed some authentication code
refactor: moved some code around
```

---

### 8. Make each commit focused

A commit should ideally represent **one logical change**.

### Good

```text
feat(auth): add password reset
```

Then another commit:

```text
ui(auth): improve password reset form
```

Avoid combining unrelated changes:

```text
feat: add password reset, fix navbar, update database, change footer
```

Focused commits are easier to review, revert, and troubleshoot.

---

## Commit Message Structure

For simple changes, use:

```text
type: description
```

For changes affecting a specific area, use:

```text
type(scope): description
```

For issue-related changes:

```text
type(scope): description (#issue-number)
```

### Examples

```text
feat: add event creation
feat(events): add event creation
feat(events): add event creation (#24)
```

---

## Examples of Good Commit Messages

```git
feat: add logout functionality
feat(auth): add OAuth login
feat(events): add event creation form

fix: correct login validation
fix(auth): handle invalid token errors (#23)
fix(api): handle null response
fix(booking): prevent duplicate reservations

ui: improve dashboard layout
ui(navbar): add responsive menu (#42)
ui(events): improve event card design

docs: update README
docs(readme): update installation instructions

refactor: simplify authentication logic
refactor(auth): simplify login validation logic
refactor(events): extract validation into service

test: add authentication tests
test(user): add login unit tests

chore: update dependencies
chore(database): update database configuration

perf: optimize event search
perf(api): reduce unnecessary database queries

wip: implement vendor dashboard

revert: revert event validation changes
```

---

## Bad Commit Messages

Avoid vague or unhelpful messages such as:

```text
update
changes
fixed
fix
new changes
final
final version
done
test
asdf
working
minor changes
updated code
```

These messages provide little information about what actually changed.

Instead of:

```text
update
```

Use:

```text
fix(events): correct event date validation
```

---

## Quick Reference

### Format

```text
type(scope): description
```

### Allowed Types

```text
feat
fix
docs
ui
refactor
test
chore
perf
wip
revert
```

### Rules

- Keep the header concise, preferably within **72 characters**
- Start with a valid **type**
- Use a **scope** when useful
- Use **imperative mood**
- Clearly describe the change
- Do not end the header with a period
- Reference an issue when applicable
- Keep commits focused on one logical change
- Avoid vague commit messages

### Recommended Examples

```text
feat(events): add event creation form
fix(auth): handle invalid credentials (#23)
ui(navbar): improve responsive navigation
docs(readme): update installation instructions
refactor(events): simplify event validation
test(auth): add login unit tests
chore: update project dependencies
perf(api): optimize event search
```

---

## Before Committing

Ask yourself:

- [ ] Does the message clearly describe the change?
- [ ] Did I use the correct commit type?
- [ ] Is the scope useful and accurate?
- [ ] Did I use imperative mood?
- [ ] Is the message concise?
- [ ] Did I avoid unnecessary punctuation?
- [ ] Did I reference the relevant issue?
- [ ] Is this commit focused on one logical change?

If all applicable checks pass, the commit message is ready.

---

## Team Recommendation

For a clean production Git history, treat `wip` as a temporary development commit type rather than a preferred final commit type.

Before merging a feature branch, consider squashing temporary `wip` commits into meaningful commits that follow the conventions above.
