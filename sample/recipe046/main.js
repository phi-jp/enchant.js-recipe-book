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
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "#aaa";
        
        // ラベルを生成, 表示
        var label = new Label("Time : 0");
        label.moveTo(10, 10);
        // フォントを指定
        label.font = "32px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        scene.addChild(label);
        
        // シーン更新処理
        var timer = 600;
        scene.onenterframe = function() {
            var time = Math.floor(timer/game.fps);
            
            // テキスト変更
            label.text = "Time : " + time;
            
            // 一定フレームに達したをチェック
            if (timer === 300) {
                // 色を変更
                label.color = "red";
            }
            
            // 一定フレーム以下だった場合
            if (timer < 300) {
                // 点滅
                if (game.frame % 10 == 0) {
                    label.opacity = 0;
                }
                else {
                    label.opacity = 1;
                }
            }
            
            // タイマーを減らす
            timer -= 1;
        };
    };
    
    // ゲーム開始
    game.start();
};