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
        sprite.image = game.assets[CHARA_IMAGE];
        sprite.moveTo(50, 50);
        sprite.v = -0.01;       // 透明度の変化値
        // 更新処理
        sprite.onenterframe = function() {
            // 透明度変更
            this.opacity += this.v;
            
            // フェードアウト/フェードイン切り替え
            if (this.opacity <= 0 || this.opacity >= 1.0) {
                this.v *= -1;
            }
        };
        scene.addChild(sprite);
    };
    
    // ゲーム開始
    game.start();
};