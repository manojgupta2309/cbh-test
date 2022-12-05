# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1
- update/alter agent table with new column custom_agent_id
    # plan
    - schema changes for updating new column and field type
    - define the constraints -> unique, foreign key,default 
    - if the ID is indexed then need to update indexing column for custom agent id
    # acceptance criteria
     - new column name should be added in agent table
     - record should be retrived by custom agent id
    # effort estimate
    - 8 hours

    # calrification
     - if new agent ID will be user defined then what to with old records which has DB ID as agent ID.
     - accordingly we need to make the above decision.

# Ticket 2
- UI changes to accept custom agent id
    # plan
    - update UI component to allow user to enter  agent ID
    - update the validation rule for agent ID
    - update the API request body fields with agent ID

    # acceptance criteria
     - new text box UI element should be added in agent form
     - validation of agent ID
     - agent ID should reflect in report
    # effort estimate
    - 8 hours

    # test case
    - add new test case for passing agent id in UI.
    - effort 4 hours




# Ticket 3
- API changes to accept updated request body.

    # plan
    - update agent model add agent ID property with type
    - update the validation rule for agent ID
    - validate the request body fields with agent ID at server
    - handle the invalid request with status code

    # acceptance criteria
     - API should accept agent ID and update in DB

    # effort estimate
    - 8 hours

    # test case
    - add new test case for passing agent id in UI.
    - effort 4 hours