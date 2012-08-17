/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "white";
        
        // バーを生成, 表示
        var bar = new Bar(10, 10);
        bar.moveTo(50, 10);
        bar.value = 100;
        bar.maxvalue = 100;
        scene.addChild(bar);
        
        // 画面タッチ時処理
        scene.ontouchstart = function() {
            bar.value -= 10;
            
            if (bar.value <= 0) {
                alert("Game Over!!");
            }
        };
    };
    
    // ゲーム開始
    game.start();
};