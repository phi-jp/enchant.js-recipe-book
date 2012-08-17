/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var ICON_IMAGE      = "http://enchantjs.com/assets/images/space1.gif";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(ICON_IMAGE);
    
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
        // 四角形描画
        surface.context.fillStyle = "white";
        surface.context.fillRect(0, 0, 100, 100);
        // 画像を表示
        surface.draw(game.assets[ICON_IMAGE], 0, 0, 50, 100);
        surface.draw(game.assets[ICON_IMAGE], 50, 0, 50, 100);
        
        // スプライトにサーフェスを画像としてセット
        sprite.image = surface;
    };
    
    // ゲーム開始
    game.start();
};