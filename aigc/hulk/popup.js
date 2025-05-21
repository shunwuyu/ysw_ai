/**
 * @desc 页面背景切换
 * @author lhh
 * @date 2025-05-10 11:18:50
 */

// 监听 DOMContentLoaded 事件，确保页面完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
  // 获取页面中 ID 为 changeBackgroundBtn 的按钮元素
  const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
  
  // 为按钮添加点击事件监听器
  changeBackgroundBtn.addEventListener('click', function() {
    // 使用 chrome.tabs.query 查询当前激活的标签页
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // 获取第一个标签页（当前激活的标签页）
      const activeTab = tabs[0];
      // 使用 chrome.scripting.executeScript 在当前标签页中执行脚本
      chrome.scripting.executeScript({
        // 指定目标标签页的 ID
        target: {tabId: activeTab.id},
        // 指定要执行的函数，将网页背景颜色变为绿色
        function: changeBackgroundToGreen
      });
    });
  });
});

// 定义 changeBackgroundToGreen 函数，用于改变网页背景颜色为绿色
function changeBackgroundToGreen() {
  // 将网页的 body 元素的背景颜色设置为绿色
  document.body.style.backgroundColor = 'green';
}