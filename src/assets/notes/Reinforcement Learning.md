Machine learning can be ==categorized in three ways:==

- **Supervised Learning**: uses labeled data as input, and predicts outcomes. It receives feedback from a ==Loss function== acting as a ==‘supervisor’.==

- **Unsupervised Learning**: uses unlabeled data as input and detects ==hidden patterns== in the data such as *clusters* or *anomalies*. It receives no feedback from a supervisor.

- **Reinforcement Learning**: gathers inputs and receives feedback by interacting with the ==external world.== It outputs the best actions that it needs to take while interacting with that world.

> [!question] What problems are RL used to solve?
> **Control task** or **Decision task**, where you operate a system that interacts with the real world.

- A robot or drone that has to learn the task of picking a device from one box and putting it in a container
- Operating a drone or autonomous vehicle
- Manipulating a robot to navigate the environment and perform various tasks
- Managing an investment portfolio and taking trading decisions
- Playing games such as Go, Chess, video games
## Markov Decision Process (MDP)
![[Pasted image 20251027131916.png]]
MDP has 5 components:
1. **Agent:** it’s the system that you operate eg. the robot. This is the model that you want to build and train using RL. 
2. **Environment**: the real-world environment with which the agent interacts as part of its operation. eg. The terrain that the robot has to navigate, its surroundings, factors such as wind, friction, lighting, temperature and so on.
3. **State**: this represents the current ‘state of the world’ at any point. eg. it could capture the position of the robot relative to its terrain, the position of objects around it, and perhaps the direction and speed of the wind.
4. **Action**: these are the actions that the agent takes to interact with the environment. eg. The robot can turn right, left, move forward, go backward, bend, raise its hand and so on.
5. **Reward**: is the positive or negative reinforcement that the agent receives from the environment as a result of its actions. It is a way to evaluate the ‘good-ness’ or ‘bad-ness’ of a particular action.

### Time-step
In each time-step, three things occur — **state**, **action** and **reward**, which fully describe what happened in that time-step.

So the execution of the MDP can be described as a trajectory of occurrences ==(in terms of state, action, reward)== over a sequence of time-steps, as below.

(s3,a3,r4, s4,a4,r5, s5,a5,r6, s6)

### Terminal (End) State and Episode
![[Pasted image 20251027135041.png]]
For RL tasks that have a well-defined end or ==Terminal state==, a complete sequence from the starting state to the end state is called an **episode**. eg. Each round of a game is an episode.

- So at the end of an episode, you can reset to a starting state (or randomly pick one from a set of starting states) and play another complete episode, and repeat.
- Each episode is ==independent== of the next one.

### Return
The total reward over all time-steps. What we really care about is the ==cumulative rewards.==

![[Pasted image 20251027140901.png]]

## Return is calculated using *Discounted Rewards*
When we calculate Return, rather than simply adding up all the rewards, we apply a discount factor γ to weight later rewards over time. These are known as **Discounted Rewards.**

_Return = r₀ +γ r₁ + γ² r₂ + ….+ γⁿ rₙ_

It also encourages the agent to care more about the ==immediate reward== compared to ==later rewards== since later rewards will be more heavily discounted.

## Rewards that give us the *highest Total Returns* are better
The second point is that if the agent had to choose between getting some reward now versus getting a much bigger reward later, the bigger reward is most likely preferable.

![[Pasted image 20251027155058.png]]
### Policy
The strategy followed to pick an action.
- Eg. Always pick the next action at random
- Eg. Always pick the next state that gives the highest known reward
- Eg. Take chances and explore new states in the hope of finding a better path.
- Eg. Always play it safe and avoid the chance of a negative reward.
![[Pasted image 20251027155522.png]]
#### Policy is like a (huge) Lookup Table
which maps a state to an action.
![[Pasted image 20251027155642.png]]

Given the current state, the agent looks up that state in the table to find the action that it should pick.

![[Pasted image 20251027155723.png]]
In practice, for real-world problems, there are so many states and so many actions, that a ==function== is used, not a Lookup Table, that maps a state to an action.
## Deterministic and Stochastic *Policies*
**A Deterministic Policy** is a Policy where the agent always chooses the same fixed action when it reaches a particular state.

**A Stochastic Policy** is a Policy where the agent varies the actions it chooses for a state, based on some probability for each action.

It might do this while playing a game so that it doesn’t become completely predictable.
Eg while playing Rock Paper Scissors, if it always played the same move, opponents can figure this out and easily defeat it.

Which policy should the agent choose?
Compare two policies, find out which is better (highest ==expected return== = *Value*)
## Value
It tells you the expected **Return** by following some **Policy**.
### State Value
The expected Return from a given state, by executing actions based on a given policy π from that state onward. In other words, the ==State Value function ==maps a **State** to its **Value**.
![[Pasted image 20251028093420.png]]
### State-Action Value (Q-Value)
The expected Return by taking a given action from a given state, and then, by executing actions based on a given policy π after that. In other words, the ==State-Action Value function== maps a **State-Action** pair to its **Value**.
![[Pasted image 20251028093629.png]]

> [!info] Use the **Value Function** to compare Policies
## Reward, Return and Value
- **Reward** is the immediate reward obtained for a single action.
- **Return** is the total of all the discounted rewards obtained till the end of that episode.
- **Value** is the mean Return (aka expected Return) over many episodes.
## The ‘best’ Policy is called the *Optimal Policy*
==The Optimal Policy== is the policy that will yield more **Returns** to the agent than all other policies.
![[Pasted image 20251028101202.png]]
==Finding the optimal policy== **=** ==Solving the RL problem==
# RL Solution Categories
## Model-based vs Model-free
**Model-based** approaches are used when the internal operation of the environment is known.
In other words, we can reliably say what **Next State** and **Reward** will be output by the environment when some **Action** is performed from some **Current State**.
![[Pasted image 20251028103209.png]]

**Model-free** approaches are used when the environment is very complex and its internal dynamics are not known. They treat the environment as a black-box.
![[Pasted image 20251028112949.png]]
## Prediction vs Control
With a **Prediction** problem, we are given a *Policy* as input, and the goal is to output the corresponding *Value function*. This could be any *Policy*, not necessarily an *Optimal Policy*.

With a **Control** problem, no input is provided, and the goal is to explore the policy space and find the *Optimal Policy*.

![[Pasted image 20251028113812.png]]

## Classifying Popular RL Algorithms
![[Pasted image 20251028113904.png]]

## Model-based Approaches
Because they can produce the exact outcome of every state and action interaction, model-based approaches can find a solution analytically without actually interacting with the environment.

As an example, with a **model-based** approach to play chess, you would program in all the rules and strategies of the game of chess. On the other hand, a **model-free** algorithm would know nothing about the game of chess itself. Its only knowledge would be generic information such as how states are represented and what actions are possible. It learns about chess only in an abstract sense by observing what reward it obtains when it tries some action.

Most real-world problems are ==model-free== because the environment is usually too complex to build a model.
## Model-free Approaches
Model-free solutions, by contrast, are able to observe the environment’s behavior only by actually interacting with it.
### Interact with the environment
![[Pasted image 20251028123237.png]]

The agent acquires experience through trial and error. It tries steps and receives positive or negative feedback. This is much the same as a human would learn.
### Trajectory of interactions
As the agent takes each step, it follows a path (ie. trajectory).
![[Pasted image 20251028123733.png]]
The agent’s trajectory becomes the algorithm’s ‘training data’.
## The Bellman Equation
The foundation for all RL algorithms.
### 1.
![[Pasted image 20251028125641.png]]
When state transitions from S7 to S8 (terminal state), agent got its reward(R8), episode ends.
Since there are no more time-steps, the **Return** is equal to the **Reward**. ==(Return 7 = Reward 8)==
### 2.
![[Pasted image 20251103140604.png]]
When you go one step back, you can see that the **Return from S6** is equal to **Reward of 6** + **Discounted Return from S7**. (*Return 6* = ==Reward 6== + ==(discount) * Return 7==)

> [!info] You don't need to know any steps beyond S7
### 3.
#### Bellman Equation for Return
![[Pasted image 20251103141534.png]]
In general, the return from any state can be decomposed into two parts:
1. the **immediate reward(R1)** from the action to reach the next state, 
2. plus the **Discounted Return from that next state** by following the same policy for all subsequent steps.
#### Bellman Equation for State Value
![[Pasted image 20251103142755.png]]
#### Bellman Equation for State-Action Value
![[Pasted image 20251103143314.png]]
### Benefits of the Bellman Equation
1. ==Return can be computed recursively without going to the end of the episode==
If you know the return from the next step, you can go back from that value.

2. ==We can work with estimates, rather than exact values==
Rather than directly measuring the **Return** from a state, you can use the lefthand side of the equation.
By doing this, you are working with *estimates*, rather than exact values.
Later on, you can measure the difference to find the error rate.
# Model-free algorithms
Values, produced by choosing the **Optimal Policy**, called *Optimal Value*.

That means, you can find the Optimal Policy directly or indirectly:
- State-Action Value-based (indirect). 
- Policy-based (direct)

==Model-free algorithms categories:==
**Lookup Table vs Function**
Simpler algorithms implement the Policy or Value as a Lookup Table, while the more advanced algorithms implement a Policy or Value function, using a Function Approximator like a Neural Network.
![[Pasted image 20251104131058.png]]

At high-level, all of this algorithms perform these 4 tasks:
![[Pasted image 20251104131317.png]]
## 1. Initialize Estimates
![[Pasted image 20251104131657.png]]
## 2. Take an Action
![[Pasted image 20251104131939.png]]

>[!question] There are many possible actions. Which one will be chosen by the agent?
### Exploration vs Exploitation
**Exploration** — when we first start learning, we have no idea which actions are ‘good’ and which are ‘bad‘. So we go through a process of discovery where we randomly try different actions and observe the rewards.
![[Pasted image 20251104134605.png]]

**Exploitation** — on the other end of the spectrum, when the model is fully trained, we have already explored all possible actions, so we can pick the best actions which will yield the maximum return.
![[Pasted image 20251104134637.png]]

The agent needs to find the right balance between **Exploration** and **Exploitation**.
#### Policy-based uses its own estimates to pick an action
A Policy-based agent’s Policy Table already has an ongoing estimate of the optimal policy, which tells you the desired probability of all the actions you can take from any given state. So it just picks an action based on the probabilities of that estimated optimal policy. The higher the probability of an action, the more likely it is to get picked.
![[Pasted image 20251104135244.png]]
#### Value-based uses an ε-greedy strategy to pick an action
It uses an exploration rate ε which it adjusts as training progresses to ensure more exploration in the early stages of training and shifts towards more exploitation in the later stages.
![[Pasted image 20251104135508.png]]
We set ε initially to 1. Then, at the start of each episode, we decay ε by some rate.

It selects a random action (ie. explores) with probability ε. Since ε is higher in the early stages, the agent is more likely to **explore**.
With probability ‘1 — ε’, it selects the best action (ie. exploit). As ε goes down, the likelihood of exploration becomes less and the agent becomes ‘greedy’ ==by **exploiting** the environment more and more.==
## 3. Get feedback from the environment
The agent receives feedback from the environment in the form of a **reward**.
## 4. Improve estimates
![[Pasted image 20251104140036.png]]
#### Policy-based updates the probability of the action
The agent says ‘If I got a positive reward, then I will update my Policy table to increase the probability of the action I just took. That way, the next time I will be more likely to take that action’
![[Pasted image 20251104140145.png]]
#### Value-based updates its value based on the Bellman Equation
A Value-based agent says ‘My previous estimate told me to expect this much Value from this action. Based on the reward I just got, the Bellman Equation tells me that my Value should be higher (or lower). I will update my Value table to reduce that gap.’
![[Pasted image 20251104140348.png]]

==Remember the Bellman equation:==
![[Pasted image 20251104144400.png]]

Because the algorithm uses **Estimated Values**, this equation may not be satisfied.
If we subtract the two values, we would find the **Error**.
![[Pasted image 20251104144638.png]]

The algorithm incrementally updates its Q-value estimates in a way that reduces the error.
![[Pasted image 20251104144723.png]]

## Putting it all together
The agent now has improved estimates. This completes the flow for the four operations. The algorithm continues doing this flow till the end of the episode. Then it restarts a new episode and repeats.
![[Pasted image 20251104145039.png]]
## Different Ways to Improve Estimates
- **Frequency** — the number of forward steps taken before an update.
- **Depth** — the number of backward steps to propagate an update.
- **Formula** that is used to compute the updated estimate.
#### Frequency
How many steps the agent should take before updating the estimates?
- **Episode** — The simplest idea is that it takes an action, observes rewards, saves them, then takes another action, observes those rewards and saves them, and keeps doing that till the end of the episode. Finally, at the end of the episode, the algorithm takes all those rewards and uses them to update our estimates.
- **One Step** — Alternately, rather than waiting till we go all the way to the end of the episode, we could take just one step, observe those rewards and do the update right away.
- **N Steps** — The above two options are the two ends of the spectrum. In between, we could do the update after N steps.
#### Depth
After taking some forward steps, the next question is how far back should the algorithm propagate its update estimates?
- **Episode** — If the agent took forward steps till the end of the episode, the algorithm could update the estimates for every state-action pair that it took along the way.
- **One Step** — Alternately, it could update the estimates for only the current state-action pair.
- **N Steps** — The above two options are the two ends of the spectrum. In between, we could update N steps along the way
#### Update Formula
The formula used to update the estimates has many variations:
- Value-based updates use some flavor of the Bellman Equation to update the Q-value with an ‘error’ value. For example, this formula incrementally updates the Q-value estimate with an error value known as the **TD Error.**
![[Pasted image 20251104154648.png]]
- Policy-based updates increase or decrease the probability of the action that the agent took, based on whether we received a good reward or not.
## Relationship between Model-free Algorithms
![[Pasted image 20251104155242.png]]
# Q-Learning
Suppose the below is our environment:
![[Pasted image 20251127093302.png]]

To find the **Optimal Policy**, following steps are executed:
![[Pasted image 20251127093405.png]]

Let's examine each step one-by-one.
## Q Learning uses two different actions in each time-step
In steps 2 and 3, the agent uses ==ε-greedy== algorithm to pick an action.
- We are in the *current state (S1)*.
- We are taking *an action (the current action = a1)*.
- We are getting a *reward* because of this action *(R1)*.
- As a result, we are moving to the *next state (S2)*.

![[Pasted image 20251127094553.png]]

In step 4, the algorithm has to use a ==Q-value from the next state== in order to update its **estimated Q-value (Q1)** for the *current state* and *selected action*.

>[!question] Which action the algorithm will choose?

![[Pasted image 20251127104050.png]]

It uses the **action (a4)** from the next state which has *the highest Q-value (Q4)*.

>[!important] The agent will not necessarily take this action, it just chooses it to update the **Q1** value.

Now that *the target Q value* is selected, **the current Q value** will be updated using the formula:

**Q1** = **Q1** + a (==R1== + y * *Q4* - **Q1**)

![[Pasted image 20251127104741.png]]

Now, **Q1** is 9.

Let's move to the next time-step.
Agent is continuing to use ε-greedy policy to pick an action. At this phase, it is exploring rather than exploiting, so it choses *action 2 (a2)*.

![[Pasted image 20251127105444.png]]

This is known as ==*‘off-policy’* learning== because the actions that are executed are different from the target actions that are used for learning.
## How does the Q-table get populated?
Initialize the table as all **0s**.
![[Pasted image 20251127110647.png]]

The algorithm then picks an ==ε-greedy action==, gets feedback from the environment, and uses the formula to update the Q-value.
![[Pasted image 20251127110759.png]]
## Why do estimates become more accurate over time? (part 1)
At every time-step, the estimates become slightly more accurate because they get updated with real observations.

The update formula combines three terms in some weighted proportion:
- **The reward** for the current action (Estimate)
- Best Estimated **Q-value of the next state-action** (Estimate)
- Estimated **Q-value of the current state-action** ==(Concrete Data)==
![[Pasted image 20251127111853.png]]

## The Q-value gets updated with real rewards
Let's just focus on one cell: Q-value for **state S3** and **action a1**

![[Pasted image 20251127112927.png]]

This time we see that some of the other Q-values in the table have also been filled with values. As the agent follows various paths and starts to visit state-action pairs, those cells which were previously zeros have been populated.

Also, notice that the reward each time (for the same action from the same state) need not be the same.

![[Pasted image 20251127114155.png]]

Let’s visit that cell a third time. By the way, notice that the target action (in purple) need not be the same in each of our three visits.

![[Pasted image 20251127114217.png]]

As we visit that same state-action pair more and more times over many episodes, we collect rewards each time. An individual reward observation might fluctuate, but over time, the rewards will converge towards their expected values. This allows the Q-value to also converge over time.

![[Pasted image 20251127114601.png]]

Recall what the ==Q-value (or State-Action value==) represents. 
It says that you start by taking a particular action from a particular state, then follow the policy after that till the end of the episode, and then measure the **Return**. 
And if you did this many, many times, over many episodes, the Q-value is the **average Return** that you would get.
## Why do estimates become more accurate over time? (part 2)
We’ve seen how the Reward term converges towards the mean or expected value over many iterations.
What about the estimates?

To get a sense of this, let’s look at an example from the final two time-steps of an episode as we reach the *Terminal state*. 
What we will see is that the **Terminal Q-value** accuracy improves because it gets updated with **solely real reward data** and no estimated values.

Let’s say that towards the end of Episode 1, in the (T — 1)ˢᵗ time-step, the agent picks an action as below. The Before-Terminal Q-value is updated based on the target action.

![[Pasted image 20251127115121.png]]

The next time-step is the last one of Episode 1. Here in the Tᵗʰ time-step, the agent picks an action to reach the next state which is a **Terminal state**.

![[Pasted image 20251127115349.png]]

Since the next state is **Terminal**, there is ==no target action==. So the ‘max’ term in the update formula is 0.

>[!important] The update to the Terminal Q-value is based solely on the actual reward data, and it does not rely on any estimated values.

In episode 2, in the (T — 1)ˢᵗ time-step, the Before-Terminal Q-value is updated based on the target action as before.

The ‘**max**’ term in the update formula corresponds to the Terminal Q-value. So, when the update happens, it is as though this ==Terminal Q-value gets transmitted backward to the Before-Terminal Q-value.==

![[Pasted image 20251127124413.png]]

Hence as the accuracy of the Terminal Q-value slowly improves, the Before-Terminal Q-value also becomes more accurate.

Subsequently, those Q-Values trickle back to the (T — 2)ᵗʰ time-step and so on.
## Q-table estimates become more accurate as more episodes are run
As we do more and more iterations, more accurate Q-values slowly get transmitted to cells further up the path. And as each cell receives more updates, that cell’s Q value becomes more and more accurate.

As more and more episodes are run, values in the Q-table get updated multiple times.

![[Pasted image 20251127124755.png]]
## Q-values converge to Optimal Values
The Q-values incrementally become more accurate with each update, moving closer and closer to the optimal values.

![[Pasted image 20251127125002.png]]
# Deep Q Networks
Use a function (*Q-function*) instead of a table to find **Optimal Values.**

![[Pasted image 20251127130432.png]]
## DQN Architecture Components
![[Pasted image 20251127130934.png]]

- **The Q network** is the agent that is trained to produce the *Optimal State-Action value*.
- **Experience Replay** interacts with the environment to generate data to train the Q Network.
- **The Target network** is identical to the Q network.
## High-level DQN Workflow
![[Pasted image 20251127131214.png]]
### Gather Training Data
Now let’s zoom in on this first phase.

**Experience Replay** selects an ==ε-greedy== action from the current state, executes it in the environment, and gets back a reward and the next state.

![[Pasted image 20251127133830.png]]

It saves this observation as a sample of training data.
![[Pasted image 20251127133844.png]]
### Q Network predicts Q-value
All prior **Experience Replay** observations are saved as ==training data==. We now take a random batch of samples from this training data, so that it contains a mix of older and more recent samples.

This batch of training data is then inputted to both networks. The Q network takes the current state and action from each data sample and predicts the Q value for that particular action. This is the ‘*Predicted Q Value*’.

![[Pasted image 20251127140334.png]]
### Target Network predicts Target Q-value
The Target network takes the next state from each data sample and predicts the best Q value out of all actions that can be taken from that state. This is the ‘*Target Q Value*’.

![[Pasted image 20251127140723.png]]
### Compute Loss and Train Q Network
**The Predicted Q Value**, **Target Q Value**, and **the observed reward** from the data sample is used to compute the Loss to train the Q Network. ==The Target Network is not trained==.

![[Pasted image 20251127141051.png]]
### Why do we need Experience Replay?
We need a batch of data samples that are not sequential, because we want to "generalize" our learning.
We need a memory to hold a bunch of data, and then take a batch of it in a shuffled manner so that the data is diverse enough.
### Why do we need a second neural network (Target Network)?
We want to ensure that **Target Q values** remain stable, at least for a short period. But those Target Q values are also predictions after all and we do want them to improve, so a compromise is made. After a pre-configured number of time-steps, the learned weights from the Q Network are copied over to the Target Network.
## DQN Operation in depth
### Initialization
- Execute a few actions to get data from the environment.
- Initialize the **Q Network** with random weights and copy them to the **Target Network**.
### Experience Replay
Starting with the first time step, the *Experience Replay* starts the training data generation phase and uses the Q Network to select an ==ε-greedy action==. 
The **Q Network** acts as the agent while interacting with the environment to generate a training sample. No DQN training happens during this phase.

The **Q Network** predicts the Q-values of all actions that can be taken from the current state. We use those Q-values to select an ε-greedy action.

![[Pasted image 20251128114002.png]]
#### The sample data (Current state, action, reward, next state) is saved
Experience Replay executes the ε-greedy action and receives the next state and reward.
![[Pasted image 20251128114309.png]]

It stores the results in the replay data. Each such result is a sample observation which will later be used as training data.
![[Pasted image 20251128114404.png]]
### Select random training batch
We now start the phase to train the DQN. Select a training batch of random samples from the replay data as input for both networks.
![[Pasted image 20251128114643.png]]
#### Use the current state from the sample as input to predict the Q values for all actions
To simplify the explanation, let’s follow a single sample from the batch. 
The Q network predicts Q values for all actions that can be taken from the state. (**S1**)

![[Pasted image 20251209145807.png]]
#### Select the Predicted Q-value
From the output Q values, select the one for the sample action (**a4**). This is the Predicted Q Value. (**q4**)
![[Pasted image 20251209150022.png]]
#### Use the next state from the sample as input to the Target network
The next state from the sample is input to the Target network (**S2**). 
The Target network predicts Q values for all actions that can be taken from the next state, and selects the maximum of those Q values (**q9**).
![[Pasted image 20251209150155.png]]
#### Get the Target Q Value
The Target Q Value is the output of the Target Network plus the reward from the sample. (**R1 + q9**)
![[Pasted image 20251209150430.png]]
#### Compute Loss
Compute the Mean Squared Error loss using the difference between the Target Q Value (**R1 + q9**) and the Predicted Q Value (**q4**).
![[Pasted image 20251209150625.png]]
#### Back-propagate Loss to Q-Network
Back-propagate the loss and update the weights of the Q Network using ==gradient descent==. 
The Target network is not trained and remains fixed, so no Loss is computed, and back-propagation is not done. 
This completes the processing for this time-step.
![[Pasted image 20251209152910.png]]
#### After T time-steps, copy Q Network weights to Target Network
After T time-steps, copy the Q network weights to the Target network. This lets the Target network get the improved weights so that it can also predict more accurate Q values. Processing continues as before.
![[Pasted image 20251209153952.png]]
The Q network weights and the Target network are again equal.

