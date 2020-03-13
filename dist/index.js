"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _exec_1 = __importDefault(require("./_exec"));
const main_1 = __importDefault(require("./main"));
const run = async () => {
    // Install Dependencies
    const { stdout, stderr } = await _exec_1.default('pnpm i -P', { cwd: __dirname });
    console.log(stdout);
    if (stderr)
        return Promise.reject(stderr);
    main_1.default();
};
run().catch(console.error);
