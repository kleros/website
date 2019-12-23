import $ from "jquery";
import p5 from "p5";
export default function ca_sketch() {
  "use strict";

  const dotSize = 2;
  const maxConnectionLength = 20;
  const cellWidth = 15;
  const cellHeight = 15;
  const ImageScale = 1.666666;
  let dotColor = "#d8d8d8";
  let connectionColor = "#8593d3";
  let input = " ";
  let numOfDots = 0;
  let time = 0;
  let shape;

  // Dot class
  class Dot {
    constructor(anchor, position, radius, direction, startAngle, sketch) {
      this.p = sketch;
      this.size = dotSize;
      this.anchor = anchor;
      this.position = position;
      this.radius = radius;
      this.direction = direction;
      this.startAngle = startAngle;
      this.connections = [];
      this.transporting = false;
      this.transportDir = "";
      this.transportLoc = this.p.createVector(0, 0);
    }

    move() {
      if (!this.transporting) {
        this.position.x =
          this.anchor.x +
          this.p.cos(time * this.direction + this.startAngle) * this.radius;
        this.position.y =
          this.anchor.y +
          this.p.sin(time * this.direction + this.startAngle) * this.radius;
      } else {
        if (this.position.dist(this.transportLoc) < 3) {
          this.transporting = false;
        } else {
          this.position.add(this.transportDir);
        }
      }
    }

    transport(newAnchor) {
      this.anchor = newAnchor;
      this.transporting = true;
      this.transportLoc.x =
        this.anchor.x +
        this.p.cos(time * this.direction + this.startAngle) * this.radius;
      this.transportLoc.y =
        this.anchor.y +
        this.p.sin(time * this.direction + this.startAngle) * this.radius;
      this.transportDir = p5.Vector.sub(this.transportLoc, this.position);
      this.transportDir.normalize();
      this.transportDir.mult(4);
    }

    render() {
      this.p.noStroke();
      this.p.fill(dotColor);
      this.p.ellipse(this.position.x, this.position.y, this.size);
    }

    run() {
      this.render();
      this.move();
    }
  }

  class Shape {
    constructor(width, height, x, y, string, sketch) {
      this.p = sketch;
      this.dots = [];
      this.setUp(width, height, x, y, string);
    }

    createGrid() {
      const cols = this.p.floor(this.graphic.width / cellWidth);
      const rows = this.p.floor(this.graphic.height / cellHeight);
      const dots = [];
      for (let col = 0; col <= cols; col++) {
        dots.push([]);
        for (let row = 0; row <= rows; row++) {
          dots[col].push([]);
        }
      }
      return { cols, rows, dots };
    }

    changeString(x, y, string = this.string) {
      this.isChanging = true;
      const fontSize = this.graphic.width / this.p.sqrt(string.length + 10);
      this.x = x;
      this.y = y + fontSize / 3.8;
      this.graphic.background(255);
      this.graphic.noStroke();
      this.graphic.fill(0);
      this.graphic.textAlign(this.p.CENTER);
      this.graphic.textSize(fontSize);
      this.graphic.text(string, this.x, this.y);
      this.graphic.loadPixels();
      this.createDots();
      this.isChanging = false;
      this.image = null;
      this.string = string;
    }

    changeImage(image = this.image) {
      this.isChanging = true;
      this.graphic.background(255);
      image.resize(0, this.graphic.height / ImageScale);
      this.graphic.copy(
        image,
        0,
        0,
        image.width,
        image.height,
        parseInt(this.graphic.width / 2 - image.width / 2),
        parseInt(this.graphic.height / 2 - image.height / 2),
        image.width,
        image.height
      );
      //console.log(this.graphic.width, this.graphic.height, image.width, image.height, parseInt(this.graphic.width / 2 - image.width / 2), parseInt(this.graphic.height / 2 - image.height / 2));
      this.graphic.loadPixels();
      this.createDots();
      this.isChanging = false;
      this.string = null;
      this.image = image;
    }

    setUp(width, height, x, y, string) {
      this.graphic = this.p.createGraphics(width, height);
      this.grid = this.createGrid();
      if (string || this.string) this.changeString(x, y, string);
      else this.changeImage();
    }

    createDots() {
      const freeDots = this.dots;
      this.dots = [];
      for (let i = 0; i < numOfDots; i++) {
        const x = this.p.floor(this.p.random(this.graphic.width));
        const y = this.p.floor(this.p.random(this.graphic.height));
        const pd = this.p.pixelDensity();
        const index = 4 * pd * (x + y * this.graphic.width * pd);
        const pixel = this.graphic.pixels[index];
        if (pixel < 255) {
          const anchor = this.p.createVector(x, y);
          if (freeDots.length === 0) {
            const radius = this.p.random(5, 10);
            const startPosition = this.p.createVector(
              anchor.x + radius,
              anchor.y
            );
            const startAngle = this.p.random(this.p.TWO_PI);
            const prob = this.p.random();
            let direction;
            if (prob < 0.5) {
              direction = -1;
            } else {
              direction = 1;
            }
            const dot = new Dot(
              anchor,
              startPosition,
              radius,
              direction,
              startAngle,
              this.p
            );
            this.dots.push(dot);
          } else {
            const dot = freeDots.pop();
            dot.transport(anchor);
            this.dots.push(dot);
          }
        }
      }
    }

    static checkForConnect(dotA, dotB, numOfConnections, p) {
      let newNumOfConnections = numOfConnections;
      const distance = p.dist(
        dotA.position.x,
        dotA.position.y,
        dotB.position.x,
        dotB.position.y
      );
      if (distance > 0 && distance < maxConnectionLength) {
        const alpha = p.map(newNumOfConnections, 0, 10, 0, 1);
        connectionColor._array[3] = alpha;
        p.stroke(connectionColor);
        p.line(
          dotA.position.x,
          dotA.position.y,
          dotB.position.x,
          dotB.position.y
        );
        newNumOfConnections++;
      }
      return newNumOfConnections;
    }

    registerDots() {
      this.grid = this.createGrid();
      for (let i = 0; i < this.dots.length; i++) {
        let col = this.p.floor(this.dots[i].position.x / cellWidth);
        let row = this.p.floor(this.dots[i].position.y / cellHeight);
        col = col < 0 ? 0 : col > this.grid.cols ? this.grid.cols : col;
        row = row < 0 ? 0 : row > this.grid.rows ? this.grid.rows : row;
        this.grid.dots[col][row].push(this.dots[i]);
      }
    }

    connectDots() {
      let numOfConnections = 1;
      for (let col = 1; col < this.grid.cols - 1; col++) {
        for (let row = 1; row < this.grid.rows - 1; row++) {
          for (let i = 0; i < this.grid.dots[col][row].length; i++) {
            // Check all surrounding cells
            for (let addCol = -1; addCol <= 1; addCol++) {
              for (let addRow = -1; addRow <= 1; addRow++) {
                for (
                  let j = 0;
                  j < this.grid.dots[col + addCol][row + addRow].length;
                  j++
                ) {
                  if (!(addCol === 0 && addRow === 0) || i !== j) {
                    numOfConnections = Shape.checkForConnect(
                      this.grid.dots[col][row][i],
                      this.grid.dots[col + addCol][row + addRow][j],
                      numOfConnections,
                      this.p
                    );
                  }
                }
              }
            }
            numOfConnections = 1;
          }
        }
      }
    }

    run() {
      if (!this.isChanging) {
        this.registerDots();
        this.connectDots();
        for (let i = 0; i < this.dots.length; i++) {
          this.dots[i].run();
        }
      }
    }
  }

  $(document).ready(function() {
    var sketch = function(p) {
      let theContainerSelector = ".ca_illustration_holder";
      let theContainer = $(theContainerSelector);

      let theWidth = theContainer.width();
      let theHeight = theContainer.height();
      let img;

      p.preload = function() {
        img = p.loadImage("/img/logo.svg", function() {
          //console.log('IMA IMG', img.width, img.height);
        });
      };

      p.setup = function() {
        dotColor = p.color(dotColor);
        connectionColor = p.color(connectionColor);
        const canvas = p.createCanvas(
          theContainer.width(),
          theContainer.height()
        );
        canvas.parent(theContainer.get(0));
        //p.background(20);
        p.clear();
        numOfDots = p.max(theWidth, theHeight) * 6;
        shape = new Shape(
          theWidth,
          theHeight,
          theWidth / 2,
          theHeight / 2,
          input,
          p
        );
        //console.log('WH ', theWidth, theHeight);
        //console.log('IMA PRELOADED IMG', img.width, img.height);
        shape.changeImage(img);
        input = "";
      };

      p.draw = function() {
        //p.background(20);
        p.clear();
        shape.run();
        time += 0.05;
      };

      p.windowResized = function() {
        theWidth = theContainer.width();
        theHeight = theContainer.height();
        p.resizeCanvas(theWidth, theHeight);
        shape.setUp(theWidth, theHeight, theWidth / 2, theHeight / 2);
      };
    };

    var theSketch;
    $(".ca_illustration_holder > img")
      .one("load", function() {
        theSketch = new p5(sketch);
      })
      .each(function() {
        if (this.complete) $(this).trigger("load");
      });
  });
}
