import React from "react";
import Konva from "konva";
import { Row, Col, Button } from "antd";
import { Stage, Layer, Rect } from "react-konva";
import style from "./style.module.css";
const sizePlace = 500;

function generateItems() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    var width = (Math.random() * sizePlace) / 5 + 25;
    var height = (Math.random() * sizePlace) / 5 + 25;
    var x = Math.random() * sizePlace;
    if (x + width > sizePlace) {
      x -= x + width - sizePlace;
    }
    var y = Math.random() * sizePlace;
    if (y + width > sizePlace) {
      y -= y + width - sizePlace;
    }
    items.push({
      isDragging: false,
      width: width,
      height: height,
      x: x,
      y: y,
      id: "node-" + i,
      color: Konva.Util.getRandomColor(),
    });
  }
  return items;
}

export default class Task2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: generateItems(),
    };
  }
  addRect = () => {
    var width = (Math.random() * sizePlace) / 5 + 25;
    var height = (Math.random() * sizePlace) / 5 + 25;
    var x = Math.random() * sizePlace;
    if (x + width > sizePlace) {
      x -= x + width - sizePlace;
    }
    var y = Math.random() * sizePlace;
    if (y + height > sizePlace) {
      y -= y + height - sizePlace;
    }
    var items = this.state.items;
    items.push({
      isDragging: false,
      width: width,
      height: height,
      x: x,
      y: y,
      id: "node-" + this.state.items.length,
      color: Konva.Util.getRandomColor(),
    });
    console.log(items[items.length - 1]);
    this.setState({ items });
  };

  handleDragStart = (e) => {
    const id = e.target.name();
    const items = this.state.items.slice();
    const item = items.find((i) => i.id === id);
    const index = items.indexOf(item);
    items.splice(index, 1);
    item.isDragging = true;
    items.push(item);
    this.setState({
      items,
    });
  };
  onDragEnd = (e) => {
    const id = e.target.name();
    const items = this.state.items.slice();
    const item = this.state.items.find((i) => i.id === id);
    const index = this.state.items.indexOf(item);
    items[index] = {
      ...item,
      isDragging: false,
      x: e.target.x(),
      y: e.target.y(),
    };
    this.setState({ items });
  };
  render() {
    return (
      <Row>
        <Col span={18} className={style.mainPlace}>
          <div className={style.place}>
            <Stage width={sizePlace} height={sizePlace}>
              <Layer>
                {this.state.items.map((item) => (
                  <Rect
                    key={item.id}
                    name={item.id}
                    draggable
                    x={item.x}
                    y={item.y}
                    width={item.width}
                    height={item.height}
                    fill={item.color}
                    shadowBlur={item.isDragging ? 10 : 0}
                    onDragStart={this.handleDragStart}
                    onDragEnd={this.onDragEnd}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </Col>
        <Col span={6}>
          <Button onClick={() => this.addRect()}>Добавить</Button>
        </Col>
      </Row>
    );
  }
}
