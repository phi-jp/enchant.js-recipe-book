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
        scene.backgroundColor = "#aaa";
        
        // ラベルを生成, 表示
        var label = new Label("0 touch!!");
        label.moveTo(10, 10);
        // フォントを指定
        label.font = "32px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        scene.addChild(label);
        
        // 画面タッチ時処理
        var touchNum = 0;
        scene.ontouchstart = function() {
            touchNum += 1;
            // ラベル表示更新
            label.text = touchNum + " touch!!";
        };
    };
    
    // ゲーム開始
    game.start();
};