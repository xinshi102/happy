document.addEventListener('DOMContentLoaded', () => {
    const seal = document.getElementById('seal');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const bgMusic = document.getElementById('bgMusic');
    const floatingElements = document.getElementById('floating-elements');
    let isMusicPlaying = false;

    // 创建飘动元素
    function createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // 随机选择是花瓣还是爱心
        if (Math.random() > 0.5) {
            element.classList.add('heart');
            element.innerHTML = '❤';
        } else {
            element.classList.add('petal');
        }
        
        // 随机位置和动画延迟
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDelay = Math.random() * 15 + 's';
        
        floatingElements.appendChild(element);
        
        // 动画结束后移除元素
        element.addEventListener('animationend', () => {
            element.remove();
        });
    }

    // 定期创建新的飘动元素
    setInterval(createFloatingElement, 300);

    seal.addEventListener('click', () => {
        // 添加动画效果
        seal.style.transform = 'scale(0)';
        envelope.classList.add('hide');
        
        // 显示信纸
        setTimeout(() => {
            letter.classList.add('active');
        }, 500);
    });

    // 点击信纸播放/暂停音乐
    letter.addEventListener('click', () => {
        if (!isMusicPlaying) {
            bgMusic.play();
            isMusicPlaying = true;
        } else {
            bgMusic.pause();
            isMusicPlaying = false;
        }
    });
}); 