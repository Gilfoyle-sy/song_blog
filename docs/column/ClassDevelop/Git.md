# git 相关

## 一般 commit 信息使用

```txt
[module]-[id]-[feat/fix/style/perf/refactor/revert/]-[subject]
```

## git 常用指令

```cmd
git init
git clone
git add
git commit
git push
git branch
git checkout
git merge
git cherry-pick
git squash
git revert
git reset
git status
git stash
```

## gitflow

GitFlow 是一种 Git 工作流，这个工作流程围绕着 project 的发布(release)定义了一个严格的如何建立分支的模型。它是团队成员遵守的一种代码管理方案。这只是一种建议，在团队合作中，具体项目中要灵活应用，不用可守成规，觉得不合理的地方可以自行修正。

```txt
// 分支划分
- production
- release
- develop
- feature
- hotfix
```

## githook

git 的钩子，在 commit push 等之前后者之后做一些脚本，但是 hooks 不会下载到本地

## husky

- 使用 husky 做钩子控制。使用 lint-staged 检验提交的代码
