const panels = document.querySelectorAll('.qq-panel');
panels.forEach(panel => {
    // JS 是事件机制的语言
    // 每一个元素上监听
    panel.addEventListener('click', () => {
        console.log('biubiubiu');
        removeActiveClasses(); //模块化
        panel.classList.add("qq-panel_active");
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('qq-panel_active');
    })
}