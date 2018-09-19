const $ = require('jquery');
const G = require('../../src/index');
const Canvas = G.Canvas;

$('<div id="c1"></div>').appendTo('body');
const canvas = new Canvas({
  containerId: 'c1',
  renderer: 'svg',
  width: 500,
  height: 500,
  pixelRatio: 1
});
const dom = canvas.addShape('dom', {
  attrs: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    html: '<div>我是 html </div>'
  }
});
canvas.on('click', () => {
  dom.remove();
  console.log(canvas.getShape(150, 150));
  canvas.addShape('dom', {
    attrs: {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      html: '<div>我是 html </div>'
    }
  });
});
canvas.on('dblclick', () => {
  console.log(canvas.getShape(150, 150));
});
