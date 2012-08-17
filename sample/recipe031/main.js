/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var CHARA_IMAGE     = "http://enchantjs.com/assets/images/chara1.gif";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(CHARA_IMAGE);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // 画像を生成, 表示
        var sprite00 = new Sprite(32, 32);
        sprite00.image = game.assets[CHARA_IMAGE];
        sprite00.moveTo(50, 50);
        sprite00.rotate(45);        // メソッドで回転
        scene.addChild(sprite00);
        
        // 画像を生成, 表示
        var sprite01 = new Sprite(32, 32);
        sprite01.image = game.assets[CHARA_IMAGE];
        sprite01.moveTo(50, 150);
        sprite01.rotation = 180;     // プロパティで回転
        scene.addChild(sprite01);
    };
    
    // ゲーム開始
    game.start();
};