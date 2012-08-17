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
        var sprite = new Sprite(32, 32);
        sprite.moveTo(-50, -50);
        sprite.image = game.assets[CHARA_IMAGE];
        scene.addChild(sprite);
        
        // tl によるアニメーション
        sprite.tl.moveTo(160-16, 160-16, 30).delay(30).scaleBy(8, 30).delay(60).scaleTo(1, 30);
    };
    
    // ゲーム開始
    game.start();
};