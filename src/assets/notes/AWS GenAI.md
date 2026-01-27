# Stream Agent Response with ==.invoke_agent==

## Stream with .py file
[stream_agent_response.py](https://github.com/MertAli07/developer_diary/blob/main/aws_agent/stream_agent_response.py)

This config is important if you want the agent to stream the response:
```python
streamingConfigurations={'streamFinalResponse': True}
```
## Stream with Lambda URL Function
We also need to adjust the lambda function to stream our response:
[lambda.js](https://github.com/MertAli07/developer_diary/blob/main/aws_agent/lambda.js)

- **Runtime:** Node.js 24

Use following to pass env variables:
```
const AGENT_ID = process.env.AGENT_ID;
```
## Stream with API Gateway (Websocket)
The lambda to handle requests from AWS API Gateway.
[bedrock-agent-ws-handler.js](https://github.com/MertAli07/developer_diary/blob/main/aws_agent/bedrock-agent-ws-handler.js)

It is a good practice to link every route to a lambda function and handle them in the code.
## Create an Action Group
First, create an OpenAPI schema for the agent to understand the tool:
[metu_faq_rss.yaml](https://github.com/MertAli07/developer_diary/blob/main/aws_agent/metu_faq_rss.yaml)

Then, configure the ==Resource-based policy statements==:
**Statement ID:** AllowBedrockInvoke
**Principal:** bedrock.amazonaws.com
**Action:** lambda:InvokeFunction

Finally, we create the lambda for agent to use:
[metu_rss_lambda.py](https://github.com/MertAli07/developer_diary/blob/main/aws_agent/metu_rss_lambda.py)

>[!important] Mind the **returned json**. Its fields and values must be very specific. See [docs](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html).

