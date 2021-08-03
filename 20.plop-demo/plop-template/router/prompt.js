const notEmpty = name => {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}

module.exports = {
  description: '初始化一个活动页面', // 描述这个generate的作用
  prompts: [{
    type: 'input', // 问题的类型
    name: 'pathName', // 问题对应得到答案的变量名，可以在acitons中使用该变量
    message: '文件名称', // 在命令行中的问题
    validate: notEmpty('pathName')
  }, {
    type: 'confirm',
    name: 'router',
    message: '需要router么',
    checked: false
  }],
  actions: (data) => {
    let name = data.pathName.split('/')
    name = name[name.length - 1]
    const camelName = name[0].toUpperCase() + name.slice(1)

    const actions = [
      {
        type: 'add', // 操作类型 添加文件
        path: `src/views/${data.pathName}/__config.ts`, // 添加的文件的路径
        templateFile: 'plop-template/router/index.hbs', // 模版文件的路径
        data: {
          name
        }
      },
      {
        type: 'add',
        path: `src/views/${data.pathName}/${name}.js`,
        templateFile: 'plop-template/router/main.hbs',
        data: {
          name,
          camelName,
          router: data.router
        }
      },
      {
        type: 'add',
        path: `src/views/${data.pathName}/Container.vue`,
        templateFile: 'plop-template/router/container.hbs',
        data: {
          name,
          router: data.router
        }
      },
      {
        type: 'mkdir',
        path: `src/views/${data.pathName}/images`
      },
      {
        type: 'mkdir',
        path: `src/views/${data.pathName}/componenets`
      }
    ]

    if (data.router) {
      actions.push({
        type: 'add',
        path: `src/views/${data.pathName}/Home.vue`,
        templateFile: 'plop-template/router/component.hbs',
        data: {
          name
        }
      })
    }

    return actions
  }
}
