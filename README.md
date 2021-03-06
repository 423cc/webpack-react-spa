# webpack-react-spa

> Webpack for spa project.

## get-started:

```bash
git clone https://github.com/afeiship/webpack-react-spa.git
npm install
npm run dev
```

## simple interface:

- nx.\$app
- nx.\$memory
- nx.\$local
- nx.\$session

## deploy:

```bash
## start
cd webpack-react-spa
git pull
./deploy/production/start.sh

## check status:
docker ps

## kill
docker kill a359c42986c6
```

## feature:

- [x] spa
- [x] react 16+
- [x] webpack 4.x
- [x] next-redux-base
- [x] image compress
- [x] fonts/images to folder
- [x] react-router v4
- [x] HtmlWebpack -> webpack favico.ico
- [x] ant-design optmize
- [x] react hmr
- [x] add `serviceworker` for app cache
- [x] use eslint + prettier
- [x] use router config
- [x] add dynamic import + react-imported-component

## todos:

- [x] deploy dev/test/prd with docker
- [x] react hmr remove `/User/xx/index.js` info (NODE_ENV=development/production)
- [ ] http when error
- [ ] token/without token interface
- [ ] remove build warings

## some package shell:[MAC USER: use gnu-tar but not bsd-tar]

```shell
tar zcf my-project-name.tgz dist/ --transform s/dist/my-project-name/
```

## resources:

- https://s.61qt.cn/admin_login
- http://www.css88.com/archives/7661
- https://github.com/gajus/react-css-modules
- https://github.com/ant-design/ant-design/issues/5320
- https://www.npmjs.com/package/serviceworker-webpack-plugin
- https://egoist.moe/2017/12/11/write-better-code-with-eslint-and-prettier/
- https://juejin.im/post/58ff0de18d6d810058a69a26
