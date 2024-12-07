# Call Center Support Workflow with AWS Step Functions

This project demonstrates how to use **AWS Step Functions** and **AWS Lambda** to automate a call center's support ticket workflow. The project utilizes serverless computing to orchestrate tasks like opening a case, assigning it to a support representative, resolving it, and escalating unresolved cases.

## Project Overview

The call center workflow is implemented using AWS Step Functions, which coordinates a series of Lambda functions. Each step in the workflow is represented as a state in the state machine, and the workflow progresses based on the output of each state.

### Workflow Description
1. **Open Case**: Creates a new support case.
2. **Assign Case**: Assigns the case to a support representative.
3. **Work on Case**: Simulates working on the case and determines if it is resolved or needs escalation.
4. **Close Case**: Closes the case if resolved.
5. **Escalate Case**: Escalates the case to the next tier if unresolved.

### Technologies Used
- **AWS Step Functions**: Orchestrates the workflow.
- **AWS Lambda**: Executes tasks for each step in the workflow.
- **Amazon States Language (ASL)**: Defines the state machine in JSON.

---

## Project Structure
├── README.md        
├── lambda/
│   ├── OpenCaseFunction.js
│   ├── AssignCaseFunction.js
│   ├── WorkOnCaseFunction.js
│   ├── CloseCaseFunction.js
│   └── EscalateCaseFunction.js
└── step-functions/
└── state-machine-definition.json

---

## How to Run This Project
1. Deploy the Lambda functions in the AWS Lambda Console.
2. Create an AWS Step Functions state machine and paste the state machine definition.
3. Test the workflow by executing the state machine with input like:
    ```json
    { "inputCaseID": "001" }
    ```
4. Observe the results and debug if necessary.

---

## Disclaimer
This project is for educational purposes and demonstrates the basics of AWS Step Functions and Lambda integration. Ensure to clean up your AWS resources after testing to avoid unexpected charges.
