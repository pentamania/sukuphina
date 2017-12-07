
/*
 * ユニット表示アイコン
 */
phina.define('UnitIcon', {
  superClass: 'phina.display.CircleShape',

  init: function(id, label) {
    this.superInit({
      radius: MARKER_RADIUS,
      strokeWidth: MARKER_STROKE_WIDTH,
      stroke: "magenta",
      fill: "pink",
    });
    this.setInteractive(true);
    this.id = id;

    // ナンバー表記
    label = (label != null) ? label : id+"";
    Label({
      text: label,
      fontSize: 60,
    })
    .addChildTo(this)
    ;
  },

  fireEffect: function() {
    EffectWave().addChildTo(this);
  },

});


/**
 * ターゲットマーカー（ノーツ）
 */
phina.define('TargetMarker', {
  superClass: 'phina.display.CircleShape',

  init: function(targetTime, trackId, type) {
    this.superInit({
      radius: MARKER_RADIUS,
      strokeWidth: MARKER_STROKE_WIDTH,
      stroke: "red",
      fill: false,
    });

    this.visible = false;
    this.scaleX = this.scaleY = 0;
    this.isAwake = true;

    this.targetTime = targetTime;
    this.trackId = trackId;
    this.vector = phina.geom.Vector2(
      Math.cos((trackId * ICON_INTERVAL_DEGREE).toRadian()),
      Math.sin((trackId * ICON_INTERVAL_DEGREE).toRadian())
    );

    // カウント表示
    // debug
    // Label({
    //   text: targetTime + "",
    //   fontSize: 60,
    // })
    // .addChildTo(this)
  },

});


/**
 * エフェクト：白フェードアウト円
 */
phina.define('EffectWave', {
  superClass: 'phina.display.CircleShape',

  init: function(options) {
    this.superInit({
      radius: MARKER_RADIUS,
      stroke: false,
      fill: "white",
    });

    this.tweener
    .to({scaleX:1.7, scaleY:1.7, alpha:0}, 250)
    .call(function() {
      this.remove();
    }, this);
  },

  // fire: function() {
  // },

  // reset: function() {
  // }

});


/**
 * エフェクト："PERFECT!"など
 */
phina.define('RateLabel', {
  superClass: 'phina.display.Label',

  init: function(textParam) {
    this.superInit({
      text: textParam.text,
      fontSize: 60,
      strokeWidth: 8,
      fill: "pink",
      stroke: "white",
    });

    this.tweener
    .set({scaleX: 0.2, scaleY: 0.2, alpha: 0})
    .to({scaleX:1, scaleY:1, alpha:1}, 130, "easeOutCirc")
    .wait(250)
    .to({alpha:0}, 100)
    .call(function() {
      this.remove();
    }, this);
  },
});
