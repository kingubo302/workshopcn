# raschgz workshop

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://yourusername.github.io/raschgz-workshop/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**raschgz workshop** 是一个介绍 **Rasch 模型**（拉什模型）的单页面静态网站，用于心理测量和教育测量领域的研究与交流。

## 🌐 在线预览

访问 [GitHub Pages](https://yourusername.github.io/raschgz-workshop/) 查看在线版本。

## 📖 内容概览

- **概述** - Rasch 模型的基本概念和历史背景
- **合作机构** - 广东外语外贸大学、澳门城市大学、PROMS等合作伙伴
- **数学模型** - 详细公式推导和项目特征曲线（ICC）可视化
- **基本假设** - 单维性、局部独立性等核心假设
- **应用领域** - 教育测量、心理测量、医学康复等实际应用
- **优势与局限** - 模型的优缺点对比分析
- **常用软件** - Rasch-GZ、Winsteps、R、ConQuest 等分析工具
- **推荐资源** - 经典文献和在线学习资源
- **联系我们** - 二维码、邮箱等联系方式

## 🤝 合作机构

- 广东外语外贸大学
- 澳门城市大学教育学院
- 浙江大学
- 美国深教育学院
- 环太平洋客观测量学会 (PROMS)
- 国家教育部考试中心

## 🚀 本地运行

无需构建工具，直接在浏览器中打开 `index.html` 即可查看：

```bash
# 方式1：直接打开文件
open index.html

# 方式2：使用 Python 简单 HTTP 服务器
python -m http.server 8000
# 然后访问 http://localhost:8000

# 方式3：使用 Node.js 的 serve
npx serve .
```

## 📁 文件结构

```
.
├── index.html      # 主页面（单页面应用）
├── styles.css      # 样式表
├── script.js       # JavaScript 交互
├── gz.png          # 官网二维码
├── wechat.png      # 微信公众号二维码
├── README.md       # 项目说明
└── LICENSE         # MIT 许可证
```

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **CSS3** - Flexbox/Grid 布局、CSS 变量、响应式设计
- **JavaScript** - 原生 ES6+，无框架依赖
- **Google Fonts** - Noto Sans SC 中文字体

## ✨ 功能特性

- 📱 **响应式设计** - 完美适配手机/平板/桌面
- 🎨 **现代化UI** - 渐变背景、卡片布局、阴影效果
- 📊 **SVG图表** - 手绘ICC项目特征曲线
- 🔢 **数学公式** - 美观的分数和上下标显示
- 📈 **访问统计** - 本地存储实现访问人数计数
- 📅 **实时日期** - 显示当前日期和星期
- 🔗 **合作机构** - 展示合作高校和研究机构
- 📧 **联系方式** - 邮箱和二维码展示

## 📱 响应式设计

网站适配各种设备：
- 💻 桌面端（> 768px）
- 📱 平板端（768px）
- 📲 移动端（< 480px）

## 📚 参考资料

- Rasch, G. (1960). *Probabilistic Models for Some Intelligence and Attainment Tests.*
- Bond, T. G., & Fox, C. M. (2015). *Applying the Rasch Model* (3rd ed.)
- [Rasch-GZ 官网](https://www.rasch-gz.com/)
- [Rasch Measurement Transactions](https://www.rasch.org/rmt/)

## 📧 联系我们

- **邮箱**: qzhang141@Rasch-GZ.com
- **官网**: https://www.rasch-gz.com/

## 📄 许可证

本项目使用 [MIT 许可证](LICENSE) 开源。

---

**raschgz workshop** - 为客观测量而生的统计模型研究平台
