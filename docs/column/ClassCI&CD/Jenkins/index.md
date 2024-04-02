# Jenkins

## 前置环境

- windows11
- docker
- github
- 一个简单的 vite 测试列子

这里就不需要购买线上服务器了，直接本地用 docker 搭建 jenkins，原理是一样的，前端框架就用 vite 打包

## 1.开启 Hyper-V

控制面板->程序->启动活关闭 windows 功能->勾选 Hyper-V->确定
![img](./images/2.png)

确定后 window 会自动更新，更新完成后重启电脑

## 2.安装 Docker Desktop

Docker 官网下载 Docker Desktop 版本：[下载地址](https://docs.docker.com/get-docker/)
![img](./images/1.png)

安装成功后桌面会有 Docker Desktop 的图标，打开后进 docker，账号的话注册不注册都没关系

如果出现

> Update the WSL kernel by running "wsl --update"

则需要升级 wsl2 内核，使用管理员身份打开 cmd， 输入

```powershell
wsl --update
```

![img](./images/3.png)

更新完毕即可再次重启 Docker Desktop，汉化就不需要了，因为主要是用 docker 来加载一个 jenkins 的镜像，docker 需求的内容很少
![img](./images/4.png)

配置 docker 镜像源
没有梯子的小伙伴可以设置一下 docker 的镜像源，这样下载会快很多
![img](./images/12.png)

```json
"registry-mirrors": [
  "https://docker.mirrors.ustc.edu.cn",
  "https://registry.docker-cn.com",
  "http://hub-mirror.c.163.com",
  "https://mirror.ccs.tencentyun.com"
]
```

## 3.docker 安装 nginx

新增一个容易，用于启动 nginx 服务器，同样的在 docker desktop 里搜索 nginx，拉去镜像并运行，端口随便写一个

![img](./images/24.png)

## 4.docker 安装 jenkins

打开 Docker Desktop，在顶部搜索 jenkins，两个都是 jenkins 的镜像，下面的是最新版本，点击 pull 拉去镜像
![img](./images/5.png)

之后我们点击侧边栏的 images 选择 jenkins， 运行容器
![img](./images/6.png)

容器名字随便取一个，然后下面的断后就使用一个不占用的端口号就行，点击 run
![img](./images/7.png)

看到下面界面的时候，jenkins 的服务就启动成功了，图里的红圈的密码一会我们需要用
![img](./images/8.png)

## 5.登录 jenkins

点击容器的页面
![img](./images/9.png)

之后输入刚才容器里显示的密码，点击继续
![img](./images/10.png)

然后安装推荐的插件就行，里面有汉化，主题，管道，git，ssh 等等，大概需要几分钟，失败了也没关系，后面我们还能继续在插件市场继续搜索安装的。
![img](./images/11.png)

安装完成后我们就创建一个管理员用户，都可以随便填的
![img](./images/13.png)

## 6.配置 jenkins

### 1.配置 node 环境

在 jenkins 插件市场搜索并安装 NodeJS，注意大小写，不然搜索不到，安装完成后重启 jenkins
![img](./images/14.png)

接下来打开全局工具配置，配一个全局的 node 环境，因为不同的项目 node 版本不一样，所以为了避免错误，可以要加载不同的 node 环境
![img](./images/16.png)

### 2.任务配置

新建一个自由风格的任务，名称随意

![img](./images/17.png)
![img](./images/18.png)

在任务里选择源码管理，使用我们建好的 git 仓库，填写分支名称
![img](./images/19.png)

构建环境选择 node 环境，然后选择刚才配置好的 node 版本配置
![img](./images/20.png)

在构建步骤里选择配置好的 node 环境版本，添加新的 shell，填写 npm 相关指令（就是本地打包的那些 script）
![img](./images/21.png)

### 3.开始构建

回到工作台，就可以看到构建任务了，然后点击右侧箭头开始构建，此时左侧栏里的构建执行状态就会显示我们当前正在构建的任务
![img](./images/22.png)

稍等片刻，构建成功，打开构建历史，就可以看到以构建的任务，右侧的控制台信息可以方便我们查看构建时的脚本运行情况，失败的话可以在里面查看任务
![img](./images/23.png)

## 7.安装 SSH 插件

插件市场搜索 Publish Over SSH，用于我们构建成功后，把文件发布到服务器上

由于没有远程测试服务器，本地配置的 docker nginx 无法使用 publish over ssh，所以这一部分先不做讲解

原理就是服务器会给你对应的访问账号，路径，ssh 等，配置好后，就可以在构建完成后的步骤里直接发布到服务器上
