"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@actions/core");
const _exec_1 = __importDefault(require("./_exec"));
/** Install specifying version of semantic-release */
exports.default = async () => {
    const semanticVersion = core_1.getInput('semantic_version');
    const { stdout, stderr } = await _exec_1.default(`pnpm i semantic-release${semanticVersion ? `@${semanticVersion}` : ''}`, {
        cwd: path_1.join(__dirname, '..')
    });
    core_1.debug(stdout);
    core_1.error(stderr);
};
