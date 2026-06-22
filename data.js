/**
 * 者右の日语入门资料 —— 数据配置
 * ─────────────────────────────────────────
 * 以后只需要：
 *   1. 把文件放进 files/ 目录
 *   2. 修改下面 modules 数组里的 file 路径
 * 不需要改 index.html
 */
const siteData = {
  title: '者右的日语入门资料',
  subtitle:
    '感谢购入，这套资料帮助过 50+ 零基础学习者建立整体认知，少走弯路，认知效率提高 30%',

  // ── 模块列表 ──────────────────────────
  modules: [
    {
      id: '①',
      name: '日语学习人格测试',
      desc: '一分钟测出你适不适合学日语',
      type: 'copy-url', // 点击复制网址
      url: 'https://jiang619.github.io/japanese-learning-test/日语学习人格测试.html',
      copyLabel: '/日语学习人格测试.https',
    },
    {
      id: '②',
      name: '日本语概要',
      subtitle: '学习路线图 + 笔记',
      desc: '构建日语学习的整体认知框架',
      type: 'download', // 点击下载文件
      file: 'files/日本语概要.pdf',
    },
    {
      id: '③',
      name: '七天启动计划',
      desc: '七天快速入门，建立学习节奏',
      type: 'download',
      file: 'files/七天启动计划.pdf',
    },
    {
      id: '④',
      name: '初学者常见避坑指南',
      desc: '常见误区与正确方法，少走弯路',
      type: 'download',
      file: 'files/初学者常见避坑指南.pdf',
    },
  ],

  // ── 页脚信息 ──────────────────────────
  footer: {
    author: '者右',
    douyin: '98112178840',
    xiaohongshu: '1575073952',
    version: 'v1.0',
    updated: '2026.06',
  },
}
