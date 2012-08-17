/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var SAMPLE_BGM      = "http://enchantjs.com/assets/sounds/bgm02.wav";


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
        
        // BGM 再生
        game.assets[SAMPLE_BGM].play();
        game.assets[SAMPLE_BGM].volume = 1.0;
        
        // ボリューム表示用ラベル
        var volumeLabel = new Label("Volume : 1");
        volumeLabel.moveTo(10, 10);
        volumeLabel.color = "white";
        volumeLabel.font = "16px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        scene.addChild(volumeLabel);

        // ボリュームアップボタン用エンティティを生成, 表示
        var upEntity = new Entity();
        upEntity.width  = 50;
        upEntity.height = 50;
        upEntity.moveTo(160-25-60, 160-25);  // 中心に移動
        upEntity.backgroundColor = "red";
        // タッチ開始時処理
        upEntity.ontouchstart = function() {
            var bgm = game.assets[SAMPLE_BGM];
            // ボリューム変更
            if (bgm.volume >= 1) {
                alert("ボリュームはすでに最大です!!");
            }
            else {
                // ボリュームアップ
                bgm.volume += 0.1;
            }
            // ラベル表示更新
            volumeLabel.text = "Volume : " + bgm.volume.toFixed(1);
        };
        scene.addChild(upEntity);
        
        // ボリュームダウンボタン用エンティティを生成, 表示
        var downEntity = new Entity();
        downEntity.width  = 50;
        downEntity.height = 50;
        downEntity.moveTo(160-25+60, 160-25);  // 中心に移動
        downEntity.backgroundColor = "blue";
        // タッチ開始時処理
        downEntity.ontouchstart = function() {
            var bgm = game.assets[SAMPLE_BGM];
            // ボリューム変更
            if (bgm.volume <= 0.1) {
                alert("ボリュームはすでに最小です!!");
            }
            else {
                // ボリュームアップ
                bgm.volume -= 0.1;
            }
            // ラベル表示更新
            volumeLabel.text = "Volume : " + bgm.volume.toFixed(1);
        };
        scene.addChild(downEntity);
    };
    
    // ゲーム開始
    game.start();
};