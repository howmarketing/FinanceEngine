/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Config } from 'jest';
import { defaults } from 'jest-config';
type IDefaults = typeof defaults & {
    [key: string]: any;
};
const defaultConfig: IDefaults = {
    ...defaults,
    automock: false,
    bail: 0,
    cache: true,
    // cacheDirectory: (0, _getCacheDirectory.default)(),
    changedFilesWithAncestor: false,
    // ci: _ciInfo().isCI,
    clearMocks: false,
    collectCoverage: false,
    // coveragePathIgnorePatterns: [NODE_MODULES_REGEXP],
    coverageProvider: 'babel',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    detectLeaks: false,
    detectOpenHandles: false,
    errorOnDeprecated: false,
    expand: false,
    extensionsToTreatAsEsm: [],
    fakeTimers: {
        enableGlobally: false
    },
    forceCoverageMatch: [],
    globals: {},
    haste: {
        computeSha1: false,
        enableSymlinks: false,
        forceNodeFilesystemAPI: true,
        throwOnModuleCollision: false
    },
    injectGlobals: false,
    listTests: false,
    maxConcurrency: 5,
    maxWorkers: '50%',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    moduleNameMapper: {},
    modulePathIgnorePatterns: [],
    noStackTrace: false,
    notify: false,
    notifyMode: 'failure-change',
    passWithNoTests: false,
    prettierPath: 'prettier',
    resetMocks: false,
    resetModules: false,
    restoreMocks: false,
    roots: ['<rootDir>'],
    runTestsByPath: false,
    runner: 'jest-runner',
    setupFiles: [],
    setupFilesAfterEnv: [],
    skipFilter: false,
    slowTestThreshold: 5,
    snapshotFormat: {
        escapeString: false,
        printBasicPrototype: false
    },
    snapshotSerializers: [],
    testEnvironment: 'jest-environment-node',
    testEnvironmentOptions: {},
    testFailureExitCode: 1,
    testLocationInResults: false,
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    // testPathIgnorePatterns: [NODE_MODULES_REGEXP],
    testRegex: [],
    testRunner: 'jest-circus/runner',
    testSequencer: '@jest/test-sequencer',

    // transformIgnorePatterns: [
    //     NODE_MODULES_REGEXP,
    //     `\\.pnp\\.[^\\${_path().sep}]+$`
    // ],
    useStderr: false,
    watch: false,
    watchPathIgnorePatterns: [],
    watchman: true
}

const testConfig: IDefaults = {
    ...defaultConfig,
    // preset: 'ts-jest',
    // roots: ['<rootDir>/src'],
    // testEnvironment: 'node',
    // coverageProvider: 'v8',
    // testMatch: ['**/__tests__/**/*.test.(ts|js|tsx|jsx)'],
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    // transform: {
    //     '^.+\\.ts$': 'ts-jest',
    // },
    // sandboxInjectedGlobals: undefined,
    // extraGlobals: undefined,

    globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.json', }, },
    // globals: {
    //     __DEV__: true,
    // },
    // injectGlobals: false,
    // collectCoverageFrom: [
    //     '<rootDir>/src/**/*.ts', // include all files, even files that have no tests yet (or are never called)
    //     '!<rootDir>/node_modules/**/*', // exclude this file, because it is only made for postInstall, not tests
    // ],
    // transformIgnorePatterns: [
    //     ...defaultConfig.transformIgnorePatterns,
    //     'node_modules/(?!@jest/globals)',
    // ],
}
const config: IDefaults = {
    ...defaultConfig,
    // ...testConfig,
    bail: 1,
    verbose: true,
    extraGlobals: {},
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
    },
};

export default config;