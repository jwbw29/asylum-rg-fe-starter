# Build Sprint 3

To begin work on this ticket, make sure you have finished:

1. [x] Getting locally setup.
2. [x] Completed the `Onboarding Module` in your course.
3. [x] Completed Build Sprint 1 and 2.

### Objective

Deliver the following:

- [x] Integrate the Auth0 microservice into the project.
- [x] Establish a `Profile Page` that only appears on the navigation menu if a user is logged in.
- [x] The `Profile Page` should display some basic info on the logged in user.
- [x] There should be a Login/Logout button in the navigation menu that redirects you to Auth0 to login.

### Relevant Guides

- [x] READ: The following guide from Auth0 will show you how to proceed from start to finish: https://auth0.com/blog/complete-guide-to-react-user-authentication/.

### Guidance

Many companies use third-party microservices to establish auth in their application. Your job is to establish authentication for this application using the popular auth service: Auth0.

- [x] You can create a free account with Auth0 for this task.
- After ensuring the login/logout flow works, you will
  - [x] create a profile page that displays user info using the `useAuth0()` hook and dynamically displays based on the logged in user.
  - {
    "sub": "github|71021894",
    "nickname": "jwbw29",
    "name": "Justin Byrd",
    "picture": "https://avatars.githubusercontent.com/u/71021894?v=4",
    "updated_at": "2024-01-12T22:22:06.916Z"
    }

You must:

1. [x] Ensure everything is working properly after the Auth0 integration. Components should render correctly and show the data the same way they did before.

2. [x] Do not use a Node version higher than 16.16.0. If you are, you can use `nvm` (for Mac) or `nvm-windows` to easily toggle your node versions in directories.

3. [x] Make this project your own, but keep the integrity of the main files so that the app can render and work when you wish to present it.

## Deliverables

Submit the following in your course:

- [x] Link to your forked repo with the code for the new profile page and auth integration
- [x] Link to a Loom video answering the prompt in the `Submit Your Deliverables` assignment in your course
