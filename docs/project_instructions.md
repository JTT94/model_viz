cd static/
yarn init
yarn add -D webpack
yarn add -D webpack-cli

<add webpack webpack.config.js>
<add scripts to package.json>

yarn add -D babel-core babel-loader babel-preset-es2015 babel-preset-react

cat > .babelrc
{
 “presets”: [“react”, “es2015”]
}

yarn add -D react react-dom
yarn add -D react-router-dom history
yarn add -D style-loader css-loader

<change webpack config js again>
yarn add -D babel-loader@^7

yarn run watch
python run.py