/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 640;


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // キーを割り当てる(キーバインド)
    game.keybind('Z'.charCodeAt(0), 'a');   // 'Z' Key を 'a' ボタンとして割り当てる
    game.keybind('X'.charCodeAt(0), 'b');   // 'X' Key を 'b' ボタンとして割り当てる
    
    // ロード完了時の処理
    game.onload = function() {
        // 3D 用シーン生成
        var scene3d = new Scene3D();
        
        // ライト生成
        var light = new DirectionalLight(); // 平行光源生成
        light.directionZ = 1;               // 向き
        light.color = [1.0, 1.0, 1.0];      // 色
        scene3d.setDirectionalLight(light); // scene3d にセット
        
        // カメラ生成
        var camera = new Camera3D();                                // カメラ生生
        camera.x = 0; camera.y = 2; camera.z = 10;                  // カメラ位置をセット
        camera.centerX = 0; camera.centerY = 0; camera.centerZ = 0; // 注視点をセット
        scene3d.setCamera(camera);                                  // scene3d にセット
        
        // キューブ
        var cube = new Cube();          // 球体生成
        cube.x = cube.y = cube.z = 0;   // 位置をセット
        cube.mesh.texture = new Texture("images/enchant.png");
        scene3d.addChild(cube);         // scene3d にセット
        
        // 情報用ラベル
        var infoLabel = new Label("");
        infoLabel.moveTo(20, 20);
        infoLabel.color = "white";
        infoLabel.font  = "20px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
        game.rootScene.addChild(infoLabel);
        
        // タッチ移動値
        var offsetX = 0;
        var offsetY = 0;
        var dx      = 0;
        var dy      = 0;
        
        // 画面タッチ開始時処理
        game.rootScene.ontouchstart = function(e) {
            offsetX = e.x;
            offsetY = e.y;
        };
        
        // 画面タッチ移動時処理
        game.rootScene.ontouchmove = function(e) {
            // 移動値をプラスする
            dx += (e.x-offsetX)/100.0;
            offsetX = e.x;
            dy += (e.y-offsetY)/100.0;
            offsetY = e.y;
            
            // 座標を更新
            cube.x = dx;
            cube.y = -dy;
            
            // ラベル更新
            infoLabel.text = "Cube (" +
                cube.x.toFixed(1) + "," +
                cube.y.toFixed(1) + "," +
                cube.z.toFixed(1) + ")";
        };
    };
    
    // ゲーム開始
    game.start();
};