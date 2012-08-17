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
        
        // シーン更新時処理
        game.rootScene.onenterframe = function() {
            var input = game.input;
            
            // 入力に応じてカメラを移動
            if (input.left) {       // 左
                camera.x -= 0.1;
                camera.centerX -= 0.1;
            }
            if (input.right) {      // 右
                camera.x += 0.1;
                camera.centerX += 0.1;
            }
            if (input.up) {         // 上
                camera.y += 0.1;
                camera.centerY += 0.1;
            }
            if (input.down) {       // 下
                camera.y -= 0.1;
                camera.centerY -= 0.1;
            }
            if (input.a) {          // 前進
                camera.z -= 0.1;
                camera.centerZ -= 0.1;
            }
            if (input.b) {          // 後退
                camera.z += 0.1;
                camera.centerZ += 0.1;
            }
            
            // ラベル更新
            infoLabel.text = "Camera (" +
                camera.x.toFixed(1) + "," +
                camera.y.toFixed(1) + "," +
                camera.z.toFixed(1) + ")";
        }
    };
    
    // ゲーム開始
    game.start();
};