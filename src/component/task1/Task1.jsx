import React from "react";
import {
  List,
  Button,
  Radio,
  Form,
  Input,
  Select,
  Row,
  Col,
  Badge,
  notification
} from "antd";
import style from "./style.module.css";

const layout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 16
  }
};

class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "I will be back", color: "red" },
        { text: "I was back", color: "red" }
      ]
    };
  }

  onFinish = values => {
    var newData = [];
    if (values.radio === "start") {
      newData = [
        { text: values.text, color: values.color },
        ...this.state.data
      ];
    } else
      newData = [
        ...this.state.data,
        { text: values.text, color: values.color }
      ];

    this.setState({ data: newData });
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  onDelete = e => {
    var newData = this.state.data;
    newData.splice(e.target.value, 1);
    this.setState({ data: newData });
  };
  statisticNotification = () => {
    var value = this.state.data.length;
    var Data = this.state.data.map(item => {
      return item.text;
    });
    var allData = Data.join("---");

    notification.open({
      message: "Общее количество записей " + value,
      description: allData
    });
  };

  render() {
    return (
      <Row>
        <Col span={18}>
          <div>
            <List
              style={{ width: "90%", margin: 15 }}
              header={<div>Списочек</div>}
              bordered
              dataSource={this.state.data}
              renderItem={(item, index) => (
                //<List.Item style={{ background: item.color }}> на случай крайней необходимости закрашивать фон
                <List.Item value={index} onClick={this.onDelete}>
                  <Badge color={item.color} text={item.text} />
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col span={6}>
          <div className={style.buttonMain}>
            <Form
              name="basic"
              initialValues={{
                color: "red",
                radio: "start"
              }}
              {...layout}
              onFinish={this.onFinish}
            >
              <Form.Item name="radio">
                <Radio.Group>
                  <Radio value="start">В начало</Radio>
                  <Radio value="end">В конец</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Текст"
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите текст"
                  }
                ]}
              >
                <Input placeholder="Введите текст" />
              </Form.Item>
              <Form.Item label="Цвет" name="color">
                <Select>
                  <Select.Option value="red">Красный</Select.Option>
                  <Select.Option value="green">Зеленый</Select.Option>
                  <Select.Option value="blue">Синий</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className={style.buttonMain}
                >
                  Добавить
                </Button>
              </Form.Item>
            </Form>

            <Button
              type="primary"
              size="large"
              onClick={this.statisticNotification}
              style={{ borderRadius: "10px" }}
              className={style.headerButton}
            >
              Статистика
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Task1;
