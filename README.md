## 多场景文件上传示例

### 一、项目简介

在日常生活中，文件上传是一个很常见的功能，本项目阿宝哥演示了文件上传的八种场景：

- 单文件上传：利用 `input` 元素的 `accept` 属性限制上传文件的类型、利用 JS 检测文件的类型及使用 [Koa](https://koajs.com/) 实现单文件上传的功能；

- 多文件上传：利用 `input` 元素的 `multiple` 属性支持选择多文件及使用 [Koa](https://koajs.com/) 实现多文件上传的功能；

- 目录上传：利用 `input` 元素上的 `webkitdirectory` 属性支持目录上传的功能及使用 [Koa](https://koajs.com/) 实现目录上传并按文件目录结构存放的功能；
- 压缩目录上传：在目录上传的基础上，利用 [JSZip](https://stuk.github.io/jszip/) 实现压缩目录上传的功能；
- 拖拽上传：利用拖拽事件和 [DataTransfer](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer) 对象实现拖拽上传的功能；
- 剪贴板上传：利用剪贴板事件和 [Clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API) API 实现剪贴板上传的功能；
- 大文件分块上传：利用 [Blob.slice](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/slice) 和第三方库 [async-pool](https://github.com/rxaviers/async-pool#readme) 实现大文件并发上传的功能；
- 服务端上传：利用第三方库 [form-data](https://github.com/form-data/form-data) 实现服务端文件流式上传的功能。

### 二、项目使用

#### 2.1 项目初始化

1、克隆项目

```shell
git clone https://github.com/semlinker/file-upload-demos.git
```

2、安装依赖

```shell
npm install
```

#### 2.2 目录结构说明

```shell
├── README.md #项目说明文档
├── big-file-upload # 大文件分块上传示例
├── clipboard-upload # 剪贴板上传示例
├── directory-compress-upload # 目录压缩上传示例
├── directory-upload # 目录上传示例
├── drag-drop-upload # 拖拽上传示例
├── multiple-file-upload # 多文件上传示例
├── server-upload # 服务端上传示例
└── single-file-upload # 单文件上传示例
```

#### 2.3 运行单文件上传示例

```shell
npm run single
```

#### 2.4 运行多文件上传示例

```shell
npm run mul
```

#### 2.5 运行目录上传示例

```shell
npm run dir
```

#### 2.6 运行压缩目录上传示例

```shell
npm run compress
```

#### 2.7 运行拖拽上传示例

```shell
npm run drag
```

#### 2.8 运行剪贴板上传示例

```shell
npm run clipboard
```

> 提示：测试剪贴板上传示例的时候，图片来源可以从网页上复制图片或从微信聊天框中复制图片。

#### 2.9 运行大文件分块上传示例

```shell
npm run big
```

#### 2.10 运行服务端上传示例

```shell
npm run server
```