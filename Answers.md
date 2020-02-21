1. What problem does the context API help solve?

    context provides a way to share values between components without having to explicitly pass a prop through every level of a tree

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

    Reducers specify how the application's state changes in response to actions sent to the store. While the actions describe what happened, it is the reducer that actually handles all changes in state.

    The store holds the whole state tree of the application. The only way to change the state inside it is to dispatch an action on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is available to the enitre application, while component state is local to a specific component. Component state is good for when you have few state changes within a small area in your application, but when you have a lot of moving pieces that affect multiple things in the application, application state should be used

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux thunk allows asynchronous dispatches, which are necessary for changing our state based on api calls. In order to make calls this way, we need to use a higher order function that will manage our dispatches between the actions and reducers.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like the context because it is shorter to type
