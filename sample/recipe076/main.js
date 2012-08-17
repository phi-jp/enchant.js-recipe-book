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
        scene.backgroundColor = "black";
        
        // タイムラベルを生成, 表示
        var timeLabel = new TimeLabel(50, 50, "countdown");
        timeLabel.time = 64;
        scene.addChild(timeLabel);
        
        // シーン更新処理
        scene.onenterframe = function() {
            // タイムオーバー判定
            if (timeLabel.time < 0) {
                alert("Time Over!!");
                scene.onenterframe = null;
            }
        };
    };
    
    // ゲーム開始
    game.start();
};