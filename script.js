// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // ===== 日期显示功能 =====
    function updateDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
            const weekDay = weekDays[now.getDay()];
            dateElement.textContent = `${year}-${month}-${day} ${weekDay}`;
        }
    }
    updateDate();

    // ===== 访问人数统计功能 =====
    function updateVisitorCount() {
        const visitorElement = document.getElementById('visitor-count');
        if (!visitorElement) return;

        // 获取存储的访问数据
        let visitorData = localStorage.getItem('raschgz_visitor_data');
        let data = visitorData ? JSON.parse(visitorData) : { count: 0, lastVisit: null };
        
        // 检查是否是新的访问（使用 sessionStorage 来区分同一会话）
        const sessionVisited = sessionStorage.getItem('raschgz_session_visited');
        
        if (!sessionVisited) {
            // 新会话，增加计数
            data.count++;
            data.lastVisit = new Date().toISOString();
            localStorage.setItem('raschgz_visitor_data', JSON.stringify(data));
            sessionStorage.setItem('raschgz_session_visited', 'true');
        }
        
        // 格式化显示数字（添加千位分隔符）
        visitorElement.textContent = data.count.toLocaleString('zh-CN');
    }
    updateVisitorCount();

    // 更新版权年份
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Console greeting
    console.log('%c raschgz workshop ', 'background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c 欢迎来到 Rasch 模型工作坊！', 'color: #4a90d9; font-size: 14px;');
    console.log('%c 联系邮箱: qzhang141@Rasch-GZ.com', 'color: #666; font-size: 12px;');
});
