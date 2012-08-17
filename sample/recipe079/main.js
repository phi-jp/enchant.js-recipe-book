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
        scene.backgroundColor = "black";
        
        // ボタンを生成, 表示(ダーク)
        var button = new Button("Default Button");
        button.moveTo(10, 10);
        button.ontouchstart = function() { scene.backgroundColor = "red" };
        scene.addChild(button);
        
        // ボタンを生成, 表示(ライト)
        var lightButton = new Button("Light Button", "light");
        lightButton.moveTo(10, 50);
        lightButton.ontouchstart = function() { scene.backgroundColor = "green" };
        scene.addChild(lightButton);
        
        // ボタンを生成, 表示(ブルー)
        var blueButton = new Button("Blue Button", "blue");
        blueButton.moveTo(10, 90);
        blueButton.ontouchstart = function() { scene.backgroundColor = "blue" };
        scene.addChild(blueButton);
    };
    
    // ゲーム開始
    game.start();
};