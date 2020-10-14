import { VOTED } from '../reducers/voted';

export const voted = (status) => {
    return {
        type: VOTED,
        payload: status
    }
};