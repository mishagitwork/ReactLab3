import React from "react";
import { Button, Row, Col } from "antd";
import style from "./style.module.css";
import Task1 from "../task1/Task1";
import Task2 from "../task2/Task2";
import Task3 from "../task3/Task3";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "first"
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div className={style.header}>
              <Button
                type="primary"
                size="large"
                onClick={() => this.setState({ task: "first" })}
                className={style.headerButton}
              >
                Часть 1
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => this.setState({ task: "second" })}
                className={style.headerButton}
              >
                Часть 2
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => this.setState({ task: "third" })}
                className={style.headerButton}
              >
                Часть 3
              </Button>
            </div>
          </Col>

          <Col span={6}></Col>
        </Row>

        <br />

        {this.state.task === "first" && <Task1 />}
        {this.state.task === "second" && <Task2 />}
        {this.state.task === "third" && <Task3 />}
      </div>
    );
  }
}

export default Main;
