/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var SAMPLE_BGM      = "http://enchantjs.com/assets/sounds/bgm01.wav";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(SAMPLE_BGM);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // シーン更新処理
        scene.onenterframe = function() {
            // BGM ループ再生
            game.assets[SAMPLE_BGM].play();
        };
    };
    
    // ゲーム開始
    game.start();
};