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
 * 三角形を描画する
 */
var triangle = function(context, centerX, centerY, radius) {
    // 回転オフセット(-45°)
    var radOffset =-Math.PI/2;
    
    // 描画開始
    context.beginPath();
    for (var i=0; i<3; ++i) {
        var rad = ((Math.PI*2)/3*i) + radOffset;    // 角度
        var x = Math.cos(rad)*radius + centerX;
        var y = Math.sin(rad)*radius + centerY;
        if (i==0) {
            context.moveTo(x, y);
        }
        else {
            context.lineTo(x, y);
        }
    }
    context.closePath();
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
        var sprite = new Sprite(200, 100);
        sprite.moveTo(50, 50);
        scene.addChild(sprite);
        
        // サーフェスを生成
        var surface = new Surface(200, 100);
        var context = surface.context;
        // 三角形を描画する(塗りつぶし描画)
        triangle(context, 40, 40, 20);
        context.fillStyle = "red";      // 塗りつぶし色指定
        context.fill();                 // 塗りつぶし描画
        // 三角形を描画する(ストローク描画)
        triangle(context, 90, 40, 20);
        context.lineWidth   = 4;        // ライン幅指定
        context.strokeStyle = "green";  // ストローク色指定
        context.stroke();               // ストローク描画
        // 三角形を描画する(重ねて描画)
        triangle(context, 140, 40, 20);
        context.lineWidth   = 2;        // ライン幅指定
        context.fillStyle   = "blue";   // 塗りつぶし色指定
        context.strokeStyle = "white";  // ストローク色指定
        context.fill();                 // 塗りつぶし描画
        context.stroke();               // ストローク描画
        
        // スプライトにサーフェスを画像としてセット
        sprite.image = surface;
    };
    
    // ゲーム開始
    game.start();
};







