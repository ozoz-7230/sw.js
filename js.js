
        //idがもつ要素をElementオブジェクトとし,変数に格納
        const STOP_WATCH = document.getElementById('stop_watch');
        const START = document.getElementById('start');
        const STOP = document.getElementById('stop');
        const RESET = document.getElementById('reset');

        let minutes = 0;  // 初期値を0とする
        let seconds = 0;
        
        
                //関数の定義
        let stopWatch = () => {
            seconds++;  //secondsに1を足す
            if (seconds % 60== 0) {   //secondsを60で割った時の余りが0
                minutes++;  //minutesに1を足す
                seconds= 0;    //secondsを0にする
            }
            STOP_WATCH.innerHTML =  ('00'+minutes).slice(-2)+':'+('00' + seconds).slice(-2) ;
        };

        

        let interval;   //setInterval、clearIntervalを使用する際の変数

        //startボタンを押したときの処理
        START.addEventListener('click' , () => {
              //1000msec毎にstopWatch関数を実行する
              interval = setInterval(stopWatch, 1000); 
            START.disabled = true;  
            STOP.disabled = false;  
            RESET.disabled = true;  
        });

        //stopボタンを押したときの処理
        STOP.addEventListener('click' , () => {
            clearInterval(interval);    
            START.disabled = false;     
            STOP.disabled = true;       
            RESET.disabled = false;     
        });
        
        
        //resetボタンを押した時の処理
        RESET.addEventListener('click' , () => {
            STOP_WATCH.innerHTML = '00:00';    
            minutes = 0;    
            seconds = 0;    
            START.disabled = false;     
            STOP.disabled = true;       
            RESET.disabled = true;      
        })