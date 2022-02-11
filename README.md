# node-buildkit

provides `buildctl` & `buildkitd` on supported platforms.

## Versioning

Minor & major versions will always match the ones from buildkit. The patch field indicates changes from wrapper library, so be sure to pin your dependencies if you don't want breaking changes.

## Windows Support

`buildkitd` is not supported on windows. If you plan to build containers using a windows pc, use the `docker.io/moby/buildkit:rootless` container to run the daemon instead.
