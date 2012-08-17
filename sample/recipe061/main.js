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
    // キーを割り当てる(キーバインド)
    game.keybind('Z'.charCodeAt(0), 'a');   // 'Z' Key を 'a' ボタンとして割り当てる
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // 画像を生成, 表示
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets[CHARA_IMAGE];
        sprite.moveTo(50, 50);
        scene.addChild(sprite);
        
        // 画面タッチ移動時処理
        scene.ontouchmove = function(e) {
            sprite.x = e.x - (sprite.width/2);
            sprite.y = e.y - (sprite.height/2);
        };
    };
    
    // ゲーム開始
    game.start();
};