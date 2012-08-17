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
        // ピクセル描画
        for (var i=0; i<512; ++i) {
            var x = randint(0, 100);
            var y = randint(0, 100);
            var r = randint(100, 255);
            var g = randint(100, 255);
            var b = randint(100, 255);
            surface.setPixel(x, y, r, g, b, 255);
        }
        
        // スプライトにサーフェスを画像としてセット
        sprite.image = surface;
    };
    
    // ゲーム開始
    game.start();
};