
/**
 * タイトル
 */
phina.define('TitleScene', {
  superClass: 'phina.display.DisplayScene',

  init: function(params) {
    this.superInit(params);
    this.backgroundColor = params.backgroundColor;

    // タイトルラベル
    Label({
      text: "SUKUPHINA",
      fill: "white",
      stroke: "#2F3CEC",
      strokeWidth: 6,
      fontSize: 100,
    })
    .setPosition(this.gridX.center(), this.gridY.span(6))
    .addChildTo(this)

    var touchLabel = Label({
      text: "タップでSTART",
      fill: "white",
      stroke: "#2F3CEC",
      strokeWidth: 6,
      fontSize: 64,
    })
    .setPosition(this.gridX.center(), this.gridY.span(12))
    .addChildTo(this);

    // 明滅させる
    touchLabel.tweener.clear()
    .setLoop(true)
    .to({alpha: 0}, 700)
    .to({alpha: 1}, 700)
    ;

    // モバイルでの再生制限アンロックのため、画面タッチ時にSoundを無音再生
    this.on('enter', function() {
      var event = "touchstart";
      var dom = this.app.domElement;
      dom.addEventListener(event, (function() {
        return function f() {
          var context = phina.asset.Sound.getAudioContext();
          var buf = context.createBuffer(1, 1, 22050);
          var src = context.createBufferSource();
          src.buffer = buf;
          src.connect(context.destination);
          src.start(0);

          dom.removeEventListener(event, f, false);
        }
      }()), false);

      // シーン遷移
      this.on('pointend', function() {
        this.exit();
      });
    });

  },

});
