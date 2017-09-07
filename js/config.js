requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './',
        'Utils': 'utils',
        'App': 'app',
        'Board': 'board',
        'BoardsMaker': 'boards-maker',
        'List': 'list',
        'ListMaker': 'list-maker',
        'DataStore': 'data-store',
        'Task': 'task',
        'TaskMaker': 'task-maker',
    },
    shim: {
        'Utils': {
            exports: 'Utils'
        },
        'App': {
            exports: 'App',
            deps: ['Utils']
        }
    }
});