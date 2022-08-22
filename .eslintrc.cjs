module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    'plugin:prettier/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'prettier/prettier': [
      1,
      {
        arrowParens: 'always', //  在单个箭头函数参数周围加上括号：(x) => x
        bracketSpacing: true, // 是否在对象属性添加空格，这里选择是 { binding: 'new' }
        endOfLine: 'lf', // 行结束 Line Feed only（\n），在 Linux 和 macOS 以及 git repos 内部很常见
        ignorePath: '.prettierignore', // 不使用prettier格式化的文件写在.prettierignore里面：每行写一个路径
        jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
        jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
        htmlWhitespaceSensitivity: 'ignore', // 空格被认为是不敏感的
        printWidth: 160, // 每行最大值后换行
        proseWrap: 'always', // 超过超过打印宽度换行
        semi: false, // 句尾是否添加分号
        singleQuote: true, // 是否使用单引号代替双引号
        tabWidth: 2, // 缩进字节数
        trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
        useTabs: false, // 缩进不使用tab，使用空格
        vueIndentScriptAndStyle: false
      }
    ]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    }
  }
}
