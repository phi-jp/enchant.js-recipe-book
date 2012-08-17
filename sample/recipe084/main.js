/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var BG01_IMAGE = "avatarBg1.png";
var BG02_IMAGE = "avatarBg2.png";
var BG03_IMAGE = "avatarBg3.png";


/*
 * グローバル変数
 */
var game = null;


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(BG01_IMAGE, BG02_IMAGE, BG03_IMAGE);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // 背景を生成, 表示
        var bg = new AvatarBG(4);
        bg.y = 50;
        scene.addChild(bg);
        
        // シーン更新処理
        scene.onenterframe = function() {
            // スクロール
            bg.scroll(game.frame*2);
        };
    };
    
    // ゲーム開始
    game.start();
};
