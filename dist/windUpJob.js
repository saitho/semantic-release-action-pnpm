"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
/** Wind up the job. */
exports.default = (result) => {
    if (!result) {
        core_1.debug('No release published.');
        return;
    }
    const { lastRelease, commits, nextRelease, releases } = result;
    core_1.debug(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`);
    if (lastRelease.version)
        core_1.debug(`The last release was "${lastRelease.version}".`);
    releases.forEach(release => core_1.debug(`The release was published with plugin "${release.pluginName}".`));
    const { version } = nextRelease;
    const [major, minor, patch] = version.split('.');
    // set outputs
    core_1.setOutput('new_release_published', 'true');
    core_1.setOutput('new_release_version', version);
    core_1.setOutput('new_release_major_version', major);
    core_1.setOutput('new_release_minor_version', minor);
    core_1.setOutput('new_release_patch_version', patch);
};
