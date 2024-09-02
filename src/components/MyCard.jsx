import { Card, Flex, Typography } from "antd"

export const MyCard = ({ data }) => {
    const { Title, Text } = Typography;
    return <Card style={{ maxWidth: 600, margin: 40 }}>
        <Title level={3}>Sent data:</Title>
        <Flex vertical gap="small">
            <Text><Text strong>Name:</Text> {data.name}</Text>
            <Text><Text strong>Description:</Text> {data.description}</Text>
        </Flex>

    </Card>
}