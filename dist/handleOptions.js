"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const package_json_1 = require("semantic-release/package.json");
/** Handle branch option. */
exports.handleBranchOption = () => {
    const branchOption = {};
    const branch = core_1.getInput('branch');
    if (!branch)
        return branchOption;
    const semanticMajorVersion = Number(package_json_1.version.replace(/\..+/g, ''));
    core_1.debug(`semanticMajorVersion: ${semanticMajorVersion}`);
    if (semanticMajorVersion < 16)
        branchOption.branch = branch;
    else
        branchOption.branches = [branch];
    return branchOption;
};
/** Handle dryRun option. */
exports.handleDryRunOption = () => {
    const dryRun = core_1.getInput('dry_run');
    return { dryRun: typeof dryRun == 'undefined' ? undefined : dryRun === 'true' };
};
//# sourceMappingURL=handleOptions.js.map