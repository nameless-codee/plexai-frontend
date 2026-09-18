# Commit message conventions

#### Good

```
fix: correct login validation
feat: add user registration
docs: update API documentation
```

---

#### Avoid

```
fixed login validation
added user registration
updated API documentation
```

---

| Type | Description |
| --- | --- |
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

---

#### Examples

```
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

### 1. Use an Optional Scope

A scope identifies the specific module, component, or area affected by the commit.

Use:

```
type(scope): short description
```

The scope should be short and consistent across the project.

---

#### Examples

```
feat(auth): add OAuth login
fix(api): handle null response
ui(navbar): add responsive menu
refactor(events): simplify event service
test(user): add registration tests
docs(readme): update installation instructions
```

---

#### Common Scopes

Depending on the project, scopes may include:

```
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

Do not add a scope if it does not provide useful information. The following is perfectly valid when the affected area is already obvious:

```
feat: add event creation
```

---

### 2. Use the Imperative Mood

Write the commit as an instruction describing what the commit does.

---

#### Good

```
feat: add event filtering
fix: handle invalid credentials
docs: update installation guide
refactor: simplify booking service
```

---

#### Avoid

```
feat: added event filtering
fix: handled invalid credentials
docs: updated installation guide
refactor: simplified booking service
```

Think:

> If applied, this commit will **add** event filtering.
> 

Not:

> This commit **added** event filtering.
> 

---

### 3. Reference Issues When Applicable

If the commit is related to a GitHub issue, reference the issue number:

```
fix(auth): handle invalid token (#23)
feat(ui): add responsive menu (#42)
fix(events): prevent duplicate bookings (#51)
```

This makes it easier to connect commits with GitHub issues and track development work.

> Only include an issue reference when the commit is actually related to that issue.
> 

---

### 4. Avoid Unnecessary Punctuation

Do not end the commit header with a period.

---

#### Good

```
feat: add event creation form
fix: correct booking validation
docs: update README
```

---

#### Avoid

```
feat: add event creation form.
fix: correct booking validation.
docs: update README.
```

Keep the commit header simple and readable.

---

### 5. Describe the Change, Not the Process

Explain what changed rather than describing what you did while developing it.

---

#### Good

```
feat(auth): add vendor registration
fix(auth): prevent expired token access
refactor(events): extract event validation logic
```

---

#### Avoid

```
feat: worked on vendor page
fix: changed some authentication code
refactor: moved some code around
```

---

### 6. Keep Each Commit Focused

A commit should ideally represent one logical change.

---

#### Good

```
feat(auth): add password reset
```

Then create a separate commit for the UI changes:

```
ui(auth): improve password reset form
```

Avoid combining unrelated changes:

```
feat: add password reset, fix navbar, update database, change footer
```

Focused commits are easier to review, revert, and troubleshoot.