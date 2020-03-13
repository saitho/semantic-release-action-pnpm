"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@actions/core");
const _exec_1 = __importDefault(require("./_exec"));
/** Pre-install plugins, */
exports.default = async () => {
    const plugins = core_1.getInput('extra_plugins');
    if (!plugins)
        return;
    const { stdout, stderr } = await _exec_1.default(`pnpm i ${plugins.replace(/'|"/g, '').replace(/\n|\r/g, ' ')}`, {
        cwd: path_1.join(__dirname, '..')
    });
    core_1.debug(stdout);
    core_1.error(stderr);
};
