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
var RUN_FRAME_LIST  = [1, 2];


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
        sprite.frameIndex = 0;
        // 更新処理
        sprite.onenterframe = function() {
            if (game.frame % 2 == 0) {
                // フレームインデックスを調整
                this.frameIndex += 1;
                this.frameIndex %= RUN_FRAME_LIST.length;
                // フレームを変更
                this.frame = RUN_FRAME_LIST[this.frameIndex];
            }
        };
        scene.addChild(sprite);
    };
    
    // ゲーム開始
    game.start();
};