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
        camera.x = 0; camera.y = 2; camera.z =  10;                 // カメラ位置をセット
        camera.centerX = 0; camera.centerY = 0; camera.centerZ = 0; // 注視点をセット
        scene3d.setCamera(camera);                                  // scene3d にセット
        
        // キューブ
        var cube = new Cube();          // 球体生成
        cube.x = cube.y = cube.z = 0;   // 位置をセット
        scene3d.addChild(cube);         // scene3d にセット
    };
    
    // ゲーム開始
    game.start();
};