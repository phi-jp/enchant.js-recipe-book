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
        
        // プリミティブ生成, 表示(ボックス)
        var prim = new Box(1, 1.5, 1);    // 生成
        prim.x = prim.y = prim.z = 0;   // 位置をセット
        scene3d.addChild(prim);         // scene3d にセット
        
        // タッチ移動値
        var offsetX = 0;
        var offsetY = 0;
        var dx      = 0;
        var dy      = 0;
        var mat     = mat4.create();
        
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
            
            // 回転行列を作成
            mat4.identity(mat);         // 単位行列化
            mat4.rotateY(mat, dx);      // X 軸回転
            mat4.rotateX(mat, dy);      // Y 軸回転
            // 回転行列をセット
            prim.rotation = mat;
        };
        
        // シーン更新時処理
        game.rootScene.onenterframe = function() {
            // 入力に応じて拡縮
            if (game.input.a) {
                prim.scale(1.1, 1.1, 1.1);
            }
            if (game.input.b) {
                prim.scale(0.9, 0.9, 0.9);
            }
        };
    };
    
    // ゲーム開始
    game.start();
};