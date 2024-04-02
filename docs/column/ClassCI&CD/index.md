# CI/CD 自动化发布

## 什么是 CI/CD

CI（Continuous Integration，持续集成）
CD（Continuous Delivery，持续交付/Continuous Deployment，持续部署）
指将传统开发过程中的代码构建、测试、部署以及基础设施配置等一系列流程的人工干预转变为自动化。

## 为什么使用 CI/CD

举个列子，早几年你新到一家公司任职，开发团队并没有使用 CI/CD 自动化部署。那你开发完发布时需要做以下几个操作。

1. 上传代码
2. 代码检查
3. 本地打包
4. SSH 连接服务器
5. 将本地打包好的代码部署到服务器上并发布

可以看到，我们其实在第 2，3，4 步，全是手动操作且是完全重复的。
而真实的业务场景，可以还会涉及到时间先后顺序（先打包，后上传），不同环境的服务器地址不同，发布包的缓存处理，日志记录，测试环境的高频打包等等。
然后有一天你出错了，导致测试环境代码发布到了正式环境，直接炸锅，写邮件都是小事，重则年终奖直接拜拜。
归根结底就是一个问题，人为操作的安全隐患。

那使用 CI/CD 自动化后，我们需要的操作仅下面一步。

1. 上传代码

可以看到，有了 CI/CD 后，我们完全解放频繁重复的人为操作，使用流程化的自动化处理。
当然，真是业务场景还是需要一些权限相关的人为配置，但是大幅减少了人为高频重复的操作。

## 运维的活？

其实从上面可以看出，大多数公司基本会是运维岗位去做这些事情，但如果想升职加薪，CI/CD 是必须学习的，且，这也是前端工程化很重要的一个环节。

## CI/CD 平台

我使用过的几个 CI/CD 平台

- Jenkins
  > 开源软件项目，是基于 Java 开发的一种持续集成工具
- Azure CI/CD
  > 巨硬出品
- 云效
  > 阿里云企业级一站式研发协同平台

除了上面这三个，其实市面上还有非常多的 CI/CD，且集成了很多团队开发，组织管理，工时调度，测试评估等大量功能。后面我会做一下简单的搭建和使用。