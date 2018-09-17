# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="12.0.1"></a>
## [12.0.1](https://gitlab.tech/cnc/citadel/compare/v12.0.0...v12.0.1) (2018-09-14)


### Bug Fixes

* **breadcrumbs:** fix issue where we parsed undefined as json ([4ac8cfc](https://gitlab.workfront.tech/cnc/citadel/commit/4ac8cfc))


### Features

* **api-client:** add response utilities for common data munging ([cefc2e8](https://gitlab.workfront.tech/cnc/citadel/commit/cefc2e8))





<a name="12.0.0"></a>
# [12.0.0](https://gitlab.workfront.tech/cnc/citadel/compare/v11.2.1...v12.0.0) (2018-09-14)


### Features

* **config:** make commonjs use externals, umd none ([6f1b7ad](https://gitlab.workfront.tech/cnc/citadel/commit/6f1b7ad))





<a name="11.2.1"></a>
## [11.2.1](https://gitlab.workfront.tech/cnc/citadel/compare/v11.2.0...v11.2.1) (2018-09-13)


### Bug Fixes

* changed gitlab-ci to use pipeline id instead of branch id ([ffc1f56](https://gitlab.workfront.tech/cnc/citadel/commit/ffc1f56))





<a name="11.2.0"></a>
# [11.2.0](https://gitlab.workfront.tech/cnc/citadel/compare/v11.1.2...v11.2.0) (2018-09-13)


### Features

* **breadcrumbs:** connect up breadcrumbs to (mock) api ([1583e50](https://gitlab.workfront.tech/cnc/citadel/commit/1583e50))





<a name="11.1.2"></a>
## [11.1.2](https://gitlab.workfront.tech/cnc/citadel/compare/v11.1.1...v11.1.2) (2018-09-13)


### Reverts

* revert usage of webpack-node-externals to fix calendar ([60a9430](https://gitlab.workfront.tech/cnc/citadel/commit/60a9430))





<a name="11.1.1"></a>
## [11.1.1](https://gitlab.workfront.tech/cnc/citadel/compare/v11.1.0...v11.1.1) (2018-09-12)


### Bug Fixes

* extend base jest config for coverage report page ([3aea045](https://gitlab.workfront.tech/cnc/citadel/commit/3aea045))


### Features

* **calendar:** added pitboss check for calendar writeback settings ([a3a23ae](https://gitlab.workfront.tech/cnc/citadel/commit/a3a23ae))





<a name="11.1.0"></a>
# [11.1.0](https://gitlab.workfront.tech/cnc/citadel/compare/v11.0.1...v11.1.0) (2018-09-11)


### Features

* **api-client:** add `postForm` helper to use with non-json posts ([0c7bcd5](https://gitlab.workfront.tech/cnc/citadel/commit/0c7bcd5))





<a name="11.0.1"></a>
## [11.0.1](https://gitlab.workfront.tech/cnc/citadel/compare/v11.0.0...v11.0.1) (2018-09-10)


### Bug Fixes

* **calendar:** fixed calendar not parsing api dates ([1f6324f](https://gitlab.workfront.tech/cnc/citadel/commit/1f6324f))
* **calendar:** fixed drag/drop onto calendar not working ([953bfe8](https://gitlab.workfront.tech/cnc/citadel/commit/953bfe8))
* **calendar:** fixed inability to create calendar entries ([7436c66](https://gitlab.workfront.tech/cnc/citadel/commit/7436c66))
* **calendar:** fixed settings dropdowns not updating on change ([b82cdc8](https://gitlab.workfront.tech/cnc/citadel/commit/b82cdc8))
* **calendar:** fixed settings dropdowns not updating on change ([1b1fffb](https://gitlab.workfront.tech/cnc/citadel/commit/1b1fffb))
* **calendar:** fixed the settings-modal docs ([0a2e307](https://gitlab.workfront.tech/cnc/citadel/commit/0a2e307))


### Features

* **calendar:** settings auto-save on change ([dae8ab9](https://gitlab.workfront.tech/cnc/citadel/commit/dae8ab9))
* **calendar:** settings auto-save on change ([7ec5c55](https://gitlab.workfront.tech/cnc/citadel/commit/7ec5c55))





<a name="11.0.0"></a>
# [11.0.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.6.2...v11.0.0) (2018-09-06)


### Bug Fixes

* **api-client:** fix published export of api-client ([533f072](https://gitlab.workfront.tech/cnc/citadel/commit/533f072))


### BREAKING CHANGES

* **api-client:** import paths have changed from `dist/` to `lib/`





<a name="10.6.2"></a>
## [10.6.2](https://gitlab.workfront.tech/cnc/citadel/compare/v10.6.1...v10.6.2) (2018-09-05)


### Bug Fixes

* **calendar:** remove titan-react-widgets ArrowCaret ([b182634](https://gitlab.workfront.tech/cnc/citadel/commit/b182634))





<a name="10.6.1"></a>
## [10.6.1](https://gitlab.workfront.tech/cnc/citadel/compare/v10.6.0...v10.6.1) (2018-09-04)


### Bug Fixes

* **calendar:** fix some approvals sending to calendar api incorrectly ([9bf8613](https://gitlab.workfront.tech/cnc/citadel/commit/9bf8613))





<a name="10.6.0"></a>
# [10.6.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.5.0...v10.6.0) (2018-08-31)


### Features

* **api-client:** introducing api-client package ([5f06a22](https://gitlab.workfront.tech/cnc/citadel/commit/5f06a22))





<a name="10.5.0"></a>
# [10.5.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.4.1...v10.5.0) (2018-08-30)


### Bug Fixes

* **docs:** fix docz config to not use `base` with `hashRouter` ([34736ad](https://gitlab.workfront.tech/cnc/citadel/commit/34736ad))
* **docs:** put base back on config but remove trailing slash ([6e6f8be](https://gitlab.workfront.tech/cnc/citadel/commit/6e6f8be))


### Features

* **testing-library:** introduce testing package to simplify life ([bbb4104](https://gitlab.workfront.tech/cnc/citadel/commit/bbb4104))





<a name="10.4.1"></a>
## [10.4.1](https://gitlab.workfront.tech/cnc/citadel/compare/v10.4.0...v10.4.1) (2018-08-29)


### Bug Fixes

* **config:** fix config entry for jest-all.config.js ([6b4fd4a](https://gitlab.workfront.tech/cnc/citadel/commit/6b4fd4a))


### Features

* added code coverage publish step for gitlab ([8590bb9](https://gitlab.workfront.tech/cnc/citadel/commit/8590bb9))
* added docz publishing and node_modules caching to gitlab-ci ([043947a](https://gitlab.workfront.tech/cnc/citadel/commit/043947a))





<a name="10.4.0"></a>
# [10.4.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.3.0...v10.4.0) (2018-08-24)


### Features

* **breadcrumbs:** introduce `[@cnc](https://gitlab.workfront.tech/cnc)/breadcrumbs` package ([090b4de](https://gitlab.workfront.tech/cnc/citadel/commit/090b4de))





<a name="10.3.0"></a>
# [10.3.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.2.2...v10.3.0) (2018-08-24)


### Bug Fixes

* **calendar:** fixed ajax-util and its usage in settings ([54e721e](https://gitlab.workfront.tech/cnc/citadel/commit/54e721e))


### Features

* **calendar:** implemented writeback settings ui for calendar ([11285fa](https://gitlab.workfront.tech/cnc/citadel/commit/11285fa))





<a name="10.2.2"></a>
## [10.2.2](https://gitlab.workfront.tech/cnc/citadel/compare/v10.2.1...v10.2.2) (2018-08-23)


### Bug Fixes

* **calendar:** added prop type for validation ([e8f4928](https://gitlab.workfront.tech/cnc/citadel/commit/e8f4928))
* **calendar:** fixing the spacing of outlook events at the same time ([8d0c168](https://gitlab.workfront.tech/cnc/citadel/commit/8d0c168))





<a name="10.2.1"></a>
## [10.2.1](https://gitlab.workfront.tech/cnc/citadel/compare/v10.2.0...v10.2.1) (2018-08-23)


### Bug Fixes

* **ci:** fix release command so it doesn't verify registry ([db901f0](https://gitlab.workfront.tech/cnc/citadel/commit/db901f0))





<a name="10.2.0"></a>
# [10.2.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.1.0...v10.2.0) (2018-08-23)


### Features

* **config:** use webpack multi-config support ([0310a13](https://gitlab.workfront.tech/cnc/citadel/commit/0310a13))





<a name="10.1.0"></a>
# [10.1.0](https://gitlab.workfront.tech/cnc/citadel/compare/v10.0.0...v10.1.0) (2018-08-22)


### Bug Fixes

* **calendar:** fixed 000 showing up in some places ([af206f8](https://gitlab.workfront.tech/cnc/citadel/commit/af206f8))


### Features

* **calendar:** support multiple accounts in calendar settings dialog ([45dda3c](https://gitlab.workfront.tech/cnc/citadel/commit/45dda3c))
* **calendar:** support multiple accounts in manage calendars dropdown ([d0e0a5b](https://gitlab.workfront.tech/cnc/citadel/commit/d0e0a5b))





<a name="10.0.0"></a>
# [10.0.0](https://gitlab.workfront.tech/cnc/citadel/compare/v9.0.0...v10.0.0) (2018-08-20)

**Note:** Version bump only for package citadel

