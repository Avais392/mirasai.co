# Miras AI

Source for [mirasai.co](https://mirasai.co), deployed through the Vercel project `mirasai-tech`.

## Publishing a release

A production deployment starts only when a version tag in the form `vMAJOR.MINOR.PATCH` (for example, `v1.0.0`) is pushed to GitHub. The tagged commit must be on `main`. Pull requests, branch pushes, and merges do not automatically publish the site.

From a local checkout of `main`:

```sh
git pull --ff-only origin main
git tag v1.0.0
git push origin v1.0.0
```

Replace `v1.0.0` with the new release version. The [Publish release to Vercel](.github/workflows/release.yml) GitHub Actions workflow builds and deploys that tagged commit to production. Check the workflow run and its deployment URL before announcing the release.

Vercel's automatic Git connection is disconnected, and [`vercel.json`](vercel.json) disables automatic Git deployments if the connection is restored. The GitHub Actions `production` environment permits only `v*` tags. Its encrypted `VERCEL_TOKEN` secret is scoped to the Vercel project and expires on October 21, 2027; rotate it before then. `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are repository secrets.

See [RELEASING.md](RELEASING.md) for the release guide.
