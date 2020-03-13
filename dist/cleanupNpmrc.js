"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const _exec_1 = __importDefault(require("./_exec"));
/** Clean up `.npmrc` file in the repo after releasing. */
exports.default = async () => {
    const { stdout, stderr } = await _exec_1.default('rm -f .npmrc');
    core_1.debug(stdout);
    if (stderr)
        return Promise.reject(stderr);
};
