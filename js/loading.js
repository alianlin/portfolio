(function () {
		var $load = document.querySelector('.loading');
		var $iFrame = document.getElementById('iframe_result')
        // 获取进度条 div
        var $progress = document.getElementById('progress');

        // 初始进度，1%
        var progress = 0;

        // 生成随机数
        var random = function(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        // 跑进度
        var onprogress = function () {
            // 随机时间
            var timeout = random(10, 30);

            setTimeout(function () {
                // 如果页面加载完毕，则直接进度到 100%
                if(window.loaded){
                    $progress.style.width = '100%';
                    $load.classList.add("fade-out");
                    $iFrame.classList.add("fade-in");
                    return;
                    
                }

                // 随机进度
                progress += random(1, 5);

                // 随机进度不能超过 98%，以免页面还没加载完毕，进度已经 100% 了
                if(progress > 90){
                    progress = 90;
                }

                $progress.style.width = progress + '%';
                onprogress();
            }, timeout);
        };

        // 开始跑进度
        onprogress();

        window.onload = function(){
            window.loaded = true;
        };
    })();