const string = Object.freeze({
  shared: {
    errorTitle: "Error",
    organizatios: "Organizations",
    organizationType: "org",
    users: "Users",
    usersType: "users",
    searchPeople: "People with",
    searchOrgs: "organizations with",
    searchPage: "Search Results!",
    home: "Home",
    search: "Search!",
  },
  errors: {
    networkError: "Please check your internet connection and try again",
    requestTimeout: "Your internet connection isn't stable",
    serverError: "Something went wrong, please contact us",
    generalError: "Something went wrong, please try again later",
    unauthorizedError: "You aren't authorized, please re-login and check again",
    forbiddenError: "You don't have access to perform this request",
    notFoundError: "Failed to find the requested resource, please contact us",
    rejectError: "You aren't authorized to perform this request",
    badDataError: "Something went wrong when parsing data, please try again later",
    exceptionError: "Something went wrong when performing request, please contact us",
  },
})

export default string
