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
        scene.backgroundColor = "#000";
        
        // スプライトを生成, 表示
        var sprite = new Sprite(100, 100);
        sprite.moveTo(50, 50);
        scene.addChild(sprite);
        
        // サーフェスを生成
        var surface = new Surface(100, 100);
        var context = surface.context;
        // 円を描画(塗りつぶし)
        context.fillStyle = "blue";
        context.beginPath();
        context.arc(50, 50, 40, Math.PI*0.6, Math.PI*2, false);
        context.fill();
        // 円を描画(ストローク)
        context.strokeStyle = "white";
        context.beginPath();
        context.lineWidth   = 8;        // ライン幅指定
        context.arc(50, 50, 40, 0, Math.PI*0.6, false);
        context.stroke();
        
        // スプライトにサーフェスを画像としてセット
        sprite.image = surface;
    };
    
    // ゲーム開始
    game.start();
};