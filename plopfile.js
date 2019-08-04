module.exports = function (plop) {

    plop.setGenerator('component', {
        description: 'template for components',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this component:'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.js',
            templateFile: 'plop-templates/component.hbs'
        },{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.style.js',
            templateFile: 'plop-templates/style.hbs'
        },
        {
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop-templates/test.hbs'
        },
        {
            type: 'add',
            path: 'src/components/{{properCase name}}/index.js',
            templateFile: 'plop-templates/index.hbs'
        } ]
    });

    plop.setGenerator('module', {
        description: 'template for modules',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Module name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this module:'
        }],
        actions: [{
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.js',
            templateFile: 'plop-templates/module.hbs'
        },{
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.style.js',
            templateFile: 'plop-templates/style_module.hbs'
        },
        {
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop-templates/test_module.hbs'
        },
        {
            type: 'add',
            path: 'src/modules/{{properCase name}}/index.js',
            templateFile: 'plop-templates/index.hbs'
        } ]
    });

    plop.setGenerator('page', {
        description: 'template for pages',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Page name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this page:'
        }, {
            type: 'input',
            name: 'module1',
            message: 'Module(1) name to be add in the page:'
        }, {
            type: 'input',
            name: 'module2',
            message: 'Module(2) name to be add in the page:'
        }],
        actions: [{
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.js',
            templateFile: 'plop-templates/page.hbs'
        },{
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.style.js',
            templateFile: 'plop-templates/style.hbs'
        },
        {
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop-templates/test.hbs'
        },
        {
            type: 'add',
            path: 'src/pages/{{properCase name}}/index.js',
            templateFile: 'plop-templates/index.hbs'
        } ]
    });

};

