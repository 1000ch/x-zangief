window.XZangief = (function () {

  var doc = document.currentScript.ownerDocument;
  var urlRoot = new URL('img', doc.baseURI);

  var ZANGIEF_TYPES = {
    combo: 'zangief-combo.gif',
    fail: 'zangief-fail.gif',
    rolling: 'zangief-rolling.gif',
    piledriver: 'zangief-piledriver.gif',
    win: 'zangief-win.gif'
  };

  function getRandomType() {
    var types = Object.keys(ZANGIEF_TYPES);
    var index = Math.floor(Math.random() * types.length);
    return types[index];
  }

  var XZangiefPrototype = Object.create(HTMLImageElement.prototype);

  XZangiefPrototype.validateType = function () {
    var types = Object.keys(ZANGIEF_TYPES);
    if (types.indexOf(this.zangiefType) === -1) {
      this.zangiefType = getRandomType();
    }
  };

  XZangiefPrototype.getImagePath = function () {
    var imageUrl = new URL('img/' + ZANGIEF_TYPES[this.zangiefType], urlRoot);
    return imageUrl.href;
  };

  XZangiefPrototype.createdCallback = function () {

    this.zangiefType = this.getAttribute('zangief-type');
    this.validateType();

    this.src = this.getImagePath();
  };

  XZangiefPrototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {

    if (attributeName === 'zangief-type') {
      this.zangiefType = newValue;
      this.validateType();

      this.src = this.getImagePath();
    }
  };

  return document.registerElement('x-zangief', {
    prototype: XZangiefPrototype,
    extends: 'img'
  });
})();