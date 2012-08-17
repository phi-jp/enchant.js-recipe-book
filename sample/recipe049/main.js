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
 * ランダムな数値を生成
 */
var randint = function(min, max) {
    return window.Math.floor( Math.random()*(max-min+1) ) + min;
};


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
        scene.backgroundColor = "#000";
        
        // スプライトを生成, 表示
        var sprite = new Sprite(100, 100);
        sprite.moveTo(50, 50);
        scene.addChild(sprite);
        
        // サーフェスを生成
        var surface = new Surface(100, 100);
        var context = surface.context;
        // 四角形を描画
        context.fillStyle = "white";
        context.fillRect(0, 0, 100, 100);
        // 四角形を描画
        context.fillStyle = "blue";
        context.fillRect(10, 10, 80, 80);
        
        // スプライトにサーフェスを画像としてセット
        sprite.image = surface;
    };
    
    // ゲーム開始
    game.start();
};