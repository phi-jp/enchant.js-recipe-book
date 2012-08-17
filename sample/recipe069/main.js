/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var SAMPLE_BGM      = "http://enchantjs.com/assets/sounds/bgm07.wav";


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
        
        // 状態表示用ラベル
        var stateLabel = new Label("停止中!");
        stateLabel.moveTo(10, 10);
        stateLabel.color = "white";
        stateLabel.font = "16px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        scene.addChild(stateLabel);
        
        // 再生ボタン用エンティティを生成, 表示
        var playEntity = new Entity();
        playEntity.width  = 50;
        playEntity.height = 50;
        playEntity.moveTo(160-25-60, 160-25);  // 中心に移動
        playEntity.backgroundColor = "red";
        // タッチ開始時処理
        playEntity.ontouchstart = function() {
            // BGM を再生する
            var bgm = game.assets[SAMPLE_BGM];
            bgm.play();
            // ラベル更新
            stateLabel.text = "再生中!";
        };
        scene.addChild(playEntity);
        
        // 停止ボタン用エンティティを生成, 表示
        var stopEntity = new Entity();
        stopEntity.width  = 50;
        stopEntity.height = 50;
        stopEntity.moveTo(160-25+60, 160-25);  // 中心に移動
        stopEntity.backgroundColor = "blue";
        // タッチ開始時処理
        stopEntity.ontouchstart = function() {
            // BGM を停止する
            var bgm = game.assets[SAMPLE_BGM];
            bgm.stop();
            // ラベル更新
            stateLabel.text = "停止中!";
        };
        scene.addChild(stopEntity);
    };
    
    // ゲーム開始
    game.start();
};