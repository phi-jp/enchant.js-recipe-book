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
        
        // ラベルを生成, 表示
        var label = new Label("enchant.js 楽しいよん♪");
        label.moveTo(160-100, -50);
        label.color = "white";
        label.font = "16px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        label.opacity = 0.5;
        scene.addChild(label);
        
        // tl によるアニメーション
        label.tl.moveTo(160-100, 160-16, 30).fadeIn(30).fadeOut(30);
    };
    
    // ゲーム開始
    game.start();
};