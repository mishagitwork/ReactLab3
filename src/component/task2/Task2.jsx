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
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }
  onKeyPressed(e) {
    const items = this.state.items.map((item) => {
      if (item.isDragging === true) {
        switch (e.key) {
          case "ArrowLeft":
            item.x = item.x > 10 ? (item.x -= 10) : item.x;
            return item;
          case "ArrowUp":
            item.y = item.y > 10 ? (item.y -= 10) : item.y;
            return item;
          case "ArrowRight":
            item.x =
              item.x + item.width < sizePlace - 10 ? (item.x += 10) : item.x;
            return item;
          case "ArrowDown":
            item.y =
              item.y + item.height < sizePlace - 10 ? (item.y += 10) : item.y;
            return item;
          default:
            return item;
        }
      } else return item;
    });
    console.log(items);
    this.setState({ items });
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
  onClick = (e) => {
    const id = e.target.name();
    const items = this.state.items.slice();
    const item = items.find((i) => i.id === id);
    const index = items.indexOf(item);
    items.splice(index, 1);
    item.isDragging = !item.isDragging;
    items.push(item);
    this.setState({
      items,
    });
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
                    x={item.x}
                    y={item.y}
                    width={item.width}
                    height={item.height}
                    fill={item.color}
                    shadowBlur={item.isDragging ? 10 : 0}
                    onClick={this.onClick}
                    onKeyDown={this.onKeyPressed}
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
