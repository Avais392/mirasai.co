# Releasing to Vercel

This repository deploys to production only when a version tag such as `v1.0.0` is pushed. Commits, pull requests, and merges do not trigger this workflow. The tag must point to a commit on `main`.

## One-time setup

Use the existing Vercel project `mirasai-tech` without connecting its automatic Git deployment integration. Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `VERCEL_TOKEN`: a Vercel access token that can deploy to the project.
- `VERCEL_ORG_ID`: the `orgId` for the Vercel account or team that owns the project.
- `VERCEL_PROJECT_ID`: the project's `projectId`.

You can obtain both IDs by running `vercel link` against `mirasai-tech` in a local checkout and reading the generated `.vercel/project.json`. Keep the token in GitHub Actions secrets; do not commit it or `.vercel/` to the repository.

## Publish

From a local checkout of `main`:

```sh
git pull --ff-only origin main
git tag v1.0.0
git push origin v1.0.0
```

The **Publish release to Vercel** GitHub Actions run builds and deploys that exact commit to production. Check the run and its deployment URL before announcing the release.
