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
        
        // スコアを生成, 表示
        var scoreLabel = new ScoreLabel(10, 60);
        scoreLabel.moveTo(50, 50);
        scoreLabel.score = 0;
        scene.addChild(scoreLabel);
        
        // 画面タッチ開始時処理
        scene.ontouchstart = function() {
            scoreLabel.score += 100;
        };
    };
    
    // ゲーム開始
    game.start();
};