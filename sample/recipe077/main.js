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
        
        // ライフラベルを生成, 表示
        var lifeLabel = new LifeLabel(50, 50, 3);
        scene.addChild(lifeLabel);
        
        // 画面タッチ時処理
        scene.ontouchstart = function() {
            lifeLabel.life -= 1;
            
            if (lifeLabel.life <= 0) {
                alert("Game Over!!");
            }
        };
    };
    
    // ゲーム開始
    game.start();
};