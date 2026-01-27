# Create EC2 Instance, Run Code, Kill Instance
## State Machine Architecture
Here is the exported json: [state_machine.json](https://github.com/MertAli07/developer_diary/blob/main/aws_step_functions/state_machine.json)
![State machine overview](<attachments/Pasted image 20260119134337.png>)
## Setup and Permissions
### Create the EC2 IAM Role
Go to IAM > Roles > Create Role
Select:
- **Trusted Entity Type:** AWS service
- **Use case:** EC2 Role for AWS Systems Manager
- **Role Name:** EC2-SSM-Role

Also, add the **AmazonS3FullAccess** permission.
### Update the Step Function Execution Role
Go to Step Function's Role
Select:
- Add Permissions
- Create inline policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:RunInstances",
                "ec2:TerminateInstances",
                "ec2:DescribeInstances",
                "ssm:SendCommand"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "iam:PassRole",
            "Resource": "arn:aws:iam::YOUR_ACCOUNT_ID:role/EC2-SSM-Role"
        }
    ]
}
```
### Create VPC
- Select "VPC and more"
- **Number of Availability Zones (AZs):** 1
- **Number of public subnets:** 1
- **Number of private subnets:** 0
- **NAT gateways:** None
- **VPC endpoints:** None

- Select "subnets" > "edit subnet settings"
- Check "Enable auto-assign public IPv4 addres"

- In the step function, update the "subnet ID" and "security group ID"

- Go to "EC2" > "AMI Catalog"
- Select an AMI, copy its ID, update it in the step function
## Bug Fixes
> [!info] User: arn:aws:sts::307277300542:assumed-role/StepFunctions-extract_links-role-exqnu0h44/gMuCNCOzBJYgrChdedkLZwExyvvBkfuJ is not authorized to perform: ssm:ListCommandInvocations on resource: arn:aws:ssm:eu-central-1:307277300542:* because no identity-based policy allows the ssm:ListCommandInvocations action (Service: Ssm, Status Code: 400, Request ID: a05720b1-b929-4d40-9757-08f66c7aa5e8) (SDK Attempt Count: 1)

- Go to the role mentioned.
- **add the role:** ssm:ListCommandInvocations
- **add the role:** ssm:GetCommandInvocation