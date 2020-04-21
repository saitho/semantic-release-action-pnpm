"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const semantic_release_1 = __importDefault(require("semantic-release"));
const cleanupNpmrc_1 = __importDefault(require("./cleanupNpmrc"));
const handleOptions_1 = require("./handleOptions");
const installSpecifyingVersionSemantic_1 = __importDefault(require("./installSpecifyingVersionSemantic"));
const preInstallPlugins_1 = __importDefault(require("./preInstallPlugins"));
const setUpJob_1 = __importDefault(require("./setUpJob"));
const windUpJob_1 = __importDefault(require("./windUpJob"));
/** Release main task. */
const release = async () => {
    setUpJob_1.default();
    await installSpecifyingVersionSemantic_1.default();
    await preInstallPlugins_1.default();
    console.log('test');
    if (handleOptions_1.handleDebugOption().debug) {
        console.log('debug active');
        require('debug').enable('semantic-release:*');
    }
    const result = await semantic_release_1.default({
        ...handleOptions_1.handleBranchOption(),
        ...handleOptions_1.handleDryRunOption()
    });
    await cleanupNpmrc_1.default();
    windUpJob_1.default(result);
};
exports.default = () => {
    core_1.debug('Initialization successful');
    release().catch(core_1.setFailed);
};
