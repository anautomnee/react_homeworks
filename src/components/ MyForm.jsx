import { Form, Input, Button } from "antd";
import { useState } from "react";
import { MyCard } from "./MyCard";

export const MyForm = () => {
    const [form] = Form.useForm();
    const [userData, setUserData] = useState(null);
    const onFinish = (values) => {
        setUserData({ name: values.name, description: values.description });
    }
    const onFinishFailed = (error) => {
        console.log("Error on failed ", error.errorFields);
    }

    return <>
        <Form form={form}
            name="data"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 600, margin: 40 }}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "The name is already taken" }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true, message: "Description must be included" }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form >
        {userData && <MyCard data={userData} />}
    </>
}