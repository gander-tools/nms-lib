import type {Config} from 'release-it';

export default {
    git: {
        commit: true,
        commitArgs: ['-S'],
        tag: true,
        push: true,
    },
    github: {
        release: true,
    },
    npm: {
        publish: true,
    },
    hooks: {
        'before:init': 'bun run prepack',
    },
} satisfies Config;
