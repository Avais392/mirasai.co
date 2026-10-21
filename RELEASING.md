# Releasing to Vercel

The `mirasai-tech` project publishes to production only when a version tag such as `v1.0.0` is pushed. Commits, pull requests, and merges do not trigger a deployment. The tagged commit must be on `main`.

The Vercel Git connection is disconnected, and `vercel.json` disables automatic Git deployments if it is connected again. The GitHub Actions `production` environment allows only `v*` tags. `VERCEL_TOKEN` is stored as an encrypted secret in that environment; `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are repository secrets. The project-scoped token expires on October 21, 2027 and must be rotated before then.

## Publish

From a local checkout of `main`:

```sh
git pull --ff-only origin main
git tag v1.0.0
git push origin v1.0.0
```

The **Publish release to Vercel** GitHub Actions run builds and deploys that exact commit to production. Check the run and its deployment URL before announcing the release.
