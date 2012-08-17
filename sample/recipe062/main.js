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
        sprite.moveTo(160-16, 160-16);
        scene.addChild(sprite);
        
        // 移動ベクトルを初期化
        sprite.dx = 0;
        sprite.dy = 0;
        
        // 更新処理
        sprite.onenterframe = function() {
            // 移動
            this.moveBy(this.dx, this.dy);
        };
        
        // 加速度センサーの値に応じて移動ベクトルを変更
        window.addEventListener("devicemotion", function(e) {
            var gravity = e.accelerationIncludingGravity;
            sprite.dx += gravity.x*0.02;
            sprite.dy -= gravity.y*0.02;
        });
    };
    
    // ゲーム開始
    game.start();
};