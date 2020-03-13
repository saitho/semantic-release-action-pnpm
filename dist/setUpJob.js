"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@actions/core");
/** Set up job. */
exports.default = () => {
    // set outputs default
    core_1.setOutput('new_release_published', 'false');
    core_1.debug('action_workspace: ' + path_1.join(__dirname, '..'));
    core_1.debug('process.cwd: ' + process.cwd());
};
