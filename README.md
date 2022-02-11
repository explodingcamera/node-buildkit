<h1>
  node-buildkit
  <a href="https://www.npmjs.com/package/node-buildkit"><img src="https://img.shields.io/npm/v/node-buildkit?style=flat&colorA=000000&colorB=000000"/></a>
</h1>
<h3></h3>

BuildKit is a toolkit for converting source code to build artifacts in an efficient, expressive and repeatable manner. For more information on the project, check out [github.com/moby/buildkit](https://github.com/moby/buildkit).
This package provides an easy way to install and use `buildctl` & `buildkitd` on supported platforms.

```bash
npm i node-buildkit
```

Now, you can use `buildctl` and `buildkitd` inside of your npm scripts and it is availabe in `node_modules/.bin/`.
A node.js API will follow soon.

## Versioning

Minor & major versions will always match the ones from buildkit. The patch field indicates changes in this wrapper library, so be sure to pin your dependencies if you don't want breaking changes.

## Windows Support

`buildkitd` is not supported on windows. If you plan to build containers using a windows pc, use the `docker.io/moby/buildkit:rootless` container to run the daemon instead.
