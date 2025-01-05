import type {Config} from 'release-it';

export default {

    git: {
        commit: true,
        commitArgs: ['-S'],
        tag: true,
        tagArgs: ['-s'],
        push: true,
    },
    github: {
        release: false
    },
    npm: {
        publish: false,
    },
    hooks: {
        'before:init': ['test:run', 'test:types', 'lint', 'prepare', 'lint:package'],
    },
    plugins: {
        '@release-it/bumper': {
            out: {
                file: 'jsr.json',
                path: 'version',
            },
        },
    },
} satisfies Config;
