const timer = 60000    // ミリ秒で間隔の時間を指定
window.addEventListener('load',function(){
  setInterval('location.reload()',timer);
});