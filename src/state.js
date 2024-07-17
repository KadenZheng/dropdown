let state = 0;

const toggleState = () => {
    state == 0 ? (state = 1) : (state = 0);
    return state;
};

export default toggleState;
