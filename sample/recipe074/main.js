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
        
        // 画像ラベルを生成, 表示
        var mutableText = new MutableText(10, 10, 98);
        mutableText.moveTo(50, 50);
        mutableText.text = "MutableText";
        scene.addChild(mutableText);
    };
    
    // ゲーム開始
    game.start();
};