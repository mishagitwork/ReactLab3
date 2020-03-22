import React from "react";
// export default class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.name === "isGoing" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             Пойду:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Количество гостей:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>
//         <button
//           onClick={() => {
//             console.log(this.state);
//           }}
//         >
//           Button
//         </button>
//       </div>
//     );
//   }
// }
// export default class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "coconut", color: "coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     console.log(target.name + ":" + target.value);
//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     alert("Ваш любимый вкус: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Выберите ваш любимый вкус:
//           <select
//             name="value"
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <label>
//           Выберите ваш любимый вкус:
//           <select
//             name="color"
//             value={this.state.color}
//             onChange={this.handleChange}
//           >
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
const onFinish = values => {
  console.log("Success:", values);
};

const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};
export default class CustomizedForm extends React.Component {
  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
