## Issue 1 — Improve validation error specificity

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [x] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Add specific validation errors for invalid contribution amount, invalid cycle duration, and max members exceeded.

## Background

Current errors are generic, which slows debugging and makes issues harder for contributors to diagnose.

## Acceptance Criteria

- [ ] Add specific error variants for invalid contribution, invalid cycle duration, and max members exceeded.
- [ ] Update validation checks to use the new error variants.
- [ ] Add tests verifying each error variant.

## Technical Details

### Files to Modify

- [contracts/ajo/src/errors.rs](contracts/ajo/src/errors.rs)
- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Add new error variants in `errors.rs`, replace existing generic errors in validation paths, and extend tests to assert the specific error cases.

### Related Code

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Errors](https://soroban.stellar.org/docs/learn/errors)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 100  
**Estimated Time**: 2-3 hours  
**Suitable For**: first-time contributor

---

## Issue 2 — Add edge case tests for contribution flow

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [x] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [x] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Add missing edge case tests for the contribution flow.

## Background

Edge cases around duplicate contributions, post-completion contributions, and zero contributions are not fully covered.

## Acceptance Criteria

- [ ] Add tests for duplicate contributions in the same cycle.
- [ ] Add tests for contribution after group completion.
- [ ] Add tests for zero or negative contributions.

## Technical Details

### Files to Modify

- [contracts/ajo/tests/ajo_flow.rs](contracts/ajo/tests/ajo_flow.rs)
- [contracts/ajo/tests/mod.rs](contracts/ajo/tests/mod.rs)

### Suggested Approach

Identify missing scenarios in `ajo_flow.rs` and add targeted tests for each edge case, using existing helpers.

### Related Code

- [contracts/ajo/tests/ajo_flow.rs](contracts/ajo/tests/ajo_flow.rs)

## Testing Requirements

- [x] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Testing Guide](https://soroban.stellar.org/docs/learn/testing)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 100  
**Estimated Time**: 2-4 hours  
**Suitable For**: first-time contributor

---

## Issue 3 — Document core contract functions

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [x] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [x] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Add Rust doc comments for all public contract functions.

## Background

Public APIs are not fully documented, which makes onboarding and review harder.

## Acceptance Criteria

- [ ] Add `///` doc comments for all public functions.
- [ ] Include `# Arguments`, `# Returns`, and `# Errors` sections.
- [ ] Ensure docs build with `cargo doc`.

## Technical Details

### Files to Modify

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/src/storage.rs](contracts/ajo/src/storage.rs)
- [contracts/ajo/src/utils.rs](contracts/ajo/src/utils.rs)

### Suggested Approach

Add Rustdoc comments and keep them consistent with existing patterns in the codebase.

### Related Code

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Rustdoc Guide](https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 100  
**Estimated Time**: 2-3 hours  
**Suitable For**: first-time contributor

---

## Issue 4 — Add deployment instructions to README

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [x] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [x] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Add a full testnet deployment walkthrough to the README.

## Background

README lacks a step-by-step deployment guide and troubleshooting tips.

## Acceptance Criteria

- [ ] Add a Testnet Deployment section with step-by-step commands.
- [ ] Reference the deployment script.
- [ ] Add troubleshooting notes.

## Technical Details

### Files to Modify

- [README.md](README.md)
- [demo/demo-script.md](demo/demo-script.md)

### Suggested Approach

Align README steps with the workflow in the demo script and deployment script.

### Related Code

- [scripts/deploy_testnet.sh](scripts/deploy_testnet.sh)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Stellar CLI Docs](https://developers.stellar.org/docs/tools/cli)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 100  
**Estimated Time**: 2-3 hours  
**Suitable For**: first-time contributor

---

## Issue 5 — Implement group status helper

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [x] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [x] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Provide a single contract call to get comprehensive group status.

## Background

Clients currently need multiple reads to compute state, which is error-prone.

## Acceptance Criteria

- [ ] Add `get_group_status(group_id)` function.
- [ ] Return current cycle, next recipient, and contributions pending.
- [ ] Add tests for multiple group states.

## Technical Details

### Files to Modify

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/src/types.rs](contracts/ajo/src/types.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Introduce a `GroupStatus` struct in types and build the response from storage helpers.

### Related Code

- [contracts/ajo/src/storage.rs](contracts/ajo/src/storage.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [docs/architecture.md](docs/architecture.md)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 150  
**Estimated Time**: 4-6 hours  
**Suitable For**: intermediate

---

## Issue 6 — Enforce contribution timing window

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [x] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [x] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Reject contributions outside the active cycle window.

## Background

The contract currently accepts contributions without verifying cycle timing.

## Acceptance Criteria

- [ ] Add helper to compute cycle start/end.
- [ ] Reject contributions outside the active cycle.
- [ ] Add tests for early/late contributions.

## Technical Details

### Files to Modify

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/src/utils.rs](contracts/ajo/src/utils.rs)
- [contracts/ajo/src/errors.rs](contracts/ajo/src/errors.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Compute cycle windows using ledger timestamp and group cycle duration, then validate in `contribute`.

### Related Code

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Ledger Data](https://soroban.stellar.org/docs/learn/ledger-data)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 150  
**Estimated Time**: 5-7 hours  
**Suitable For**: intermediate

---

## Issue 7 — Add group cancellation by creator

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [x] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [x] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Allow the group creator to cancel a group before completion, with refunds.

## Background

Creators need a way to cancel stalled groups and return funds to members.

## Acceptance Criteria

- [ ] Add `cancel_group(group_id)` restricted to creator.
- [ ] Refund all contributions to members.
- [ ] Emit a `GroupCancelled` event.
- [ ] Add tests for cancellation and refund flow.

## Technical Details

### Files to Modify

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/src/events.rs](contracts/ajo/src/events.rs)
- [contracts/ajo/src/errors.rs](contracts/ajo/src/errors.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Add authorization checks, iterate members for refunds, emit event, then clear group state.

### Related Code

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Authorization](https://soroban.stellar.org/docs/learn/authorization)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 150  
**Estimated Time**: 6-8 hours  
**Suitable For**: intermediate

---

## Issue 8 — Emit events for all state changes

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [x] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [x] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Ensure all state changes emit events with consistent payloads.

## Background

Some state-changing operations currently do not emit events, reducing traceability.

## Acceptance Criteria

- [ ] Add events for all state-mutating functions.
- [ ] Ensure event payloads include group_id, member, and amount where applicable.
- [ ] Add tests verifying event emission.

## Technical Details

### Files to Modify

- [contracts/ajo/src/events.rs](contracts/ajo/src/events.rs)
- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Define consistent event schemas and emit them in each state-mutating function.

### Related Code

- [contracts/ajo/src/events.rs](contracts/ajo/src/events.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Events](https://soroban.stellar.org/docs/learn/events)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 150  
**Estimated Time**: 5-6 hours  
**Suitable For**: intermediate

---

## Issue 9 — Add integration test suite

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [x] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [x] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [ ] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Create integration tests that cover the full group lifecycle.

## Background

There is no end-to-end test covering create → join → contribute → payout → complete.

## Acceptance Criteria

- [ ] Add integration tests covering create → join → contribute → payout → complete.
- [ ] Add scenario with multiple groups.
- [ ] Add failure scenario tests.

## Technical Details

### Files to Modify

- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Create a new integration test module and reuse existing helper functions.

### Related Code

- [contracts/ajo/tests/ajo_flow.rs](contracts/ajo/tests/ajo_flow.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [x] Integration tests pass
- [ ] Manual testing completed

## Resources

- [Soroban Testing Guide](https://soroban.stellar.org/docs/learn/testing)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 150  
**Estimated Time**: 6-8 hours  
**Suitable For**: intermediate

---

## Issue 10 — Store optional group metadata

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [x] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [x] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Add optional metadata for groups (name, description, rules).

## Background

Groups currently have no user-facing metadata, which limits UI and discovery.

## Acceptance Criteria

- [ ] Define `GroupMetadata` struct with size limits.
- [ ] Add storage for metadata.
- [ ] Add `set_group_metadata` and `get_group_metadata` functions.
- [ ] Add tests for metadata storage.

## Technical Details

### Files to Modify

- [contracts/ajo/src/types.rs](contracts/ajo/src/types.rs)
- [contracts/ajo/src/storage.rs](contracts/ajo/src/storage.rs)
- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Introduce a metadata struct and persist it with a dedicated storage key.

### Related Code

- [contracts/ajo/src/storage.rs](contracts/ajo/src/storage.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [docs/storage-layout.md](docs/storage-layout.md)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 200  
**Estimated Time**: 8-10 hours  
**Suitable For**: advanced

---

## Issue 11 — Add emergency withdrawal mechanism

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [x] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [x] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Implement emergency withdrawals for members under defined conditions.

## Background

Members need a safe exit mechanism if a group stalls or circumstances change.

## Acceptance Criteria

- [ ] Implement `emergency_withdraw` with eligibility rules.
- [ ] Apply penalty and refund logic.
- [ ] Prevent withdrawal after payout.
- [ ] Add tests for withdrawal scenarios.

## Technical Details

### Files to Modify

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)
- [contracts/ajo/src/utils.rs](contracts/ajo/src/utils.rs)
- [contracts/ajo/src/events.rs](contracts/ajo/src/events.rs)
- [contracts/ajo/src/errors.rs](contracts/ajo/src/errors.rs)
- [contracts/ajo/tests/](contracts/ajo/tests/)

### Suggested Approach

Define eligibility based on missed cycles, calculate refunds with penalties, and update membership state.

### Related Code

- [contracts/ajo/src/contract.rs](contracts/ajo/src/contract.rs)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [docs/threat-model.md](docs/threat-model.md)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 200  
**Estimated Time**: 10-12 hours  
**Suitable For**: advanced

---

## Issue 12 — Frontend architecture plan

## Issue Type
<!-- Select one -->
- [ ] Bug fix
- [x] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Refactoring
- [ ] Testing

## Complexity
<!-- Select one - this determines Wave points -->
- [ ] **Trivial** (100 pts) - 1-2 hours, clear scope, well-defined
- [ ] **Medium** (150 pts) - 3-6 hours, moderate complexity
- [x] **High** (200 pts) - 1-2 days, significant changes or new feature

## Description

Define the frontend architecture and implementation plan.

## Background

The frontend is not yet implemented and needs a clear architecture to guide development.

## Acceptance Criteria

- [ ] Provide frontend architecture documentation.
- [ ] Define tech stack, wallet integration, and state management strategy.
- [ ] Provide UI flow for core screens.

## Technical Details

### Files to Modify

- [frontend/README.md](frontend/README.md)
- [frontend/ARCHITECTURE.md](frontend/ARCHITECTURE.md)
- [frontend/ROADMAP.md](frontend/ROADMAP.md)

### Suggested Approach

Capture user flows, component structure, and data fetching patterns, then outline a phased roadmap.

### Related Code

- [frontend/README.md](frontend/README.md)

## Testing Requirements

- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Resources

- [frontend/README.md](frontend/README.md)

## For Contributors

### Prerequisites

- Familiarity with Rust
- Understanding of Soroban contracts
- Read [docs/architecture.md](docs/architecture.md)

### Getting Started

1. Comment "I'd like to work on this!" to be assigned
2. Read the [Contributing Guide](CONTRIBUTING.md)
3. Fork the repo and create a branch
4. Make your changes following the acceptance criteria
5. Submit a PR referencing this issue

### Questions?

Ask in the comments or join our community chat

---

**Wave Points**: 200  
**Estimated Time**: 12-15 hours  
**Suitable For**: advanced
