# Specification

## Summary
**Goal:** Add a new catalog product entry for “VIVO X300 PRO” with price “54999” to the local products dataset.

**Planned changes:**
- Add a new `Product` item to `frontend/src/data/products.ts` with `name: 'VIVO X300 PRO'`, `price: '54999'`, and a unique numeric `id`.
- Ensure the new item appears in the Products catalog and participates in existing search/filter behavior (no backend changes).

**User-visible outcome:** Users can see “VIVO X300 PRO” in the Products grid and find it by searching for “VIVO” or “X300”.
