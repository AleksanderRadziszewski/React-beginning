const loggedReducer = (state = true, action) => {
        switch(action.type) {
            case 'SIGN IN':
                return !state;
            default:
                return state;

        }
};

export default loggedReducer;